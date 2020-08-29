exports.seed = async function (knex) {
  return knex("tasks").insert([
    {
      description: "Create a forked copy of this project.",
      notes: "Add your team lead as collaborator on Github.",
      completed: true,
      project_id: 1,
    },
    {
      description: "Clone your OWN version of the repository in your terminal",
      notes: "Download project dependencies by running npm install",
      completed: true,
      project_id: 1,
    },
    {
      description:
        "Do not attempt stretch problems until MVP has been reached and a final commit has been made.",
      notes: "Make another app",
      completed: false,
      project_id: 1,
    },
    {
      description: "Read these instructions carefully.",
      notes: "Commit your code regularly and meaningfully",
      completed: false,
      project_id: 2,
    },
    {
      description:
        "Submit a Pull-Request to merge Branch into master (student's Repository).",
      notes: "Do your magic!",
      completed: true,
      project_id: 2,
    },
    {
      description: "Add a route for a login page",
      notes: "build out a simple login form with username ",
      completed: true,
      project_id: 3,
    },
    {
      description: "Style the friends list ",
      notes: "the input field and make everything look nice.",
      completed: false,
      project_id: 3,
    },
  ]);
};
