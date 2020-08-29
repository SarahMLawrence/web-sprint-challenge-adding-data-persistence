exports.seed = async function (knex) {
  return knex("resources").insert([
    {
      name: "Keyboard",
      description: "Needed to complete the Project",
    },
    {
      name: "Headset with mic",
      description: "computer speakers do not work. ",
    },
    {
      name: "Pen",
      description: "Required to take notes.",
    },
    {
      name: "Laptop",
      description: "We do not provided Laptops. Must bring your own",
    },
    {
      name: "Notepads",
      description: "Please bring your own paper to take notes",
    },
    {
      name: "Brain",
      description: "Bring your smarts",
    },
  ]);
};
