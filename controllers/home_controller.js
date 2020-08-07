const Post = require('../models/post');

module.exports.home = async function (req, res) {

    // posts.find({}, function (err, posts) {


    //     return res.render('home', {
    //         title: "Home",
    //         posts: posts
    //     });
        
    // });

    const posts = await Post.find().populate('user')
    console.log(posts.user);
    return res.render('home', {
                title: "Home",
                posts: posts
            });
    // Post.find({}).populate('users').exec(function (err, posts) {


    //     return res.render('home', {
    //         title: "Home",
    //         posts: posts
    //     });
        
    // });
    
}