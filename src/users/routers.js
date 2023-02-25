import express from "express";
import { body, param } from "express-validator";
import {
  createUserController,
  getUserController,
  loginController,
} from "./controllers.js";
import { validationResultMiddleware } from "../validators.js";

// create router instance
const router = express.Router();

router.post("", createUserController);
router.post("/login", loginController);
router.get(
  "/:id",
  [param("id").exists().isInt().withMessage("invalid id").bail().toInt()],
  validationResultMiddleware,
  getUserController
);

export default router;
