"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // IMMUTABILITY: Use [...items] to create a copy before sorting
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-white font-bold text-lg">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-bold transition-colors ${
            sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-200 text-orange-900 hover:bg-orange-300"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-bold transition-colors ${
            sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-200 text-orange-900 hover:bg-orange-300"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}