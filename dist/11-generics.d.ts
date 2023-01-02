declare const phones2: {
    [key: string]: {
        customerId: string;
        areaCode: string;
        number: string;
    };
};
declare const phoneList: {
    customerId: string;
    areaCode: string;
    num: string;
}[];
declare const phoneDict: {
    "0001": {
        customerId: string;
        areaCode: string;
        num: string;
    };
};
interface PhoneInfo {
    customerId: string;
    areaCode: string;
    num: string;
}
declare function listToDict(list: PhoneInfo[], // Take the list as an argument
idGen: (arg: PhoneInfo) => string): {
    [key: string]: PhoneInfo;
};
declare function listToDict2(list: any[], // Take the list as an argument
idGen: (arg: any) => string): {
    [key: string]: any;
};
declare const list2: {
    name: string;
}[];
declare const myDict: {
    [key: string]: any;
};
declare function wrapInArray<Type>(arg: Type): [Type];
declare const myNumArray: [number];
declare const myStrArray: [string];
declare const myBoolArray: [boolean];
declare function listToDict3<Type>(list: Type[], // Take list of type Type as an argument
idGen: (arg: Type) => string): {
    [key: string]: Type;
};
declare const list3: Date[];
//# sourceMappingURL=11-generics.d.ts.map