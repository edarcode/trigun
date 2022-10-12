export const calcTypeof = (param: any) => {
	if (param === null) return "null";
	if (param === undefined) return "undefined";
	if (typeof param === "string") return "string";
	if (typeof param === "number") return "number";
	if (typeof param === "boolean") return "boolean";
	if (Array.isArray(param)) return "array";
	if (typeof param === "object") return "object";
	return "any";
};
