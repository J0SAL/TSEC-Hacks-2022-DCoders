const User = require('../models/User')


exports.registerUser = async (req, res) => {
    try {
        const user = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            skills: {
                cpp: req.body.cpp,
                java: req.body.java,
                python: req.body.python,
                javascript: req.body.javascript,
                flutter: req.body.flutter
            }
        }   
        const newUser = new User(user)
        await newUser.save()

        context = {"message": "Registration Success"};
        res.json(context);
    } catch (err) {
        console.log(err);
        context = {"message": "Registration Failed"};
        res.json(context);
    }
}

exports.loginUser = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.body.email });
        if (data) {
            if (data.password === req.body.password) {
                // context = {"message": "Login Success"};
                res.json(data);
            } else {
                context = {"message": "Incorrect Password"};
                res.json(context);
            }
        } else {
            context = {"message": "User Not found"};
            res.json(context);
        }
    } catch (err) {
        console.log(err);
        context = {"message": "Login Failed"};
        res.json(context);
    }
}

exports.updateUser = async (req, res) => {
    try{
        const modifiedUser = await User.updateOne(
            { _id: req.params.id },
              { 
                  $set: {
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    skills: {
                        cpp: req.body.cpp,
                        java: req.body.java,
                        python: req.body.python,
                        javascript: req.body.javascript,
                        flutter: req.body.flutter
                    }   
                }
            });
            res.json(modifiedUser);
    }
    catch(err){
        console.log(err);
        context = {"message": "something went wrong"};
        res.json(context);
    }
}
