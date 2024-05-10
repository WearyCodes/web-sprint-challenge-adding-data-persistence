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

exports.down = function (knex) {};
