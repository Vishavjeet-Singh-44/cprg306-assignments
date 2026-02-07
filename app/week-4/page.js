import GroceryItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-4">
      <h1 className="text-4xl font-bold m-6 text-white">Shopping List</h1>
      {/* Passing a dynamic title as a prop */}
      <GroceryItemList listTitle="Weekly Groceries" />
    </main>
  );
}