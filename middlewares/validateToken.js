const jwt = require("jsonwebtoken")
const validateToken = (req, res, next) => {
    const headers = req.headers['authorization']
    const token = headers && headers.split(' ')[1]
    if(!token){
        res.status(403).json({ success: false, message: "Invalid Token"})
    }
    try{
        //decrypt the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch(err){
        res.status(401).json({ success: false, message: `Invalid Token, ${err}`})
    }
}

module.exports = validateToken