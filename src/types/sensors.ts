export interface SensorData {
  temp: number;
  hum: number;
  ldr: number;
  sound: number;
}

export interface LedControl {
  led_manual: string;
  led_auto: string;
}

export interface SensorHistory {
  temp: number[];
  hum: number[];
  ldr: number[];
  sound: number[];
}
