// Classes

// Class Fields
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
// Very Verbose Example:
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const sedan = new Car("Honda", "Accord", 2017);
// sedan.activateTurnSignal("left"); // not safe!
// new Car(2017, "Honda", "Accord"); // not safe!

// Access Modifier Keywords
// public - can be accessed anywhere (default)
// private - can only be accessed within the class
// protected - can only be accessed within the class or a subclass
class Car2 {
  public make: string;
  public model: string;
  public year: number;
  protected vinNumber: () => number;
  private doorLockCode: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.doorLockCode = 4321;
    this.vinNumber = () => Math.floor(Math.random() * 10000000000000000);
  }

  protected unlockAllDoors() {
    unlockCar(this, this.doorLockCode);
  }
}

function unlockCar(car: Car2, doorLockCode: number) {

};

class Sedan extends Car2 {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
    this.vinNumber;
    // this.doorLockCode; // Error: Property 'doorLockCode' is private and only accessible within class 'Car2'.
  }

  public unlock() {
    console.log("Unlocking at " + new Date().toISOString());
    this.unlockAllDoors();
  }
}

const s = new Sedan("Honda", "Accord", 2017);
s.make;
// s.vinNumber; // Error: Property 'vinNumber' is protected and only accessible within class 'Car2' and its subclasses.
// s.doorLockCode; // Error: Property 'doorLockCode' is private and only accessible within class 'Car2'.
s.unlock();

// JS Private #fields
//  As of TS 3.8, you can use the # prefix to create private fields.
//  This is a new feature that is not yet supported by all browsers.
class Truck {
  public make: string;
  public model: string;
  #year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.#year = year;
  }
}

const t = new Truck("Ford", "F150", 2017);
// t.#year; // Error: Property '#year' is not accessible outside class 'Truck' because it has a private identifier.

// Readonly Fields