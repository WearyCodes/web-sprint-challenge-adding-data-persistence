// build your `/api/projects` router here
const router = require("express").Router();
const Projects = require("./model.js");

router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects", error: err });
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  Projects.create(project)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to create new project", error: err });
    });
});

module.exports = router;
