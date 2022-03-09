const User = require('../models/User')
const nodemailer = require('nodemailer');
const ERR_CONTEXT  = {"data": "some error occured"};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "devmeet2022@gmail.com",
      pass: "devmeet1234"
    }
  });

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

        //sending mail to the user once registered
        const mailOptions = {
            from: "devmeet2022@gmail.com",
            to: user.email,
            subject: `Welcome to DevMeet`,
            html: `<h1>Hello ${user.username}, welcome to DevMeet </h1><hr>
            DevMeet is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like DevMeet Actions and Packages. If you’re just getting started with DevMeet, you may know us best as a place for version control and collaboration. 
            `
          };

          //send mail 
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


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

        //send mail to the user
        const mailOptions = {
            from: "devmeet2022@gmail.com",
            to: update.email,
            subject: `Profile Updated Successfully`,
            html: `<h1>Hello ${update.username}, Your Profile is edited successfully </h1><hr>
            DevMeet is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like DevMeet Actions and Packages. If you’re just getting started with DevMeet, you may know us best as a place for version control and collaboration. 
            `
          };

          //send mail 
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        res.json(updateUser)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
}