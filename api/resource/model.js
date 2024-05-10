const db = require("../../data/dbConfig.js");

async function find() {
  const resources = await db("resources as r");
  return resources;
}

async function findById(id) {
  const resource = await db("resources as r")
    .where({ "r.resource_id": id })
    .first();
  return resource;
}

async function create(resource) {
  const [id] = await db("resources").insert(resource);
  return findById(id);
}

// build your `Resource` model here
// A resource is anything needed to complete a project and is stored in a resources table with the following columns:

//  resource_id - primary key
//  resource_name - required and unique
//  resource_description - optional
module.exports = {
  find,
  create,
  findById,
};
