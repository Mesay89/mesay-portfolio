const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private (you can add authentication later)
router.post('/', async (req, res) => {
  try {
    const { title, description, image, technologies, category, github, live } = req.body;
    
    const newProject = new Project({
      title,
      description,
      image,
      technologies,
      category,
      github,
      live
    });
    
    const project = await newProject.save();
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;