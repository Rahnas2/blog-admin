const admin = require('../models/admin')

exports.findAdminByUserName = (userName) => admin.findOne({ userName });
exports.createAdmin = (data) => admin.create(data);
exports.findAdminById = (id) => admin.findById(id);