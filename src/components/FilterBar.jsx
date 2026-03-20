function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-1 rounded-full  text-sm border 
        ${
          filter === "all"
            ? "bg-blue-500 text-white"
            : "bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-1 rounded-full  text-sm border 
        ${
          filter === "completed"
            ? "bg-blue-500 text-white"
            : "bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-1 rounded-full  text-sm border 
        ${
          filter === "pending"
            ? "bg-blue-500 text-white"
            : "bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        }`}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterBar;
