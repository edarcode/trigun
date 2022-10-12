import { Router } from "express";
import { validateDtoCreateCategory } from "../../../middlewares/routes/admin/validateDtoCreateCategory";
import { deleteCategoryController } from "./controllers/delete/deleteCategory.controller";
import { readCategoriesController } from "./controllers/get/readCategories.controller";
import { createCategoryController } from "./controllers/post/createCategory.controller";
import { updateCategoryController } from "./controllers/put/updateCategory.controller";
export const categories = Router();

categories.route("/").post(validateDtoCreateCategory, createCategoryController);
categories.route("/").get(readCategoriesController);
categories.route("/:id").patch(updateCategoryController);
categories.route("/:id").delete(deleteCategoryController);