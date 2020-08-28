const e = require("express");

exports.up = async function(knex) {
    
    // create the project table
    await knex.schema.createTable('projects', (table) => {
        table.increments("id")
        table.text("name", 128).notNull().unique()
        table.text("description")
        table.boolean('project_completed').toDefault(0);
    });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects");
};
