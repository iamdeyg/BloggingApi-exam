const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema


const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true

    },
    description: {
        type: String,
    },
    tags: {
        type: [String]
    },
    author: {
        type: String,
        ref: 'user',
        required: true
    },
    state: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    body:{
        type: String,
        required: true

    },
    read_count: {
        type: Number,
        required: true,
        default: 0
    },
    reading_time: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

postSchema.plugin(mongoosePaginate)
const postModel = mongoose.model('posts', postSchema)

module.exports = postModel


