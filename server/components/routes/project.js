const express = require('express');
const { getUserProjects, createProject, getProject,getCategoryProjects, updateProject, deleteProject, getAllProjects} = require('../controllers/projects');
const router = express.Router();


router.get('/user/', getUserProjects);
router.post('/', createProject);
router.get('/:id', getProject); //not needed
router.get('/category/:category', getCategoryProjects);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/', getAllProjects);

module.exports = router;