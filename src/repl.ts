import repl from 'repl'
import { Sensor } from './sensor'
import { SensorNetwork } from './sensorNetwork'
import { HumiditySensor } from './humiditySensor'
import { TemperatureSensor } from './temperatureSensor'

const r = repl.start()

r.context.Sensor = Sensor
r.context.SensorNetwork = SensorNetwork
r.context.TemperatureSensor = TemperatureSensor
r.context.HumiditySensor = HumiditySensor
