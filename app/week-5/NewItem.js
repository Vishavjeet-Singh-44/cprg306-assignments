"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    
    const item = { name, quantity, category };

    console.log(item); // Log the object to console
    
    // Display the clean alert  with item details
    alert(`Added Item: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset state to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="p-4 m-4 bg-cyan-600 max-w-sm w-full rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border-2 border-b-emerald-400 rounded-md bg-gray-800 text-white focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex justify-between gap-4">
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-24 p-2 border-2 border-b-emerald-400 rounded-md bg-gray-800 text-white outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border-2 border-b-emerald-400 rounded-md bg-gray-800 text-white outline-none flex-1"
          >
            <option value="produce" className="text-black bg-amber-200">
              Produce
            </option>
            <option value="dairy" className="text-black bg-amber-200">
              Dairy
            </option>
            <option value="bakery" className="text-black bg-amber-200">
              Bakery
            </option>
            <option value="meat" className="text-black bg-amber-200">
              Meat
            </option>
            <option value="frozen" className="text-black bg-amber-200">
              Frozen Foods
            </option>
            <option value="canned" className="text-black bg-amber-200">
              Canned Goods
            </option>
            <option value="dry" className="text-black bg-amber-200">
              Dry Goods
            </option>
            <option value="beverages" className="text-black bg-amber-200">
              Beverages
            </option>
            <option value="snacks" className="text-black bg-amber-200">
              Snacks
            </option>
            <option value="household" className="text-black bg-amber-200">
              Household
            </option>
            <option value="other" className="text-black bg-amber-200">
              Other
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-amber-400 text-emerald-600 font-bold text-xl rounded-md hover:bg-cyan-300 transition duration-200"
        >
          +
        </button>
      </form>
    </div>
  );
}
