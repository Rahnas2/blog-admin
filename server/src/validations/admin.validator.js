const Joi = require('joi');

const adminSchema = Joi.object({
  userName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Username is required',
      'string.min': 'Username should be at least 3 characters',
      'string.max': 'Username should not exceed 30 characters'
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password should be at least 6 characters'
    }),
});

module.exports = adminSchema;
