import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function createTodoController(req: Request, res: Response) {

    const newTodo = new Todo({
        title: req.body.title,
        description: req.body.description,
    });

    const createdTodo = await newTodo.save();
    res.json(createdTodo);

}

