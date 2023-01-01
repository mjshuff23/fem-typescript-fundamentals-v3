interface TwoNumberOperation {
    (a: number, b: number): number;
}
type TwoNumberCalculation = (a: number, b: number) => number;
declare const addNumbers: TwoNumberOperation;
declare const multiplyNumbers: TwoNumberCalculation;
declare function invokeInFourSeconds(callback: () => undefined): void;
declare function invokeInFiveSeconds(callback: () => void): void;
declare const values: number[];
interface DateConstructor {
    new (value?: number): Date;
}
declare let MyDateConstructor: DateConstructor;
declare const d: Date;
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (event: MessageEvent) => void;
declare const myFrame: HTMLIFrameElement;
declare const myForm: HTMLFormElement;
declare function handleMainEvent(element: HTMLFormElement, handler: FormSubmitHandler): void;
declare function handleMainEvent(element: HTMLIFrameElement, handler: MessageHandler): void;
declare function reallyHandleClick(this: HTMLButtonElement, event: Event): void;
declare function myClickHandler(this: HTMLButtonElement, event: Event): void;
declare const myButton: HTMLButtonElement;
declare const boundHandler: (event: Event) => void;
declare function getData(url: string): Promise<{
    properties: string[];
} | undefined>;
//# sourceMappingURL=06-functions.d.ts.map