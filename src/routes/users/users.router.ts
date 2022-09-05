import { Router } from "express";
import { getAllUsersController } from "./getController/getAllUsers.controller";

export const users = Router();

users.route("/").get(getAllUsersController);
