import { useState, useEffect } from "react";
import { getTodos, Todo } from "./api/getTodos";
import { deleteTodo } from "./api/deleteTodo";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function handleDeleteTodo(todoId: string) {
    await deleteTodo(todoId);
    setTodos(todos.filter((todo) => todo._id !== todoId));
  }

  useEffect(() => {
    async function fetchTodos() {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    }
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todos</h1>

      <ul className="todos">
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} {todo.description}
            <button onClick={() => handleDeleteTodo(todo._id)}>X</button>
          </li>
        ))}
      </ul>

      <Link to="/addTodo" className="button">
        Add Todo
      </Link>
    </div>
  );
}

export default App;
