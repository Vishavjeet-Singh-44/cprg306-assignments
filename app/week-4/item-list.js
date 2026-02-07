import GroceryItem from "../week-4/item.js";
import items from "./items.json";

export default function GroceryItemList({ listTitle }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold m-6 text-white">{listTitle}</h2>
      <ul>
        {items.map((item) => (
          <GroceryItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}