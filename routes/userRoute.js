const router = require('express').Router()
const { getUserPosts, getUserPost, createUserPost, deletePostById, updatePostById } = require('../controllers/userControllers')
const validateRequest = require('../middlewares/validateRequest')
const {postSchema} = require('../validations/postValidation')

router.get('/posts', getUserPosts)
router.get('/posts/:id', getUserPost)
router.post('/posts', validateRequest(postSchema), createUserPost)
router.delete('/posts/:id', deletePostById)
router.put('/posts/:id', updatePostById)

module.exports = router