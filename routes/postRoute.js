const router = require('express').Router()
const {getPosts, getSinglePost } = require('../controllers/postControllers')
const validateToken = require('../middlewares/validateToken')

router.get('/', getPosts) //get all post
router.get('/:id', getSinglePost) // get single post

module.exports = router