import { Request } from "express";
import { FileFilterCallback } from "multer";
import path from "path";
export const fileFilter = function (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) {
  // Allowed file types
  const filetypes = /jpeg|jpg|png/;
  // Check the file extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check the MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Error: Images Only!"));
  }
};
