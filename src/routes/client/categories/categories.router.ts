import { Router } from "express";
import { readCategoriesController } from "./controllers/get/readCategories.controller";
import { validateDtoReadCategories } from "./middlewares/validateDtoReadCategories";
export const categories = Router();

categories.route("/").get(validateDtoReadCategories, readCategoriesController);
