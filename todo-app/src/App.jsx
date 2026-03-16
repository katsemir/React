import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Todo App" }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: newTodo
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          placeholder="New task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;