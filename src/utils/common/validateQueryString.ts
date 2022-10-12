import { CustomError } from "../../classes/CustomError";
import { ERR_QUERY } from "../../constants/msgs";
import { Query } from "../../types/express/Query";

export const validateQueryString = (query: Query) => {
	if (query === undefined) return undefined;
	if (typeof query !== "string")
		throw new CustomError({ message: ERR_QUERY, status: 400 });
	return query;
};
