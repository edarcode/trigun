import { Secret } from "jsonwebtoken";

export const PORT = process.env.PORT;
export const API_BASE_URL = process.env.API_BASE_URL;
export const SECRET: Secret = process.env.SECRET || "xD";
