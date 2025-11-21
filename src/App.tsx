import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { SensorCard } from './components/SensorCard';
import { LedCard } from './components/LedCard';
import { BottomNav } from './components/BottomNav';
import { useFirebaseData } from './hooks/useFirebaseData';

function App() {
  const { sensors, leds, history, connected, toggleLed } = useFirebaseData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-[600px] mx-auto min-h-screen bg-white/60 backdrop-blur-sm flex flex-col shadow-2xl">
        <Header />
        <Tabs />

        <main className="flex-1 overflow-y-auto pb-6">
          <div className="px-6 py-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SensorCard
                title="Temperatura"
                value={sensors.temp}
                unit="°C"
                emoji="🌡️"
                connected={connected}
                history={history.temp}
                color="#EF4444"
              />
              <SensorCard
                title="Humedad"
                value={sensors.hum}
                unit="%"
                emoji="💧"
                connected={connected}
                history={history.hum}
                color="#3B82F6"
              />
              <SensorCard
                title="Luz"
                value={sensors.ldr}
                unit=" lux"
                emoji="☀️"
                connected={connected}
                history={history.ldr}
                color="#F97316"
              />
              <SensorCard
                title="Sonido"
                value={sensors.sound}
                unit=" dB"
                emoji="🔊"
                connected={connected}
                history={history.sound}
                color="#8B5CF6"
              />
            </div>

            <div className="space-y-4 mt-6">
              <h2 className="text-lg font-semibold text-gray-700 px-2">
                Dispositivos
              </h2>
              <LedCard
                name="Lámpara"
                location="Sala"
                emoji="💡"
                isOn={leds.led_manual === '1'}
                onToggle={() => toggleLed('led_manual')}
              />
              <LedCard
                name="Luz automática"
                location="Sala"
                emoji="🔆"
                isOn={leds.led_auto === '1'}
                onToggle={() => toggleLed('led_auto')}
              />
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default App;
