import express from "express";
import { createPoll, getPolls, getPollById } from "../controllers/pollController.js";

const router = express.Router();

router.post("/", createPoll);
router.get("/", getPolls);
router.get("/:id", getPollById);

export default router;
