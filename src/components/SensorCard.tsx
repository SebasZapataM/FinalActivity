import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface SensorCardProps {
  title: string;
  value: number;
  unit: string;
  emoji: string;
  connected: boolean;
  history: number[];
  color: string;
}

export const SensorCard = ({
  title,
  value,
  unit,
  emoji,
  connected,
  history,
  color,
}: SensorCardProps) => {
  const chartData = {
    labels: Array(history.length).fill(''),
    datasets: [
      {
        data: history,
        borderColor: color,
        backgroundColor: `${color}20`,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (context: { parsed: { y: number } }) => `${context.parsed.y.toFixed(1)}${unit}`,
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-800">
              {value.toFixed(1)}
            </span>
            <span className="text-lg text-gray-500">{unit}</span>
          </div>
        </div>
        <div className="text-4xl">{emoji}</div>
      </div>

      <div className="mb-3">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            connected
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {connected ? 'Conectado' : 'Desconectado'}
        </span>
      </div>

      <div className="h-24 mt-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
