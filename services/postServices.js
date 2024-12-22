const { readTime } = require('../utils/helpers')
const { error } = require('../utils/helpers')
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


const Post = require("../models/postModel")

const getAllPost = async ({ author_id, title, state, tags, sortBy, order, page, perPage}) => {
    const query = { }
    const sortOption = {};
    if(author_id){
        query.author = author_id
    };
    if(title){
        query.title = title
    };
    if(state){
        query.state = state
    };
    if(tags){
        query.tags = tags
    };
    sortOption[sortBy] = order === "desc" ? -1 : 1;
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(perPage, 10),
        sort: sortOption,
      };
    const posts = await Post.paginate(query, options)
    if(!posts){
        error(404, 'Post Not Found!')
    };
    return posts
}

const getPost = async (id, author) => {
    if (!ObjectId.isValid(id)) {
        error(400, 'Invalid request')
    }
    const post = await Post.find({ _id: id}).populate("author", "firstname lastname email")
    if(!post){
        error(404, 'Post not found!')
    };
    //check if post is in draft state and authorize user 
    if(post[0].state == 'draft'){
        if(author){
            //authorize the user
        if(post[0].author._id.toString() !== author.id){
            error(403, 'Unauthorized!')
        }
        else{
            return post
        }
        }
        else{
            error(403, 'Unauthorized!')
        }
    }
    //update post read count if request is not from it's author
    try{
        if(!author || (post[0].author._id.toString() !== author.id)){
            //update the read count and return the post
            const newPost = await Post.findOneAndUpdate({_id: id}, {$inc: {read_count: 1}}, {new: true}).populate("author", "firstname lastname email")
            return newPost
        }
        //return post for author without updating the read count
        return post
    }
    catch(err){
        error(500, 'Internal Server Error')
    }
}

const createPost = async (title, description, tags, body, author) => {
    const newPost = await Post.create({
        title,
        description, 
        tags, 
        body, 
        author,
        reading_time: readTime(body)
    })
    if(!newPost){
        error(500, 'Internal Server Error!')

    };
    return newPost

}

const deletePost = async (id, author) => {
    try{
        const post = await Post.findById(id)
        if(!post){
            error(404, 'Post Not Found!')
        }
        if(post.author !== author.id){
            error(403, 'Unauthorized!')

        }
        await Post.findByIdAndDelete(id)
        return true
    }
    catch(err){
        error(500, 'Internal Server Error')
    }
}

const updatePost = async ({id, author, title, state, tags, description, body}) => {
    try{
        const query = {}
        if(title) query.title = title;
        if(state) query.state = state;
        if(tags) query.tags = tags;
        if(description) query.description = description;
        if(body) query.body = body;
        query.updated_at = Date.now()

        const post = await Post.findById(id)
        if(!post){
            error(404, 'Post Not Found')
        }
        if(post.author !== author.id){
            error(403, 'Unauthorized')

        }
        //perform update here
        updatedPost = await Post.findByIdAndUpdate(id, query, {new: true})
        return updatedPost
    }
    catch(err){
        error(500, 'Internal Server Error!')
    }
}

module.exports = {
    getAllPost,
    getPost,
    createPost,
    deletePost,
    updatePost
}