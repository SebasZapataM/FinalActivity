import { Power } from 'lucide-react';

interface LedCardProps {
  name: string;
  location: string;
  emoji: string;
  isOn: boolean;
  onToggle: () => void;
}

export const LedCard = ({
  name,
  location,
  emoji,
  isOn,
  onToggle,
}: LedCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${
              isOn
                ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-200'
                : 'bg-gray-100'
            }`}
          >
            {emoji}
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold text-base">{name}</h3>
            <p className="text-gray-500 text-sm">
              {isOn ? 'Encendido' : location}
            </p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
            isOn
              ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Power className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
