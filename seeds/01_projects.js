exports.seed = async function (knex) {
  return knex("projects").insert([
    {
      name: "Nasa Photo of the Day",
      description: "An awesome random photo per day of planets and stars",
      completed: false,
    },
    {
      name: "Car Sales",
      description: "Buying a new car. Adding all the features.",
      completed: false,
    },
    {
      name: "Auth_Friends",
      description: "Logging into a website to display a list of friends",
      completed: true,
    },
  ]);
};
