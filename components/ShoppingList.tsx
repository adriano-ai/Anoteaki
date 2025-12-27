
import React from 'react';

interface ShoppingListProps {
  items: string[];
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-gray-400 text-lg">
          Sua lista está vazia. <br />
          <span className="text-gray-300 text-base">Adicione itens acima.</span>
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-50">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="py-5 flex items-center gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
          <span className="text-gray-900 text-xl font-medium tracking-tight">{item}</span>
        </li>
      ))}
    </ul>
  );
};
