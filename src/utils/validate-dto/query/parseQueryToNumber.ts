import { CustomError } from "../../../classes/CustomError";

export const parseQueryToNumber = (nameQuery: string, valueQuery: string) => {
	const numberQuery = Number(valueQuery);
	const ERR_QUERY = `La query ${nameQuery} debe ser de tipo number`;
	if (isNaN(numberQuery))
		throw new CustomError({ message: ERR_QUERY, status: 400 });

	return numberQuery;
};
