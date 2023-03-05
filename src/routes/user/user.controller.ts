import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/response/defaultResponse";
import userService from "./user.service";

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllUser(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("bruh");
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
};
