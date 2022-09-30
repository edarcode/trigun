import { NextFunction, Request, Response } from "express";
import { readCategories } from "../../../utils/crud-category/readCategories";

export const getAllCategoriesController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const categories = await readCategories(req.query);
		res.json(categories);
	} catch (error) {
		next(error);
	}
};
