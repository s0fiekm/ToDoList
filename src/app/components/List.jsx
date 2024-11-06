import React from "react";
import ListItem from "./ListItem";

function List({ tasks, deleteTask, toggleComplete }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const CompleteTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-row gap-6 justify-between">
      <div className="flex-col  bg-pink-200 rounded-2xl h-screen w-6/12  p-4">
        <h2 className="text-xl font-semibold text-center">To do</h2>
        <ul className="flex flex-col ">
          {incompleteTasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
      <div className=" flex-col bg-pink-200 rounded-2xl h-screen w-6/12  p-4">
        <h2 className="text-xl font-semibold text-center">Done tasks</h2>
        <ul className="flex flex-col ">
          {CompleteTasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
