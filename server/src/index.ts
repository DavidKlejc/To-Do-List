import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getTodosController } from "./controllers/getTodosController";
import { createTodoController } from "./controllers/createTodoController";
import { deleteTodoController } from "./controllers/deleteTodoController";

const app = express();
const PORT = process.env.PORT_NUMBER;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", getTodosController);
app.post("/addTodo", createTodoController);
app.delete("/:todoId", deleteTodoController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
});
