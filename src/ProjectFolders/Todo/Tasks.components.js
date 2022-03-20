import React from "react";
import "./Tasks.styles.css";

export const Tasks = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.status ? "line-through" : " " }}
    >
      {task.title}
      <div className="button-component">
        <button style={{ background: "red" }} onClick={() => removeTask(index)}>
          x
        </button>
        <button onClick={() => completeTask(index)}>Complete</button>
      </div>
    </div>
  );
};
