import express from "express";
import { getAllSkills } from "../controller/skill.controller.js";

const router = express.Router();

router.get("/", getAllSkills);

export default router;
