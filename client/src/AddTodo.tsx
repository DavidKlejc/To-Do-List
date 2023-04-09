import { useState, useEffect } from "react";
import "./AddTodo.css";
import { addTodo } from "./api/addTodo";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const navigate = useNavigate();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  async function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    await addTodo(todoTitle, todoDescription);
    navigate("/");
  }

  return (
    <div className="AddTodoContainer">
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo-title">Todo Title</label>
        <input
          id="todo-title"
          value={todoTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodoTitle(e.target.value);
          }}
        />

        <label htmlFor="todo-description">Todo Description</label>
        <input
          id="todo-description"
          value={todoDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodoDescription(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
