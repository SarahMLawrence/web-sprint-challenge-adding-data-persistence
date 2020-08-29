const express = require("express");
const resourceModel = require("../model/resource_model");

const router = express.Router();

// GET resources
router.get("/resource", async (req, res, next) => {
    try {
        const resource = await resourceModel.find();
        res.json(resource);
    } catch (err) {
        next(err);
    }
});

// GET resources by ID
router.get("/resource/:id", async (req, res, next) => {
    try {
        const resources = await resourceModel
            .findById(req.params.id)
            .then((resource) => {
                res.json(resource);
            });
    } catch (err) {
        next(err);
    }
});

// Add resource
router.post("/resource", async (req, res, next) => {
    const resource = req.body;
    try {
        const newResource = await resourceModel.add(resource);
        if (newResource) {
            res.status(201).json("Success");
        } else {
            res.status(404).json("Unsuccessful at adding new resource");
        }
    } catch (err) {
        next(err);
    }
});




module.exports = router;
