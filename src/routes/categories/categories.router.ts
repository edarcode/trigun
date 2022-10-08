import { Router } from "express";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller";
import { readCategoriesController } from "./getController/readCategories.controller";
import { createCategoryController } from "./postController/createCategory.controller";
import { updateCategoryController } from "./updateController/updateCategory.controller";

export const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(readCategoriesController);
categories.route("/:id").patch(updateCategoryController);
categories.route("/:id").delete(deleteCategoryController);
