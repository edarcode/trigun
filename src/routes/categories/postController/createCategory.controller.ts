import { CustomError } from "../../../classes/CustomError";
import {
	CATEGORY_CREATED_ERR,
	CATEGORY_CREATED_SUCCESS
} from "../../../constants/msgs";
import { Route } from "../../../ts/interfaces/controllers/Route";

import { createCategory } from "../../../utils/crud-category/createCategory";

export const createCategoryController: Route = async (req, res, next) => {
	try {
		const [, created] = await createCategory(req.body);
		if (!created)
			throw new CustomError({ message: CATEGORY_CREATED_ERR, status: 400 });
		res.status(201).json({ msg: CATEGORY_CREATED_SUCCESS });
	} catch (error) {
		next(error);
	}
};
