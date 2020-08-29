const express = require("express");
const taskModel = require("../model/tasks_model");

const router = express.Router();
// GET tasks
router.get("/tasks", async (req, res, next) => {
  try {
    const task = await taskModel.find();
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// GET tasks by ID
router.get("/tasks/:id", async (req, res, next) => {
  try {
    const tasks = await taskModel.findById(req.params.id).then((task) => {
      res.json(task);
    });
  } catch (err) {
    next(err);
  }
});

router.get("/tasks/project/:id", async (req, res, next) => {
    const project_id = req.params.id;

    try {
      const task = await taskModel.findByProjectId(project_id).then((task) => {
        res.json(task);
      });
    } catch (err) {
      next(err);
    }
  });

// Add task
router.post("/tasks", async (req, res, next) => {
  const task = req.body;
  try {
    const newTask = await taskModel.add(task);
    if (newTask) {
      res.status(201).json("Success");
    } else {
      res.status(404).json("Unsuccessful at adding new task");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
