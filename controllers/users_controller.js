
//importing the model
const User = require('../models/user');


// Controlling or rendering user_profile page
module.exports.profile = function (req, res) {

    User.findById(req.params.id, function (err, user) {

        return res.render('user_profile', {
            title: "Users profile",
            profile_user: user
        });
        
    });
    
}
//controlling user update page

module.exports.update = function (req, res) {
    
    if (req.user.id == req.params.id) {
        
        User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
           
            return res.redirect('back');
        });
    }
    else {
        return res.status(401).send('Unauthoreised');
    }
}

// Controlling or rendering signUp page 
module.exports.signUp = function (req, res) {

    if(req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
    title:"Sign up"
});
}

// Controlling or rendering signIn page 
module.exports.signIn = function (req, res) {
    
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
    title:"Sign In"
});
}

//getting data from sign up page

module.exports.create = function (req, res) {
    
    if (req.body.password != req.body.confirm_password)
    {
        return res.redirect('back'); 
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        
        if (err) {
            console.log("error in finding the user");
            return;
        }
        
        if (!user) {
            User.create(req.body, function (err, user) {
                
                if (err) {
                    console.log("error in creating the user");
                    return;
                }
                
                return res.redirect('/users/sign-in');
                
            });
        }
        else {
            return res.redirect('back');
        }
    });
}

//getting data from sign in page

module.exports.createSession = function (req, res) {

    req.flash('success', 'Logged in Successfully!');
    return res.redirect('/');
}

//Sign out controller
module.exports.destroySession = function (req, res) {
    
    req.logout();
    req.flash('success', 'Logged out Successfully!');
    return res.redirect('/');
}