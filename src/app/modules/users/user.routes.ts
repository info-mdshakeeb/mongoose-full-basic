import express from "express";
import { getAllUser, insertUserToDB } from "./user.controller";

const Router = express.Router();

Router.route("/all").get(getAllUser);
Router.route("/add-user").post(insertUserToDB);

export default Router;
