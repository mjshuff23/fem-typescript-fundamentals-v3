declare let x: boolean;
declare let y: number;
declare let a: 5 | 6 | 7;
declare let b: null;
declare let c: {
    favoriteFruit?: "pineapple";
};
declare let flexible: any;
declare let myUnknown: unknown;
declare class Car4 {
    drive(): void;
}
declare class Truck4 {
    tow(): void;
}
declare class Boat4 {
    sail(): void;
}
type Vehicle = Car4 | Truck4 | Boat4;
declare function obtainRandomVehicle(): Car4 | Truck4 | Boat4;
declare const myVehicle: Vehicle;
declare class InvalidVehicleError extends Error {
    constructor(_vehicle: never, message: string);
}
//# sourceMappingURL=08-top_bottom_types.d.ts.map