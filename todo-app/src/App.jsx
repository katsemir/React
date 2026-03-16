import TodoList from "./components/TodoList";

function App() {

  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Todo App" },
    { id: 3, text: "Push project to GitHub" }
  ];

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;