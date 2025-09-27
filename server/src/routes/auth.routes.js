const express = require('express')

const {register, login, logout} = require('../controllers/auth.controller')

const {validateBody} = require('../middlewares/validate.middleware');
const adminSchema = require('../validations/admin.validator');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

//Register
router.post('/register', validateBody(adminSchema), register)
router.post('/login', validateBody(adminSchema), login)
router.post('/logout', protect, logout)

module.exports = router