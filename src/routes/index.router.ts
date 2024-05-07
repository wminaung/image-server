import express from "express";
import type { NextFunction, Request, Response } from "express";
import { getRoot } from "../controllers/index.controller";

const router = express.Router();

/* GET home page. */
router.get("/", getRoot);

export default router;
