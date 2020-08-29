const express = require("express");
const projectModel = require("../model/project_model");

const router = express.Router();

// GET projects
router.get("/projects", async (req, res, next) => {
  try {
    const projects = await projectModel.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// GET projects by ID
router.get("/projects/:id", async (req, res, next) => {
  try {
    const projects = await projectModel
      .findById(req.params.id)
      .then((projects) => {
        res.json(projects);
      });
  } catch (err) {
    next(err);
  }
});

// GET resources by specific ID
router.get("/projects/:id/resources", async (req, res, next) => {
  try {
    const resource = await projectModel
      .findProjectDetails(req.params.id)
      .then((resource) => {
        res.json(resource);
      });
  } catch (err) {
    next(err);
  }
});

// ADD project
// Add resource
router.post("/projects", async (req, res, next) => {
  const project = req.body;
  try {
    const newProject = await projectModel.add(project);
    if (newProject) {
      res.status(201).json("Success");
    } else {
      res.status(404).json("Unsuccessful at adding new project");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
