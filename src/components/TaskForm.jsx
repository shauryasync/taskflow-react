import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText, priority, dueDate || null);
    setTaskText("");
    setDueDate("");
    setPriority("medium");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 items-center">
      <input
        type="text"
        placeholder="Add a task"
        className=" flex-grow border rounded p-2 bg-white text-black 
             dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <input
        className=" flex-grow border rounded p-2 bg-white text-black 
             dark:bg-gray-700 dark:text-white dark:border-gray-600"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border rounded p-2 bg-white text-black 
             dark:bg-gray-700 dark:text-white dark:border-gray-600 
             focus:outline-none"
      >
        <option
          value="low"
          className="bg-white text-black dark:bg-gray-700 dark:text-white"
        >
          Low
        </option>
        <option
          value="medium"
          className="bg-white text-black dark:bg-gray-700 dark:text-white"
        >
          Medium
        </option>
        <option
          value="high"
          className="bg-white text-black dark:bg-gray-700 dark:text-white"
        >
          High
        </option>
      </select>
      <button
        type="submit"
        className="rounded bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition"
      >
        add
      </button>
    </form>
  );
}

export default TaskForm;
