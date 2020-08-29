const db = require("../data/config");

// return list of projects
function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function findProjectDetails(id) {
  return db("resource_details as rd")
    .join("resources as r", "r.id", "rd.resource_id")
    .select("r.id", "r.name", "r.description")
    .where({ "rd.id": id });
}

function add(data){
    return db("projects")
    .insert(data);
}

module.exports = {
  find,
  findById,
  findProjectDetails,
  add
};
