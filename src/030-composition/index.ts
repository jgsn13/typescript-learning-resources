// Composition: the existence of a class depends on the other. The strongest
// type of association between classes

// When the garbage collector deletes Car, Engine will be deleted too

export class Car {
  private readonly engine = new Engine();

  public turnOn(): void {
    this.engine.turnOn();
  }

  public accelerate(): void {
    this.engine.accelerate();
  }

  public stop(): void {
    this.engine.stop();
  }

  public turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  public turnOn(): void {
    console.log('Engine is on...');
  }

  public accelerate(): void {
    console.log('Engine is accelerating...');
  }

  public stop(): void {
    console.log('Engine is stopped...');
  }

  public turnOff(): void {
    console.log('Engine is off...');
  }
}

const car = new Car();

car.turnOn();
car.accelerate();
car.stop();
car.turnOff();
