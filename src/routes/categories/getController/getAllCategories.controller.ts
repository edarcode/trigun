import { NextFunction, Request, Response } from "express";

export const getAllCategoriesController = (
	_: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json({ msg: "get categories" });
	} catch (error) {
		next(error);
	}
};
