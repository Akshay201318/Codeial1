const mongoose = require('mongoose');


// Creating posts schema

const postSchema = new mongoose.Schema({
    
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
},
    {
        timestamps: true
    });


//Exporting the model
    
const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;
