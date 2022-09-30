import { NextFunction, Request, Response } from "express";
import { createCategory } from "../../../utils/crud-category/createCategory";

export const createCategoryController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const category = await createCategory(req.body);
		res.json({ msg: "categoría creada correctamente", category });
	} catch (error) {
		console.log("asdfasdf");
		next(error);
	}
};
