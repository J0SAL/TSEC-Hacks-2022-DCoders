const User = require('../models/User')
const ERR_CONTEXT  = {"data": "some error occured"};


exports.registerUser = async (req, res) => {
    try {
        const user = {
            username:req.body.name,
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
                process.env["owner_id"] = data._id;
                process.env["owner_name"] = data.username;
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
    try {
        const update = {
            username:req.body.name,
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
        const updateUser = await User.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updateUser)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
}