import { Request, Response } from "express";
import { getUsersFormDb, saveUserToDb } from "./user.services";

export const getAllUser = async (req: Request, res: Response) => {
  const users = await getUsersFormDb();
  res.status(200).json({
    result: "success",
    data: users,
  });
};
export const insertUserToDB = async (req: Request, res: Response) => {
  const user = req.body;
  const data = await saveUserToDb(user);
  res.status(200).json({
    result: "success",
    data: data,
  });
};
