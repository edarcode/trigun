import { CustomError } from "../../../classes/CustomError";

export const parseQueryToBool = (nameQuery: string, valueQuery: string) => {
	if (valueQuery === "true") return true;
	if (valueQuery === "false") return false;
	const ERR_QUERY = `La query ${nameQuery} debe ser de tipo bool`;
	throw new CustomError({ message: ERR_QUERY, status: 400 });
};
