"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate unique ID
    const id = Math.random().toString(36).substring(2, 9);
    const item = { id, name, quantity, category };

    onAddItem(item); // Send to parent

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 max-w-sm w-full rounded-md text-black"
    >
      <input
        id="name"
        type="text"
        placeholder="Item name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 rounded-md bg-white border-2 border-gray-300"
      />
      <div className="flex justify-between gap-2">
        <input
          id="qty"
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 p-2 rounded-md bg-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md bg-white flex-1 capitalize"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-4 rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </form>
  );
}
