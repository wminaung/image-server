import type { NextFunction, Request, Response } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const getRoot = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, "getData");
  return res.send("ok!!");
};

export const createRoot = (req: Request, res: Response, next: NextFunction) => {
  res.send("create!!");
};
