import React, { useState } from "react";

export const Createtasks = ({ addTask }) => {
  const [value, setTaskValue] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTask(value);
    setTaskValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setTaskValue(e.target.value)}
        />
      </form>
    </div>
  );
};
