import { Router } from "express";
import { readAllCategoriesController } from "./getController/readAllCategories.controller";
import { createCategoryController } from "./postController/createCategory.controller";

export const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(readAllCategoriesController);
