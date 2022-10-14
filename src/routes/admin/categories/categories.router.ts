import { Router } from "express";
import { readCategoriesController } from "../../client/categories/controllers/get/readCategories.controller";
import { validateDtoReadCategories } from "../../client/categories/middlewares/validateDtoReadCategories";
import { deleteCategoryController } from "./controllers/delete/deleteCategory.controller";
import { createCategoryController } from "./controllers/post/createCategory.controller";
import { updateCategoryController } from "./controllers/put/updateCategory.controller";
import { validateDtoCreateCategory } from "./middlewares/validateDtoCreateCategory";
export const categories = Router();

categories.route("/").post(validateDtoCreateCategory, createCategoryController);
categories.route("/").get(validateDtoReadCategories, readCategoriesController);
categories.route("/:id").patch(updateCategoryController);
categories.route("/:id").delete(deleteCategoryController);
