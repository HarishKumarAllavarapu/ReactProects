import React, { useState } from "react";
import { Createtasks } from "./Createtasks.component";
import { Tasks } from "./Tasks.components";
import "./Todo.css";

export const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Grab Pizza",
      status: true,
    },
    {
      title: "Do your workout",
      status: true,
    },
    {
      title: "check work mails",
      status: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, status: false }];
    setTasks(newTasks);
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status = true;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <div className="header">Todo - Items</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <ul>
            <li>
              <Tasks
                task={task}
                index={index}
                completeTask={completeTask}
                removeTask={removeTask}
                key={index}
              />
            </li>
          </ul>
        ))}
      </div>
      <div className="create-task">
        <Createtasks addTask={addTask} />
      </div>
    </div>
  );
};
