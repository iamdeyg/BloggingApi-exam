const Joi = require('joi')

const registerSchema = Joi.object({
    firstname: Joi.string()
            .min(2).max(30)
            .required()
            .messages({
      "any.required": "Firstname is required",
    }),
    lastname: Joi.string()
            .min(2).max(30)
            .required()
            .messages({
      "any.required": "Lastname is required",
    }),
    email: Joi.string()
            .email()
            .required()
            .messages({
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),

    password: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.min": "Password must be at least 6 characters",
                    "any.required": "Password is required",
    }),
  });

  const loginSchema = Joi.object({
    email: Joi.string()
            .email()
            .required()
            .messages({
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),

    password: Joi.string()
                .required()
                .messages({
                    "any.required": "Password is required",
    }),
  });

  module.exports = { registerSchema, loginSchema };
