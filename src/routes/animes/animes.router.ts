import { Router } from "express";
import { createAnimeController } from "./postController/createAnimes.controller";

export const animes = Router();

animes.route("/").post(createAnimeController);
