const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);

module.exports = userRouter;
