exports.up = async function (knex) {
  // create the project table
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name", 128).notNull().unique();
    table.text("description", 528).notNull();
    table.boolean("completed").defaultTo(false);
  });

  // create the task table
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description", 528).notNull();
    table.text("notes", 528).notNull();
    table.boolean("completed").defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  // create the resource table
  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name", 128).notNull().unique();
    table.text("description", 528).notNull();
  });

  // create the resource description table
  await knex.schema.createTable("resource_details", (table) => {
    table.increments("id");
    table
      .integer("project_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("resource_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resource_details");

  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};
