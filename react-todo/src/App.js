import React, { useState } from "react";
import TodoForm from "./TodoInput";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test1",
      isCompleted: false,
    },
    {
      id: 2,
      text: "test2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "test3",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, isCompleted: false }]);
    console.log(todos)
  };

  const toggleComplete = (id) => {
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    todos[targetIndex].isCompleted = !todos[targetIndex].isCompleted;
    setTodos(todos);
  };

  const editTitle = (index, text) => {
    todos[index].text = text;
    setTodos(todos);
  };

  return <div className="App">{<TodoForm addTodo={addTodo} />}</div>;
}

export default App;
