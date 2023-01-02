declare const userInfo: {
    name: string;
    email: string;
    secondaryEmail: null;
};
declare const formInProgress: {
    createdAt: Date;
    data: FormData;
    completedAt: undefined;
};
declare function submitForm(): void;
type GroceryCart = {
    fruits?: {
        name: string;
        quantity: number;
    }[];
    vegetables?: {
        name: string;
        quantity: number;
    }[];
};
declare const cart: GroceryCart;
declare class ThingWithAsyncSetup {
    setupPromise: Promise<any>;
    isSetup: boolean;
    constructor();
    private doSetup;
}
//# sourceMappingURL=10-nullish_values.d.ts.map