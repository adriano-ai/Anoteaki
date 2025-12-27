
import React from 'react';

interface ShoppingListProps {
  items: string[];
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-400 font-medium italic">
          Sua lista está vazia. <br /> Comece a pesquisar acima!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="p-4 rounded-xl border border-gray-100 bg-white flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-black/20" />
          <span className="text-gray-700 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
};
