
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/Header';
import { ShoppingList } from './components/ShoppingList';
import { commonItems } from './data/commonItems';

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = useMemo(() => {
    const query = inputValue.toLowerCase().trim();
    if (!query) return [];
    return commonItems
      .filter(item => 
        item.toLowerCase().includes(query) && 
        !items.some(existing => existing.toLowerCase() === item.toLowerCase())
      )
      .slice(0, 5); // Exibe as 5 melhores sugestões
  }, [inputValue, items]);

  const handleAddItem = useCallback((text?: string) => {
    const finalValue = (typeof text === 'string' ? text : inputValue).trim();
    if (finalValue) {
      setItems(prev => [...prev, finalValue]);
      setInputValue('');
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddItem();
  };

  const handleSuggestionClick = (item: string) => {
    handleAddItem(item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 bg-white">
      <div className="w-full max-w-md flex flex-col gap-8 relative">
        <Header />

        <div ref={containerRef} className="relative">
          <form onSubmit={onFormSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Digite o nome do item..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400"
              autoFocus
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center shadow-md"
              aria-label="Adicionar item"
            >
              <Plus size={24} strokeWidth={2.5} />
            </button>
          </form>

          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {filteredSuggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium transition-colors border-b border-gray-50 last:border-0"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex-1">
          <ShoppingList items={items} />
        </div>
      </div>

      <footer className="mt-auto pt-8 text-gray-400 text-xs font-medium uppercase tracking-widest">
        AnoteAki &bull; Simplicidade
      </footer>
    </div>
  );
};

export default App;
