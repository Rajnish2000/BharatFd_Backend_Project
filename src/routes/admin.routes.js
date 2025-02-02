import Router from "express";
import passport from "passport";
import { signUp, login, logout } from "../controllers/admin.controllers.js";
const router = Router();

router
  .route("/login")
  .post(passport.authenticate("local", { failureMessage: true }), login);
router.route("/logout").get(logout);
router.route("/signup").post(signUp);

export default router;
