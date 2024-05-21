// build your `Project` model here
const db = require("../../data/dbConfig.js");

async function getAll() {
  const projects = await db("projects as p");
  return projects;
}

async function findById(id) {
  const projects = await db("projects as p")
    .where({ "p.project_id": id })
    .first();
  return projects;
}

async function create(project) {
  const [id] = await db("projects").insert(project);
  return findById(id);
}

module.exports = {
  getAll,
  findById,
  create,
};
