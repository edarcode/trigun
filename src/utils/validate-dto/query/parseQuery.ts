import { CustomError } from "../../../classes/CustomError";
import { ParseQuery, TypeData } from "../../../types/validate-dto/ValidateDto";
import { parseQueryToBool } from "./parseQueryToBool";
import { parseQueryToNumber } from "./parseQueryToNumber";
import { parseQueryToObject } from "./parseQueryToObject";
import { parseQueryToString } from "./parseQueryToString";

export const parseQuery: ParseQuery = (nameQuery, valueQuery, typeParse) => {
	const ERR_TYPE_QUERY = "Todas las query deben ser enviadas como strings";
	if (typeof valueQuery !== "string")
		throw new CustomError({ message: ERR_TYPE_QUERY, status: 400 });

	if (typeParse === TypeData.boolean)
		return parseQueryToBool(nameQuery, valueQuery);
	if (typeParse === TypeData.number)
		return parseQueryToNumber(nameQuery, valueQuery);
	if (typeParse === TypeData.string)
		return parseQueryToString(nameQuery, valueQuery);
	if (typeParse === TypeData.object)
		return parseQueryToObject(nameQuery, valueQuery);

	return new TypeError("typeParse es incorrecto");
};
