import type { NextFunction, Request, Response } from "express";

export const getRoot = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, "getData");
  res.send("ok!!");
};
