const authServices = require('../services/authServices')

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
  
    try {
      const token = await authServices.registerUser(firstname, lastname, email, password);
      res.status(201).json({ success: true, token });
    } catch (err) {
      res.status(err.statusCode).json({ success: false, message: err.message });
    }
  };

const login = async (req, res) => {
  const { email, password } = req.body

  try{
    token = await authServices.loginUser(email, password);
    res.status(200).json({ success: true, token })
  } catch (err) {
    res.status(err.statusCode).json({ success: false, message: err.message})
  }
}

  module.exports = {
    register,
    login
  }