export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      onClick={() => onSelect(name)} 
      className="p-4 bg-slate-900 rounded-lg shadow-sm border-l-4 border-orange-500 max-w-sm cursor-pointer hover:bg-slate-800 transition-colors duration-200"
    >
      <h2 className="text-xl font-bold text-white capitalize">{name}</h2>
      <p className="text-slate-400">
        Buy <span className="text-orange-400 font-bold">{quantity}</span> in <span className="capitalize text-orange-400 italic">{category}</span>
      </p>
    </li>
  );
}