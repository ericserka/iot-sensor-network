import { SensorStatus } from "./enums";
import { SensorReading } from "./interfaces";
import { Sensor } from "./sensor";

export class SensorNetwork<T extends Sensor> {
  private sensors: Map<string, T>;

  constructor() {
    this.sensors = new Map();
  }

  public addSensor(sensor: T): void {
    if (this.sensors.has(sensor.id)) {
      throw new Error(`Sensor with id ${sensor.id} already exists`);
    }
    this.sensors.set(sensor.id, sensor);
  }

  public async collectNetworkData(): Promise<SensorReading[]> {
    const sensorReadings = await Promise.all(
      Array.from(this.sensors.values()).map(async (sensor) => {
        await sensor.connect();
        return sensor.collectData();
      })
    );

    return sensorReadings;
  }

  public getNetworkStatus() {
    return {
      totalSensors: this.sensors.size,
      onlineSensors: Array.from(this.sensors.values())
        .filter(sensor => sensor.status === SensorStatus.Online).length
    };
  }
}

