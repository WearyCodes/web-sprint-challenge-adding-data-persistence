exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.string("project_description", 128);
      table.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).notNullable().unique();
      table.string("resource_description", 128);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 128).notNullable();
      table.string("task_notes", 128);
      table
        .integer("task_project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      table
        .integer("task_resource_id")
        .unsigned()
        .references("resource_id")
        .inTable("resources");
    });
};

// task_id - primary key
// task_description - required
// task_notes - optional
// task_completed - the database defaults it to false (integer 0) if not provided
// project_id - required and points to an actual project_id in the projects table
// A resource assignment connects a resource and a project, and is stored in a project_resources table. You decide what columns to use.

exports.down = function (knex) {};
