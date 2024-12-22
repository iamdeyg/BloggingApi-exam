const { getAllPost, getPost } = require('../services/postServices')
const getPosts = async (req, res) => {
    try{
        const { author_id, title, tags, sortBy = "created_at", order = "desc", page = 1, perPage = 20 } = req.query;
        const state = "published" //make state as published so it immutable. this helps in displaying just published posts

        const posts = await getAllPost({ author_id, title, state, tags, page, perPage, sortBy, order })
        res.status(200).json({success: true, posts})
    }
    catch(err){
        res.status(err.statusCode).json({ success: false, message: err.message })
    }
}

const getSinglePost = async (req, res) => {
    try{
        const id = req.params.id
        const user = req.user
        const post = await getPost(id, user)
        res.status(200).json({ success: true, post})
    }
    catch(err){
        res.status(err.statusCode).json({ success: false, message: err.message})
    }

}

module.exports = {
    getPosts, getSinglePost
}