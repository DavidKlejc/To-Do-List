import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function deleteTodoController(req: Request, res: Response) {

    const todoId = req.params.todoId;
    const todo = await Todo.findByIdAndDelete(todoId);
    res.json(todo);
}