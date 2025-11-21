import { Home, Plus } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <Home className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-semibold text-gray-800">Mi hogar</h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
        <Plus className="w-6 h-6 text-gray-600" />
      </button>
    </header>
  );
};
