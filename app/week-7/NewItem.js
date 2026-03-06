"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = ["produce", "dairy", "bakery", "meat", "frozen foods", "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a simple random ID
    const id = Math.random().toString(36).substring(2, 9);
    
    // Create the new item object
    const newItem = { id, name, quantity, category };

    // Pass the object to the parent component
    onAddItem(newItem);

    // Reset the form state
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          + Add Item
        </button>
      </form>
    </div>
  );
}