"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="m-4">
      <div className="flex items-center gap-2 mb-4">
        <label className="text-white">Sort by: </label>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500" : "bg-orange-700"} text-white font-bold`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500" : "bg-orange-700"} text-white font-bold`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
