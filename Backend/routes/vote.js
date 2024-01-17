// routes/vote.js
import express from "express";
import {
  createVote,
  getVoteById,
  updateVoteById,
  deleteVoteById,
  getVotesByTargetId,
} from "../controllers/voteController";

const router = express.Router();

router.post("/", createVote);
router.get("/:voteId", getVoteById);
router.put("/:voteId", updateVoteById);
router.delete("/:voteId", deleteVoteById);
router.get("/target/:targetId", getVotesByTargetId);


export default router;

