const express = require("express");
const cors = require("cors");
const repositoryController = require("./controllers/repositories");
const likeController = require("./controllers/likes");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", repositoryController.index);

app.post("/repositories", repositoryController.createRepository);

app.put("/repositories/:id", repositoryController.updateRepository);

app.delete("/repositories/:id", repositoryController.deleteRepository);

app.post("/repositories/:id/like", likeController.createLike);

module.exports = app;
