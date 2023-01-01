declare let value: Date | null | undefined | 'pineapple' | [number] | {
    dateRange: [Date, Date];
};
interface CarLike {
    make: string;
    model: string;
    year: number;
}
declare let maybeCar: unknown;
declare function isCarLike(value: any): value is CarLike;
declare function assertsIsCarLike(value: any): asserts value is CarLike;
/**
 * function isNull(val: any): val is null {
    return !val
   }
  
   const empty = ""
   const zero = 0
   if (isNull(zero)) {
    console.log(zero) // is it really impossible to get here?
      const zero: never
   }
   if (isNull(empty)) {
    console.log(empty) // is it really impossible to get here?
      const empty: never
   }
 */
declare function isNull(val: any): val is null;
declare const empty = "";
declare const zero = 0;
//# sourceMappingURL=09-type_guards_narrowing.d.ts.map