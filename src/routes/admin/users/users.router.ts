import { Router } from "express";
import { deleteUserByIdController } from "./delete/deleteUserById.controller";
import { readUserByIdController } from "./get/readUserById.controller";
import { readUsersController } from "./get/readUsers.controller";
import { updateUserByIdController } from "./put/updateUserById.controller";
export const users = Router();

users.route("/").get(readUsersController);
users.route("/:id").get(readUserByIdController);
users.route("/:id").put(updateUserByIdController);
users.route("/:id").delete(deleteUserByIdController);
