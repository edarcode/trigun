import { Router } from "express";
import { readAnimesController } from "./getController/readAnimes.controller";
import { createAnimeController } from "./postController/createAnimes.controller";

export const animes = Router();

animes.route("/").post(createAnimeController);
animes.route("/").get(readAnimesController);
