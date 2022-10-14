import { CustomError } from "../../../classes/CustomError";

export const parseQueryToObject = (nameQuery: string, valueQuery: string) => {
	let orderBy: object;
	const ERR_QUERY = `$query ${nameQuery} incorrecto`;
	try {
		orderBy = JSON.parse(valueQuery);
	} catch (error) {
		throw new CustomError({ message: ERR_QUERY, status: 400 });
	}
	const lenOrderBy = Object.keys(orderBy).length;
	if (lenOrderBy <= 0)
		throw new CustomError({ message: ERR_QUERY, status: 400 });
	return orderBy;
};
