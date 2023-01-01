/**
 * @filename: types.ts
  export type UserContactInfo = {
    name: string
    email: string
  }

 * @filename: utilities.ts
  import { UserContactInfo } from "./types"
    (alias) type UserContactInfo = {
      name: string;
      email: string;
    }
  function printContactInfo(info: UserContactInfo) {
    console.log(info)
      (parameter) info: UserContactInfo
    console.log(info.email)
      (property) email: string
  }
 */
type UserInfoOutcomeSuccess = ['success', {
    name: string;
    email: string;
}];
type UserInfoOutcomeError = ['failure', Error];
type UserInfoOutcome = UserInfoOutcomeSuccess | UserInfoOutcomeError;
declare function maybeGetUserInfoTwo(): UserInfoOutcome;
type SpecialDate = Date & {
    getReason(): string;
};
declare const newYearsEve: SpecialDate;
interface UserContactInformation {
    name: string;
    email: string;
    phone: string;
}
declare function printContactInfo(info: UserContactInformation): void;
interface Animal {
    isAlive(): boolean;
}
interface Mammal extends Animal {
    getFurOrHairColor(): string;
}
interface Dog extends Mammal {
    getBreed(): string;
}
declare function careForDog(dog: Dog): void;
declare const myDog: Dog;
interface AnimalLike {
    eat: (food: any) => void;
}
declare class Doggo implements AnimalLike {
    bark: () => void;
    eat: (food: any) => void;
}
declare const doggo: Doggo;
type NestedNumbers = number | NestedNumbers[];
type NestedStrings = string | NestedStrings[];
type ArraysOfNumbersAndStrings = (number | string)[] | ArraysOfNumbersAndStrings[];
//# sourceMappingURL=index-04.d.ts.map