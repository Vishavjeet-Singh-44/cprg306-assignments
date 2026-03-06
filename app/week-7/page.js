"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Initializing state with JSON data
  const [items, setItems] = useState(itemsData);

  // IMMUTABILITY: Creating a new array using the spread operator
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-slate-950 p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Shopping List</h1>
      
      {/* Layout: Form on the left, List on the right on full vertical screen */}
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-6xl mx-auto">
        <div className="flex-1 max-w-md">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="flex-1">
          <ItemList items={items} />
        </div>
      </div>
      {/* Wireframe */}
      <section className="mt-16 p-4 border-t border-gray-600 max-w-4xl mx-auto font-mono">
        <h2 className="text-lg text-gray-400 mb-4 text-center"> Wireframe </h2>
        
        {/* Main Layout Container */}
        <div className="flex flex-col md:flex-row gap-4 border-2 border-dashed border-gray-600 p-4">
          
          {/* Form Placeholder */}
          <div className="flex-1 border border-gray-600 p-4 flex flex-col gap-2">
            <div className="text-gray-500 mb-2">NewItem Form</div>
            <div className="border border-gray-700 h-8 flex items-center px-2 text-xs text-gray-500">Name Input</div>
            <div className="flex gap-2">
              <div className="border border-gray-700 h-8 w-1/3 flex items-center px-2 text-xs text-gray-500">Qty</div>
              <div className="border border-gray-700 h-8 w-2/3 flex items-center px-2 text-xs text-gray-500">Category Select</div>
            </div>
            <div className="border border-gray-500 h-8 mt-2 flex items-center justify-center text-xs text-gray-400">Add Button</div>
          </div>

          {/* List Placeholder */}
          <div className="flex-[2] border border-gray-600 p-4 flex flex-col gap-2">
            <div className="text-gray-500 mb-2">ItemList</div>
            <div className="flex gap-2 mb-2">
              <div className="border border-gray-700 h-6 w-20 flex items-center justify-center text-xs text-gray-500">Sort Button</div>
              <div className="border border-gray-700 h-6 w-20 flex items-center justify-center text-xs text-gray-500">Sort Button</div>
            </div>
            <div className="border border-gray-700 h-10 flex items-center px-2 text-xs text-gray-500">Item Component</div>
            <div className="border border-gray-700 h-10 flex items-center px-2 text-xs text-gray-500">Item Component</div>
            <div className="border border-gray-700 h-10 flex items-center px-2 text-xs text-gray-500">Item Component</div>
          </div>

        </div>
      </section>
    </main>
  );
}