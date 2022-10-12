import { Router } from "express";
import { admin } from "./admin/admin.router";
import { client } from "./client/client.router";

export const router = Router();

router.use("/admin", admin);
router.use("/client", client);
