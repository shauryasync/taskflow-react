import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText);
    setTaskText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="add a task"
        className="rounded w-full border p-2"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded bg-blue-500 text-white px-4 py-2"
      >
        add
      </button>
    </form>
  );
}

export default TaskForm;
