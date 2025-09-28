const jwt = require('jsonwebtoken');
const adminRepo = require('../repositories/admin.repository')
const { httpStatusCodes } = require('../utils/httpStatusCodes');


exports.protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(httpStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });


    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET);
        const admin = await adminRepo.findAdminById(decoded.id).select('-password');
        if (!admin) return res.status(httpStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
        req.admin = admin;
        next();
    } catch (err) {
        return res.status(httpStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
};