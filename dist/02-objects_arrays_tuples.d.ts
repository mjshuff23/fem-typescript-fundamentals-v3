declare let car: {
    make: string;
    model: string;
    year: number;
};
/**
 * Print information about a car to the console
 * @param car - the car to print
 */
declare function printCar(car: {
    make: string;
    model: string;
    year: number;
    color: string;
    chargeVoltage?: number;
}): void;
declare const phones: {
    home: {
        country: string;
        area: string;
        number: string;
    };
    work: {
        country: string;
        area: string;
        number: string;
    };
    fax: {
        country: string;
        area: string;
        number: string;
    };
    mobile: {
        country: string;
        area: string;
        number: string;
    };
};
declare const phonesSignature: {
    [key: string]: {
        country: string;
        area: string;
        number: string;
    };
};
declare const fileExtensions: string[];
declare const fileExtensions2: string[];
declare const fileExtensions3: Array<string>;
declare let myCar: (string | number)[];
declare const year: string | number, make: string | number, model: string | number;
declare let mySecondCar: [number, string, string];
//# sourceMappingURL=02-objects_arrays_tuples.d.ts.map