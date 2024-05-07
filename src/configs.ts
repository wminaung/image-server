import dotenv from "dotenv";
import { Configs } from "./types";
dotenv.config();

export default <Configs>{
  baseUrl: process.env.BASE_URL || "",
  apiUrl: process.env.API_URL || "",
  port: process.env.PORT || 3001,
};
