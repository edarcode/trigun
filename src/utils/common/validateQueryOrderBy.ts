import { CustomError } from "../../classes/CustomError";
import { ERR_QUERY } from "../../constants/msgs";
import { OrderByReadCategories } from "../../types/crud-category/admin/ReadCategories";
import { Query } from "../../types/express/Query";

export const validateQueryOrderBy = (query: Query) => {
	if (query === undefined) return undefined;
	if (typeof query !== "string")
		throw new CustomError({ message: ERR_QUERY, status: 400 });
	const orderBy: OrderByReadCategories = JSON.parse(query);
	const lenOrderBy = Object.keys(orderBy).length;
	if (lenOrderBy <= 0)
		throw new CustomError({ message: "orderBy incorrecto", status: 400 });
	return orderBy;
};
