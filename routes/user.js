import express from "express";
import {
  login,
  registration,
  changePassword,
  getUsers,
  removeUser,
} from "../controller/user.js";
import userAuthentication from "../middleware/userAuthentication.js";
import adminAuthentication from "../middleware/adminAuthentication.js";

const user = express.Router();

user.post("/registration", registration);
user.post("/login", login);
user.put("/change-password", userAuthentication, changePassword);
user.get("", adminAuthentication, getUsers);
user.delete("/:userId", adminAuthentication, removeUser);
// user.get("/log-out", logOut);

export default user;
