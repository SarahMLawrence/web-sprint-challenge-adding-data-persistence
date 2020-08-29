const express = require("express");
const projectRouter = require("./router/project_router");
const resourceRouter = require("./router/resource_router");
const taskRouter = require("./router/tasks_router");

const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(projectRouter);
server.use(resourceRouter);
server.use(taskRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
