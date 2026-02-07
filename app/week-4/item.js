export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm border-l-4 border-orange-500 shadow-md">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <p className="text-sm text-slate-400">
        Available {quantity} in <span className="text-orange-300 italic">{category}</span>
      </p>
    </li>
  );
}