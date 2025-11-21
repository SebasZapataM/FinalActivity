import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../config/firebase';
import { SensorData, LedControl, SensorHistory } from '../types/sensors';

const MAX_HISTORY_LENGTH = 20;

export const useFirebaseData = () => {
  const [sensors, setSensors] = useState<SensorData>({
    temp: 0,
    hum: 0,
    ldr: 0,
    sound: 0,
  });

  const [leds, setLeds] = useState<LedControl>({
    led_manual: '0',
    led_auto: '0',
  });

  const [history, setHistory] = useState<SensorHistory>({
    temp: [],
    hum: [],
    ldr: [],
    sound: [],
  });

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const sensorsRef = ref(database, 'sensors');
    const ledManualRef = ref(database, 'led_manual');
    const ledAutoRef = ref(database, 'led_auto');

    const unsubscribeSensors = onValue(sensorsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensors({
          temp: data.temp || 0,
          hum: data.hum || 0,
          ldr: data.ldr || 0,
          sound: data.sound || 0,
        });

        setHistory((prev) => ({
          temp: [...prev.temp, data.temp || 0].slice(-MAX_HISTORY_LENGTH),
          hum: [...prev.hum, data.hum || 0].slice(-MAX_HISTORY_LENGTH),
          ldr: [...prev.ldr, data.ldr || 0].slice(-MAX_HISTORY_LENGTH),
          sound: [...prev.sound, data.sound || 0].slice(-MAX_HISTORY_LENGTH),
        }));

        setConnected(true);
      }
    }, () => {
      setConnected(false);
    });

    const unsubscribeLedManual = onValue(ledManualRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        setLeds((prev) => ({ ...prev, led_manual: String(value) }));
      }
    });

    const unsubscribeLedAuto = onValue(ledAutoRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        setLeds((prev) => ({ ...prev, led_auto: String(value) }));
      }
    });

    return () => {
      unsubscribeSensors();
      unsubscribeLedManual();
      unsubscribeLedAuto();
    };
  }, []);

  const toggleLed = async (ledType: 'led_manual' | 'led_auto') => {
    const currentValue = leds[ledType];
    const newValue = currentValue === '1' ? '0' : '1';
    const ledRef = ref(database, ledType);
    await set(ledRef, newValue);
  };

  return {
    sensors,
    leds,
    history,
    connected,
    toggleLed,
  };
};
