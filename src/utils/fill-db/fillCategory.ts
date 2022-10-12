import { categories } from "../../sketch/categories";
import { createCategory } from "../crud-category/admin/createCategory";

export const fillCategory = async () => {
	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		await createCategory(category);
	}
};
