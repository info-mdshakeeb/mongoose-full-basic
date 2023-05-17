import mongoose from "mongoose";
import app from "./app";

//all necessary users and passwords :
const settings = require("../setting");
const port = settings.port;

async function connectMongoDb() {
  try {
    await mongoose.connect(settings.mongoUrl);
    console.log("database connected");
    app.listen(port, () => console.log("connected port", port));
  } catch (error) {
    console.log("error", error);
  }
}
connectMongoDb();
