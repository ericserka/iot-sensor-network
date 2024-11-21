// Generic type for sensor configuration
export type SensorConfig<T> = {
  id: string;
  location: string;
  additionalConfig?: T;
};

// Specific types for configuring temperature sensors
export type TemperatureSensorConfig = {
  minTemperature: number;
  maxTemperature: number;
}
