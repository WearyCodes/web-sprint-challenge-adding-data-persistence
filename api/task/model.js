// build your `Task` model here
// task_id - primary key
// task_description - required
// task_notes - optional
// task_completed - the database defaults it to false (integer 0) if not provided
// project_id - required and points to an actual project_id in the projects table

const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
};
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
