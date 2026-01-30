import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-6">
      <div className="max-w-md mx-auto"> 
        <h1 className="text-3xl font-bold mb-6 text-white ml-4">
          Shopping List
        </h1>
        <GroceryItemList />
      </div>
    </main>
  );
}