const Joi = require('joi');

const blogSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'string.min': 'Title should be at least 3 characters',
      'string.max': 'Title should not exceed 100 characters'
    }),

  description: Joi.string()
    .min(10)
    .max(500)
    .required()
    .messages({
      'string.empty': 'Description is required',
      'string.min': 'Description should be at least 10 characters',
      'string.max': 'Description should not exceed 500 characters'
    }),

  content: Joi.string()
    .min(10)
    .required()
    .messages({
      'string.empty': 'Content is required',
      'string.min': 'Content should be at least 20 characters'
    })
});

module.exports = blogSchema;
