const express = require('express')
const authController = require('../controllers/authControllers')
const validateRequest = require('../middlewares/validateRequest')
const { registerSchema, loginSchema } = require('../validations/authValidation')

const router = express.Router()

router.post("/register", validateRequest(registerSchema), authController.register);
router.post("/login", validateRequest(loginSchema) ,authController.login)

module.exports = router