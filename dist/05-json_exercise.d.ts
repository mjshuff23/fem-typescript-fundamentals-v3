type JSONPrimitive = string | number | boolean | null;
type JSONObject = {
    [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;
declare function isJSON(arg: JSONValue): void;
//# sourceMappingURL=05-json_exercise.d.ts.map