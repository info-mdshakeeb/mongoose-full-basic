import { IUser } from "./user.interface";
import userModel from "./user.module";

export const saveUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new userModel(payload);
  await user.save();
  return user;
};

export const getUsersFormDb = async (): Promise<IUser[]> => {
  const users = await userModel.find();
  return users;
};
