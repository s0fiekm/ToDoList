"use client";
import { useState } from "react";
import List from "./List";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };

    setTasks(tasks.concat(newTask));

    event.target.reset();
  }

  function toggleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="m-7 flex flex-col gap-y-9 ">
      <h1 className="text-5xl font-bold">To Do App</h1>
      <form className="flex flex-row gap-x-4" onSubmit={addTask}>
        <input
          className="border-solid border-black border"
          type="text"
          name="task"
          placeholder="New task"
        />
        <button className="bg-violet-300 p-2" type="submit">
          Add
        </button>
      </form>
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
export default ToDoApp;
