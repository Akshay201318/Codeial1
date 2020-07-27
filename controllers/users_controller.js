
// Controlling or rendering user_profile page 
module.exports.profile = function (req, res) {
    return res.render('user_profile', {
        title:"Users profile"
    });
}

// Controlling or rendering signUp page 
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up',{
    title:"Sign up"
});
}

// Controlling or rendering signIn page 
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in',{
    title:"Sign In"
});
}

//getting data from sign up page

module.exports.create = function (req, res) {
    //TODO Later
}

//getting data from sign in page

module.exports.createSession = function (req, res) {
    //TODO Later
}