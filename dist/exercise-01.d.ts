type JSONPrimitive = string | number | boolean;
type JSONObject = {
    [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;
declare function isJSON(arg: JSONValue): void;
//# sourceMappingURL=exercise-01.d.ts.map