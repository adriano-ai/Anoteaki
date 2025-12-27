
import React from 'react';
import { MarketItem } from '../data/commonItems';

interface ShoppingListProps {
  items: MarketItem[];
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
          key={`${item.name}-${index}`}
          className="py-5 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl text-2xl shadow-sm border border-gray-100/50">
            {item.icon}
          </div>
          <span className="text-gray-900 text-xl font-medium tracking-tight truncate flex-1">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
