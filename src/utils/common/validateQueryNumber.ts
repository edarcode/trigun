import { CustomError } from "../../classes/CustomError";
import { ERR_QUERY } from "../../constants/msgs";
import { Query } from "../../types/express/Query";

export const validateQueryNumber = (query: Query) => {
	if (query === undefined) return undefined;
	const numberQuery = Number(query);
	if (isNaN(numberQuery))
		throw new CustomError({ message: ERR_QUERY, status: 400 });

	return numberQuery;
};
