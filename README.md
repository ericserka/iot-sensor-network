# iot-sensor-network

Management system for a network of IoT (Internet of Things) sensors.

The objective of this project was to exercise OOP (Object-Oriented Programming) concepts by solving a real world problem.

Applied OOP concepts:

- Abstract class
- Access modifiers
- Inheritance
- Polymorphism

## Example of use

To install dependencies: `npm install`

To use interactively: `npm run repl`

```typescript
const network = new SensorNetwork();

const tempSensorConfig = {
    id: 'temp-001',
    location: 'Room',
    additionalConfig: {
        minTemperature: -10,
        maxTemperature: 50
    }
};

const humiditySensorConfig = {
    id: 'hum-001',
    location: 'Garden'
};

const tempSensor = new TemperatureSensor(tempSensorConfig);
const humiditySensor = new HumiditySensor(humiditySensorConfig);

network.addSensor(tempSensor);
network.addSensor(humiditySensor);

const collectNetworkData = async () => {
    try {
        const readings = await network.collectNetworkData();
        console.log('Network readings:', readings);
        console.log('Network Status:', network.getNetworkStatus());
    } catch (error) {
        console.error('Collecting Data Error:', error);
    }
};

collectNetworkData();
```
