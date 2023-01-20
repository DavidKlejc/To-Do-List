import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function getTodosController(req: Request, res: Response) {
    const todos = await Todo.find();
    res.json(todos);
}