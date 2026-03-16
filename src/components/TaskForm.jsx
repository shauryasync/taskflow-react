import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText, priority, dueDate);
    setTaskText("");
    setDueDate("");
    setPriority("medium");
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
      <input
        className="border rounded p-2"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
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
