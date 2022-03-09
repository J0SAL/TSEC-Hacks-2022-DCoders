const { request } = require('express');
const Project = require('../models/Project')

const ERR_CONTEXT  = {"data": "some error occured"};
//get user projects
exports.getUserProjects = async (req, res) => {
    try {
        const projects = await Admin.findAll({ email: req.params.id });
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
            projectname:req.body.projectname,
            projectdesc:req.body.projectdesc,
            ownerid:req.body.ownerid,
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
        res.json(newSwag)
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
        category = request.params.category
        paramater = "domain."+category;
        
        const projects = await Project.find({ paramater: "1" })
        if(projects){
            res.json(projects);
        }
        const NO_PROJECT = {"data": "No Projects Found"};
        res.json(NO_PROJECT)
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