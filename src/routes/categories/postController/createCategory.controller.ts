import { NextFunction, Request, Response } from "express";
import {
	CATEGORY_CREATED_ERR,
	CATEGORY_CREATED_SUCCESS
} from "../../../constants/msgs";
import { createCategory } from "../../../utils/crud-category/createCategory";

export const createCategoryController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const [, created] = await createCategory(req.body);
		const json = {
			msg: !created ? CATEGORY_CREATED_ERR : CATEGORY_CREATED_SUCCESS
		};
		const status = !created ? 400 : 201;
		res.status(status).json(json);
	} catch (error) {
		next(error);
	}
};
