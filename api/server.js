// build your server here and require it from index.js
const express = require("express");

const resourcesRouter = require("./resource/router.js");
const projectsRouter = require("./project/router.js");
const taskRouter = require("./task/router.js");

const server = express();

server.use(express.json());

server.use("/api/resources", resourcesRouter);

server.use("/api/projects", projectsRouter);

server.use("/api/tasks", taskRouter);

server.use("*", (req, res) => {
  res.status(404).json({ message: "You up but where's my treasure?" });
});

module.exports = server;
