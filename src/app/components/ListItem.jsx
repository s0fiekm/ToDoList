import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

function ListItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className="flex flex-row justify-between rounded-2xl bg-teal-100 p-5">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        {task.text}
      </span>
      <div className="flex flex-col  items-end">
        <button className="" onClick={() => toggleComplete(task.id)}>
          {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
        </button>
        <button className="text-xs" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
