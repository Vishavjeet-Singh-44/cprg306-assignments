"use client";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Initializing state with JSON data
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    // Spread operator
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950 min-h-screen p-4">
      <h1 className="text-3xl font-bold m-4 text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
