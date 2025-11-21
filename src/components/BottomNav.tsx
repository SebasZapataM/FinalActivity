import { Home, List, Brain, User } from 'lucide-react';

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Mi hogar', active: true, notification: false },
    { icon: List, label: 'Escena', active: false, notification: false },
    { icon: Brain, label: 'Inteligente', active: false, notification: true },
    { icon: User, label: 'Yo', active: false, notification: true },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-6 py-3 shadow-lg">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1 relative py-2 px-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {item.notification && (
              <div className="absolute top-1 right-3 w-2 h-2 bg-red-500 rounded-full" />
            )}
            <item.icon
              className={`w-6 h-6 ${
                item.active ? 'text-blue-500' : 'text-gray-400'
              }`}
            />
            <span
              className={`text-xs font-medium ${
                item.active ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
