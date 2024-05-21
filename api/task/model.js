// build your `Task` model here
// task_id - primary key
// task_description - required
// task_notes - optional
// task_completed - the database defaults it to false (integer 0) if not provided
// project_id - required and points to an actual project_id in the projects table

const db = require("../../data/dbConfig.js");

async function getAll() {
  const tasks = await db("tasks as t");
  return tasks;
}

async function findById(id) {
  const task = await db("tasks as t").where({ "t.task_id": id }).first();
  return task;
}

async function create(task) {
  const [id] = await db("tasks").insert(task);
  return findById(id);
}

module.exports = {
  getAll,
  findById,
  create,
};
