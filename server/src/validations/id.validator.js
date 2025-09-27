const Joi = require('joi');
const mongoose = require('mongoose');

const objectId = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid"); // throws Joi validation error
  }
  return value;
}, "ObjectId Validation");

const idSchema = Joi.object({
  id: objectId.required()
});

module.exports = idSchema