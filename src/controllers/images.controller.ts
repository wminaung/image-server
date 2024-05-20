import type { NextFunction, Request, Response } from "express";
import multer, { MulterError } from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import profileStorage from "../storage/profile.storage";
import mainStorage from "../storage/main.storage";

export const foodmanImageUpload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const upload = mainStorage.single("foodman");
  upload(req, res, (err) => {
    if (err instanceof MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds 5MB limit" });
      }
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(500).json({ message: "An unknown error occurred" });
    }
    // File upload success
    if (req.file) {
      const fileUrl = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
      console.log("File URL ::: ", fileUrl);

      console.log("f", req.file);

      return res.json({
        url: fileUrl,
        path: req.file.path,
        size: req.file.size,
        filename: req.file.filename,
        host: req.get("host"),
        protocol: req.protocol,
      });
    } else {
      return res.status(400).send("File upload failed.");
    }
  });
};

// profile upload
export const profileImageUpload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const upload = profileStorage.single("profile");

  upload(req, res, (err: any) => {
    if (err instanceof MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds 5MB limit" });
      }
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(500).json({ message: "An unknown error occurred" });
    }
    // File upload success
    if (req.file) {
      const fileUrl = `${req.protocol}://${req.get("host")}/images/profile/${
        req.file.filename
      }`;
      console.log("File URL ::: ", fileUrl);

      console.log("f", req.file);

      return res.json({
        url: fileUrl,
        path: req.file.path,
        size: req.file.size,
        filename: req.file.filename,
        host: req.get("host"),
        protocol: req.protocol,
      });
    } else {
      return res.status(400).send("File upload failed.");
    }
  });
};
