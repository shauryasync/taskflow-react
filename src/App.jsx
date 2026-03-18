import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const addTask = (taskText, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    let statusMatch = true;

    if (filter === "completed") statusMatch = task.completed;
    else if (filter === "pending") statusMatch = !task.completed;

    const query = searchQuery.toLowerCase();

    const searchMatch = task.text.toLowerCase().includes(query);

    return statusMatch && searchMatch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    if (!a.dueDate && !b.dueDate) return 0;

    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-start p-6">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow p-6">
          {/* Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-sm px-3 py-1 rounded border dark:border-gray-600"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-6 text-center">TaskFlow</h1>

          {/* Components */}
          <TaskForm addTask={addTask} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterBar filter={filter} setFilter={setFilter} />

          <TaskList
            tasks={sortedTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
