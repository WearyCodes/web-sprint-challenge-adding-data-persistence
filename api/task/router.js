// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model.js");

router.get("/", (req, res) => {
  Tasks.getAll()
    .then((tasks) => {
      const modifiedTasks = tasks.map((task) => {
        return {
          task_id: task.task_id,
          task_description: task.task_description,
          task_notes: task.task_notes,
          task_completed: task.task_completed === 1,
          project_name: task.project_name,
          project_description: task.project_description,
        };
      });
      res.status(200).json(modifiedTasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Tasks", error: err });
    });
});
router.post("/", (req, res) => {
  const task = req.body;
  Tasks.create(task)
    .then((newTask) => {
      const modifiedTask = {
        ...newTask,
        task_completed: newTask.task_completed === 1,
      };
      res.status(201).json(modifiedTask);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to create new Task", error: err });
    });
});

module.exports = router;
