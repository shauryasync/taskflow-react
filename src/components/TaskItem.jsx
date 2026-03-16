import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return;

    updateTask(task.id, editText);
    setIsEditing(false);
  };
  const priorityIcons = {
    low: "🟢",
    medium: "🟡",
    high: "🔴",
  };

  const formattedDate = task.dueDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(task.dueDate))
    : "no date";

  return (
    <li className="flex justify-between items-center border p-2 rounded mb-2">
      {/* Left side: task text or edit input */}
      <div className="flex items-center gap-2 flex-grow">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.text}
              </span>
            </div>

            <div className="text-sm text-gray-600 ml-6">
              <span>
                Priority:{priorityIcons[task.priority] || ""}
                {task.priority || "none"}
              </span>
              {" | "}
              <span>Due: {formattedDate}</span>
            </div>
          </div>
        )}
      </div>

      {/* Right side buttons */}
      <div className="flex gap-2 shrink-0">
        <button
          className="bg-gray-500 text-white px-2 py-1 rounded"
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
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
