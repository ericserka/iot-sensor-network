import { SensorType } from './enums'

// Interface to standardize sensor data
export interface SensorReading {
  type: SensorType;
  value: number;
  timestamp: Date;
  sensorId: string;
}
