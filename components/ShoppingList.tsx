
import React from 'react';

interface ShoppingListProps {
  items: string[];
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-gray-400 font-medium">
          Sua lista está vazia. <br /> Adicione itens acima.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="py-3 border-b border-gray-100 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-1 duration-400"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
          <span className="text-gray-800 text-lg font-normal">{item}</span>
        </li>
      ))}
    </ul>
  );
};
