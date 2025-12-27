
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
      .slice(0, 5);
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
    <div className="min-h-screen flex flex-col items-center p-6 bg-white selection:bg-black selection:text-white">
      <div className="w-full max-w-md flex flex-col gap-10 relative">
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
              className="flex-1 px-4 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:outline-none focus:border-black transition-all text-gray-800 placeholder:text-gray-400 text-lg"
              autoFocus
            />
            <button
              type="submit"
              className="bg-black text-white px-5 rounded-2xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center"
              aria-label="Adicionar item"
            >
              <Plus size={28} strokeWidth={3} />
            </button>
          </form>

          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {filteredSuggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => handleAddItem(suggestion)}
                    className="w-full text-left px-5 py-4 hover:bg-gray-50 text-gray-700 font-medium transition-colors border-b border-gray-50 last:border-0 text-lg"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <main className="flex-1">
          <ShoppingList items={items} />
        </main>
      </div>

      <footer className="mt-auto py-10 text-gray-300 text-xs font-bold uppercase tracking-[0.2em]">
        AnoteAki
      </footer>
    </div>
  );
};

export default App;
