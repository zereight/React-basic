import React, { useState } from "react";

function TodoInput(addTodo) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder={"Enter the to-do."}
        />
        <input type={"submit"} value={"Enter"} />
      </form>
    </div>
  );
}

export default TodoInput;
