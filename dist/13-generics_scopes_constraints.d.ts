declare function listToDict4<Type>(list: Type[], // array as input
idGen: (arg: Type) => string): {
    [key: string]: Type;
};
declare function lToDict<Type>(list: Type[], idGen: (arg: Type) => string): {
    [key: string]: Type;
};
interface HasId {
    id: string;
}
interface Dictionary2<Type> {
    [key: string]: Type;
}
declare function listToDict5(list: HasId[]): Dictionary2<HasId>;
declare function listToDictGeneric<Type>(list: Type[]): Dictionary2<Type>;
declare function listToDictGeneric2<Type extends HasId>(list: Type[]): Dictionary2<Type>;
declare function tupleCreator<Type>(first: Type): <Result>(last: Result) => [Type, Result];
declare const finishTuple: <Result>(last: Result) => [number, Result];
declare const t1: [number, null];
declare const t2: [number, number[]];
declare function returnAs<Type>(arg: any): Type;
declare const firstly: number;
declare const secondly: number;
declare function ex1<Type extends HasId[]>(list: Type): HasId | undefined;
declare function ex2<Type extends HasId>(list: Type[]): string;
//# sourceMappingURL=13-generics_scopes_constraints.d.ts.map