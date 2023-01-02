declare const fruits: {
    apple: {
        color: string;
        mass: number;
    };
    grape: {
        color: string;
        mass: number;
    };
    banana: {
        color: string;
        mass: number;
    };
    lemon: {
        color: string;
        mass: number;
    };
    pear: {
        color: string;
        mass: number;
    };
    orange: {
        color: string;
        mass: number;
    };
    raspberry: {
        color: string;
        mass: number;
    };
    cherry: {
        color: string;
        mass: number;
    };
};
interface Dictionary<Type> {
    [key: string]: Type;
}
declare function mapDictionary<Type, Result>(inputDictionary: Dictionary<Type>, mapFunction: (originalDictionary: Type, key: string) => Result): Dictionary<Result>;
declare function filterDictionary<Type>(inputDictionary: Dictionary<Type>, filterFunction: (value: Type, key: string) => boolean): Dictionary<Type>;
declare function reduceDictionary<Type, Result>(inputDictionary: Dictionary<Type>, reduceFunction: (currentValue: Result, value: Type, key: string) => Result, initialValue: Result): Result;
declare const myDict2: {
    "1": {
        name: string;
    };
    "2": {
        name: string;
    };
    "3": {
        name: string;
    };
};
//# sourceMappingURL=12-dictionary_map_filter_reduce.d.ts.map