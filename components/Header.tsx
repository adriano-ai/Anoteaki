
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center gap-3">
      <div className="bg-black p-2 rounded-lg">
        <ShoppingCart className="text-white" size={20} />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">AnoteAki</h1>
    </header>
  );
};
