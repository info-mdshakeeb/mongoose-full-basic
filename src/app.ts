import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./app/modules/users/user.routes";

const app = express();
app.use(cors());

//parse :
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//basic route
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});
//make separates routes :
app.use("/api/v1/user", userRouter);

export default app;
