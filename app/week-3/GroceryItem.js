
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 border border-slate-800 max-w-sm rounded">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <p className="text-sm text-slate-300">Quantity: {quantity}</p>
      <p className="text-sm text-slate-300 capitalize">Category: {category}</p>
    </li>
  );
}