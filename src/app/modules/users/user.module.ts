import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  userName: { type: String, required: true, unique: true },
  address: {
    present: { type: String, required: true },
    permanent: { type: String, required: true },
  },
  gender: { type: String, enum: ["male", "female"] },
  phone: { type: String, required: true },
  isMarried: { type: Boolean, required: true },
});

const userModel = model<IUser>("userModel", userSchema);
export default userModel;
