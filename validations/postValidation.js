const Joi = require('joi')

const postSchema = Joi.object({
    title: Joi.string()
            .min(2)
            .required()
            .messages({
      "any.required": "Title is required",
    }),
    description: Joi.string()
            .min(2)
            .required()
            .messages({
      "any.required": "Description is required",
    }),
    tags: Joi.array(),
    body: Joi.string()
            .required()
            .messages({
      "any.required": "Body is required",
    }),
  });
  module.exports = { postSchema };
