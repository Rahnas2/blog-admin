const authService = require('../services/auth.service')

exports.register = async (req, res, next) => {
    try {
        const admin = await authService.registerAdmin(req.body);
        res.status(201).json(admin);
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, admin } = await authService.loginAdmin(req.body);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken, admin });;
    } catch (error) {
        next(error)
    }
}

exports.logout = (req, res, next) => {
    try {
        res.clearCookie('refreshToken');
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        next(error)
    }
}