/**
 * JavaScript Example:
 * class Car {
    constructor(make, model, year) {
      this.make = make
      this.model = model
        (property) Car.model: any
      this.year = year
    }
  }
 
  let sedan = new Car("Honda", "Accord", 2017)
  sedan.activateTurnSignal("left") // not safe!
  new Car(2017, "Honda", "Accord") // not safe!
 */
declare class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
}
declare const sedan: Car;
declare class Car2 {
    make: string;
    model: string;
    year: number;
    protected vinNumber: () => number;
    private doorLockCode;
    constructor(make: string, model: string, year: number);
    protected unlockAllDoors(): void;
}
declare function unlockCar(car: Car2, doorLockCode: number): void;
declare class Sedan extends Car2 {
    constructor(make: string, model: string, year: number);
    unlock(): void;
}
declare const s: Sedan;
declare class Truck {
    #private;
    make: string;
    model: string;
    constructor(make: string, model: string, year: number);
}
declare const t: Truck;
declare class Airplane {
    make: string;
    model: string;
    readonly year: number;
    constructor(make: string, model: string, year: number);
    updateYear(): void;
}
declare class Car3 {
    make: string;
    model: string;
    readonly year: number;
    constructor(make: string, model: string, year: number);
}
declare const myNewCar: Car;
declare class Base {
    bar: void;
    constructor();
}
declare class Derived extends Base {
    make: string;
    foo: void;
    constructor(make: string);
}
declare const derived: Derived;
//# sourceMappingURL=07-classes.d.ts.map