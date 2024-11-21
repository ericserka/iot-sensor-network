import { SensorType } from "./enums";
import { SensorReading } from "./interfaces";
import { Sensor } from "./sensor";

export class HumiditySensor extends Sensor {
  private currentHumidity: number | null = null;

  collectData(): SensorReading {
    this.currentHumidity = Math.random() * 100;
    this.lastReadingTimestamp = new Date();

    return {
      type: SensorType.Humidity,
      value: this.currentHumidity,
      timestamp: this.lastReadingTimestamp,
      sensorId: this.id
    };
  }

}
