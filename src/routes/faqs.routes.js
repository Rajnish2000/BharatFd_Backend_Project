import { Router } from "express";
import {
  CreateFaqs,
  UpdateFaqs,
  DeleteFaqs,
  getAllFaqs,
} from "../controllers/faqs.controllers.js";
const router = Router();

router.route("/").get(getAllFaqs);

router.route("/?lang=").get(getAllFaqs);
router.route("/admin/create").post(CreateFaqs);
router.route("/admin/:id/update").put(UpdateFaqs);
router.route("/admin/:id/delete").delete(DeleteFaqs);

export default router;
