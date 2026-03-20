import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return;

    updateTask(task.id, editText);
    setIsEditing(false);
  };

  const formattedPriority = task.priority
    ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
    : "None";

  const formattedDate = task.dueDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(task.dueDate))
    : "no date";

  return (
    <li className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition mb-3">
      <div className="flex justify-between items-start gap-4">
        {/* LEFT SIDE */}
        <div className="flex gap-3 items-baseline">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="mt-1"
          />

          <div className="flex flex-col">
            {/* TEXT / INPUT */}
            {isEditing ? (
              <input
                autoFocus
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border rounded p-2 bg-white text-black 
              dark:bg-gray-700 dark:text-white dark:border-gray-600"
                style={{ minWidth: "300px" }}
              />
            ) : (
              <span
                className={`font-medium ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            )}

            {/* Priority + Date */}
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                {formattedPriority}
              </span>

              <span className="flex items-center gap-1">
                📅 {formattedDate}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-center text-sm bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded transition"
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setEditText(task.text);
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="flex items-center justify-center text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded transition"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
