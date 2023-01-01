declare let outcome: 'success' | 'failure';
declare function flipCoin(): 'heads' | 'tails';
declare const outcome2: "heads" | "tails";
declare function maybeGetUserInfo(): ['failure', Error] | ['success', {
    name: string;
    email: string;
}];
declare const outcome3: ["failure", Error] | ["success", {
    name: string;
    email: string;
}];
declare const first: "success" | "failure", second: Error | {
    name: string;
    email: string;
};
declare const ONE_WEEK: number;
declare function makeWeek(): Date & {
    endTime: Date;
};
declare const week: Date & {
    endTime: Date;
};
//# sourceMappingURL=index-03.d.ts.map