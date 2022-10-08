import { Query } from "../../ts/express/types/Query";

export const formatCategories = (categories: Query) => {
	if (!categories) return;
	if (typeof categories !== "string") return;
	const parseCategories: number[] = JSON.parse(categories);
	if (!parseCategories.length) return;
	return parseCategories.map(id => ({ id }));
};
