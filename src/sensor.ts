import { SensorStatus } from './enums'
import { SensorConfig } from './types'
import { SensorReading } from './interfaces'

// abstract class with access modifiers
export abstract class Sensor {
  readonly id: string;
  protected readonly location: string;
  status: SensorStatus;
  protected lastReadingTimestamp: Date | null;
  private readonly networkTimeout: number;
  protected additionalConfig?: unknown;

  constructor(config: SensorConfig<unknown>, networkTimeout: number = 5000) {
    this.id = config.id;
    this.location = config.location;
    this.status = SensorStatus.Offline;
    this.lastReadingTimestamp = null;
    this.networkTimeout = networkTimeout;
    this.additionalConfig = config.additionalConfig;
  }

  abstract collectData(): SensorReading;

  public async connect(): Promise<void> {
    try {
      this.status = SensorStatus.Connecting;
      await this.networkHandshake();
      this.status = SensorStatus.Online;
    } catch (error) {
      this.status = SensorStatus.Offline;
    }
  }

  private async networkHandshake(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Network Connection Timeout'));
      }, this.networkTimeout);

      setTimeout(() => {
        clearTimeout(timeout);
        resolve();
      }, 1000);
    });
  }
}
