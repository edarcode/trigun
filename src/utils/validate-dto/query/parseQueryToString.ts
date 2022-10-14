import { CustomError } from "../../../classes/CustomError";

export const parseQueryToString = (nameQuery: string, valueQuery: string) => {
	const ERR_QUERY = `La query ${nameQuery} debe ser de tipo string`;
	if (typeof valueQuery !== "string")
		throw new CustomError({ message: ERR_QUERY, status: 400 });

	return valueQuery;
};
