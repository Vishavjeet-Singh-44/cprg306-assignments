"use client";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";
import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const { user } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // New Event Handler to clean up the string
  const handleItemSelect = (itemName) => {
    // Splits at the comma, removes emojis, and trims whitespace
    const cleanName = itemName
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "",
      )
      .trim();
    setSelectedItemName(cleanName);
  };

  if (!user) {
  return (
    <main className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p className="text-slate-300 mb-6">You must be logged in to view the shopping list.</p>
        <Link 
          href="/week-9" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Return to Login
        </Link>
      </div>
    </main>
  );
}

  return (
    <main className="bg-slate-950 min-h-screen p-4 md:p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Shopping List & Meal Planner
      </h1>

      {/* Layout Changes: Wrapped in a div with flex properties */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 md:mt-0 mt-8">
          {/* Passing the prop as 'ingredient' */}
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
