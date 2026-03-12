import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (taskText.trim() !== "") return;

    addTask(taskText);
    setTaskText("");
  };
  return (
    <form onSubmit={handleForm} className="flex gap-2">
      <input placeholder="add a task" className="rounded w-full border p-2" />
      <button
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="rounded bg-blue-500 text-white px-4 py-2"
      >
        add
      </button>
    </form>
  );
}

export default TaskForm;
