const adminRepo = require('../repositories/admin.repository');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const { accessToken, refreshToken } = require('../utils/generateToken')

exports.registerAdmin = async ({ userName, password }) => {
    const existing = await adminRepo.findAdminByUserName(userName);
    if (existing) throw { status: 400, message: 'UserName already registered' };

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user with hashed password
    const admin = await adminRepo.createAdmin({
        userName,
        password: hashedPassword,
    });

    return { id: admin._id, userName: admin.userName }
};

exports.loginAdmin = async ({ userName, password }) => {
    const admin = await adminRepo.findAdminByUserName(userName);
    if (!admin) throw { status: 400, message: 'Invalid credentials' };

    const matched = await bcrypt.compare(password, admin.password);
    if (!matched) throw { status: 400, message: 'Invalid credentials' };

    const tokenAccess = accessToken(admin);
    const tokenRefresh = refreshToken(admin);

    return { accessToken: tokenAccess, refreshToken: tokenRefresh, admin: { id: admin._id, userName: admin.userName } };
};

exports.refreshToken = async (refreshToken) => {
    const decode = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET)

    const tokenAccess = accessToken(decode);

    return tokenAccess
}