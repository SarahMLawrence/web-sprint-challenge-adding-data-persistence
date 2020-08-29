const db = require("../data/config");

// return list of resources
function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id });
}

function add(data){
    return db("resources")
    .insert(data);
}



module.exports = {
  find,
  findById,
  add, 

};
