// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model.js");

router.get("/", (req, res) => {
  Tasks.find()
    .then((Tasks) => {
      res.status(200).json(Tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Tasks", error: err });
    });
});

router.post("/", (req, res) => {
  const task = req.body;
  Tasks.create(task)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to create new Task", error: err });
    });
});

module.exports = router;
