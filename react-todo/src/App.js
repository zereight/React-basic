import React, { useState } from "react";
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
    setTodos([...todos, { id: todo.length + 1, text, isCompleted: false }]);
  };

  const toggleComplete = (id) => {
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    todos[targetIndex].isCompleted = !todos[targetIndex].isCompleted;
  };

  const editTitle = (index, text) => {
    todos[index].text = text;
  }

  return <div className="App">
    
  </div>;
}

export default App;
