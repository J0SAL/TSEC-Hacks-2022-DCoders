const { request } = require('express');
const { stringify } = require('nodemon/lib/utils');
const nodemailer = require('nodemailer');
const Project = require('../models/Project')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "devmeet2022@gmail.com",
      pass: "devmeet1234"
    }
  });

const ERR_CONTEXT  = {"data": "some error occured"};
//get user projects
exports.getUserProjects = async (req, res) => {
    try {
        const projects = await Project.find({ email: process.env.owner_id });
        res.json(projects)
    } catch (err) {
        console.log(err)
        console.error(ERR_CONTEXT);
    }
}

//add new project
exports.createProject = async (req, res) => {
    try {
        const project = {
            projectname: req.body.projectname,
            projectdesc: req.body.projectdesc,
            projecturl: req.body.projecturl,
            ownerid: process.env.owner_id,
            ownername: process.env.owner_name,
            domains: {
                cpp: req.body.cpp,
                java: req.body.java,
                python: req.body.python,
                javascript: req.body.javascript,
                flutter: req.body.flutter
            }
        }
        const newProject = new Project(project)
        await newProject.save()

        
        res.json(newProject)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
}

//get project by id
exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT);
    }
}

//update project status by id
exports.updateProject = async (req, res) => {
    try {
        const update = {
            project_status :req.body.status,
        }
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedProject)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
}

//delete project by id
exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.json('project deleted successfully!')
    } catch (err) {
        console.error(err);
        res.json(ERR_CONTEXT);
    }
}


// get projects by category id
exports.getCategoryProjects = async (req, res) => {
    try {
        // console.log(req.params.id);
        category = req.params.category
        let projects = "";
        if(category == "cpp")
            projects = await Project.find({ "domains.cpp" : "1"})
        if(category == "java")
            projects = await Project.find({ "domains.java" : "1"})
        if(category == "javascript")
            projects = await Project.find({ "domains.javascript" : "1"})
        if(category == "flutter")
            projects = await Project.find({ "domains.flutter" : "1"})
        if(category == "python")
            projects = await Project.find({ "domains.python" : "1"})
        res.json(projects)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
};

// get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects)
    } catch (err) {
        console.error(err)
    }
}