import { CustomError } from "../../../classes/CustomError";
import { P2025 } from "../../../constants/dbErrorCodes";
import {
	CATEGORY_REMOVED_SUCCESS,
	NOT_FOUND_ID
} from "../../../constants/msgs";
import { Route } from "../../../types/controllers/Route";
import { deleteCategory } from "../../../utils/crud-category/deleteCategory";

export const deleteCategoryController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteCategory(Number(id));
		res.status(200).json({ msg: CATEGORY_REMOVED_SUCCESS });
	} catch (error: any) {
		if (error.code === P2025)
			next(new CustomError({ message: NOT_FOUND_ID, status: 404 }));
		next(error);
	}
};
