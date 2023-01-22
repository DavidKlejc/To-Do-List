import { useState, useEffect } from 'react'
import { getTodos, Todo } from "./api/getTodos";
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {

    async function fetchTodos() {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    }

  }, []);


  return (
    <div className="App">
      <h1>Todos</h1>

      <ul className='todos'>
        {todos.map((todo) => (
          <li key={todo._id}>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
