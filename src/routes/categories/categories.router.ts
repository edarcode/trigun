import { Router } from "express";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller";
import { readAllCategoriesController } from "./getController/readAllCategories.controller";
import { createCategoryController } from "./postController/createCategory.controller";
import { updateCategoryController } from "./updateController/updateCategory.controller";

export const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(readAllCategoriesController);
categories.route("/:id").patch(updateCategoryController);
categories.route("/:id").delete(deleteCategoryController);
