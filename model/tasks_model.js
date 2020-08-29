const db = require("../data/config");

// return list of tasks
function find() {
  return db("tasks as t")
  .join("projects as p", "p.id", "t.project_id")
  .select( "p.name as project_name", "t.description");
}

function findById(id) {
  return db("tasks").where({ id });
}
function findByProjectId(project_id){
    return db("tasks").where({ project_id })
    .select("id", "description", "notes", "completed");
}
function add(data) {
  return db("tasks").insert(data);
}

module.exports = {
  find,
  findById,
  add,
  findByProjectId
};
