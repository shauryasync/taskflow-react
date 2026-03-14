import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        className="rounded p-2 border w-full"
        placeholder="search task"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
