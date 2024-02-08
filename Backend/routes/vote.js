// routes/vote.js
import express from "express";
import {
  createVote,
  getVoteById,
  updateVoteById,
  deleteVoteById,
  getVotesByTargetId,
} from "../controllers/vote.js";

const votesRouter = express.Router();

votesRouter.post("/", createVote);
votesRouter.get("/:voteId", getVoteById);
votesRouter.put("/:voteId", updateVoteById);
votesRouter.delete("/:voteId", deleteVoteById);
votesRouter.get("/target/:targetId", getVotesByTargetId);

export default votesRouter;
