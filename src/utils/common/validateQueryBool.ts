import { CustomError } from "../../classes/CustomError";
import { ERR_QUERY } from "../../constants/msgs";
import { Query } from "../../types/express/Query";

export const validateQueryBool = (query: Query) => {
	if (query === undefined) return undefined;
	if (query === "true") return true;
	if (query === "false") return false;
	throw new CustomError({ message: ERR_QUERY, status: 400 });
};
