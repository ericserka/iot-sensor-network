import { SensorType } from "./enums";
import { SensorReading } from "./interfaces";
import { Sensor } from "./sensor";
import { SensorConfig, TemperatureSensorConfig } from "./types";

export class TemperatureSensor extends Sensor {
  private currentTemperature: number | null;

  // ensuring specific temperature config
  constructor(
    config: SensorConfig<TemperatureSensorConfig>
  ) {
    super(config);
    this.currentTemperature = null;
  }

  collectData(): SensorReading {
    const tempConfig = this.additionalConfig as TemperatureSensorConfig;
    this.currentTemperature = Math.random() *
      (tempConfig.maxTemperature - tempConfig.minTemperature) + tempConfig.minTemperature;

    this.lastReadingTimestamp = new Date();

    return {
      type: SensorType.Temperature,
      value: this.currentTemperature,
      timestamp: this.lastReadingTimestamp,
      sensorId: this.id
    };
  }
}
