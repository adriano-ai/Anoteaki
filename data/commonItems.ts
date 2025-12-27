
export interface MarketItem {
  name: string;
  icon: string;
}

export const commonItemsMap: Record<string, string> = {
  "Arroz": "🍚",
  "Feijão": "🫘",
  "Açúcar": "🍬",
  "Café": "☕",
  "Óleo": "🫗",
  "Sal": "🧂",
  "Macarrão": "🍝",
  "Farinha de trigo": "🌾",
  "Leite": "🥛",
  "Ovos": "🥚",
  "Pão": "🍞",
  "Margarina": "🧈",
  "Manteiga": "🧈",
  "Queijo": "🧀",
  "Presunto": "🍖",
  "Frango": "🍗",
  "Carne moída": "🥩",
  "Alface": "🥬",
  "Tomate": "🍅",
  "Cebola": "🧅",
  "Alho": "🧄",
  "Batata": "🥔",
  "Cenoura": "🥕",
  "Banana": "🍌",
  "Maçã": "🍎",
  "Laranja": "🍊",
  "Limão": "🍋",
  "Arroz integral": "🌾",
  "Azeite": "🫒",
  "Vinagre": "🍾",
  "Molho de tomate": "🥫",
  "Extrato de tomate": "🥫",
  "Achocolatado": "🍫",
  "Biscoito": "🍪",
  "Bolacha": "🍪",
  "Chocolate": "🍫",
  "Refrigerante": "🥤",
  "Suco": "🧃",
  "Água": "💧",
  "Sabonete": "🧼",
  "Shampoo": "🧴",
  "Condicionador": "🧴",
  "Papel higiênico": "🧻",
  "Detergente": "🧼",
  "Amaciante": "🧺",
  "Desinfetante": "🧹",
  "Esponja de aço": "🧽",
  "Sacola de lixo": "🗑️",
  "Leite condensado": "🥛",
  "Creme de leite": "🥛",
  "Ervilha": "🫛",
  "Milho": "🌽",
  "Atum": "🐟",
  "Sardinha": "🐟",
  "Azeitona": "🫒",
  "Catchup": "🥫",
  "Mostarda": "🥫",
  "Maionese": "🥫",
  "Farofa": "🥣",
  "Tempero pronto": "🧂",
  "Pimenta": "🌶️",
  "Cebola em pó": "🧂",
  "Alho em pó": "🧂",
  "Açúcar mascavo": "🟤",
  "Mel": "🍯",
  "Geléia": "🍯"
};

export const commonItems: string[] = Object.keys(commonItemsMap);

export const getIconForItem = (name: string): string => {
  const normalized = name.trim();
  // Busca exata
  if (commonItemsMap[normalized]) return commonItemsMap[normalized];
  
  // Busca parcial por palavra-chave se for um item customizado
  const lower = normalized.toLowerCase();
  if (lower.includes("carne")) return "🥩";
  if (lower.includes("fruta")) return "🍎";
  if (lower.includes("bebida")) return "🥤";
  if (lower.includes("limpeza")) return "🧼";
  if (lower.includes("doce")) return "🍬";
  if (lower.includes("pão") || lower.includes("bolo")) return "🍞";
  if (lower.includes("cerveja") || lower.includes("vinho")) return "🍷";
  
  return "📦"; // Ícone genérico para itens não mapeados
};
