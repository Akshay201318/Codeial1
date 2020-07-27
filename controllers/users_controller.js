module.exports.profile = function (req, res) {
    return res.render('user_profile', {
        title:"Users profile"
    });
}


// module.exports.profile = function (req, res) {
//     return res.end('<h1>This is the user profile page</h1>');
// }