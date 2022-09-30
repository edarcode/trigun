import { Router } from "express";
import { getAllCategoriesController } from "./getController/getAllCategories.controller";
import { createCategoryController } from "./postController/createCategory.controller";

export const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(getAllCategoriesController);
