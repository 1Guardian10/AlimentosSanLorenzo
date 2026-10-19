interface CategoryFilterProps {
  categorias: string[];
  selected: string;
  onSelect: (categoria: string) => void;
}

const CategoryFilter = ({ categorias, selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          aria-pressed={selected === categoria}
          onClick={() => onSelect(categoria)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
            selected === categoria
              ? "bg-green-700 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
