import "./App.css";
import { useState } from "react";

const mockTodos = [
  { id: 1, title: "Learn how to delete" },
  { id: 2, title: "Learn how to use inputs" },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");
  const handleDeleTodo = (id) => {
    // 1 budas
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(newTodos);
    // 2 budas
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleChange = (event) => {
    // event.target.value YRA TEKSTAS
    const value = event.target.value;
    setTodoText(value);
  };
  const handleAddTodo = () => {
    const title = todoText.trim();
    const check = todos.some((todo) => todo.title === title);
    if (todoText && !check) {
      const newTodo = { id: Date.now(), title: todoText };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoText("");
    }
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <input value={todoText} type="text" onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <p>{todoText}</p>
      <ul>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            {todo.title}
            <span
              className="delete-btn"
              onClick={() => handleDeleTodo(todo.id)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
