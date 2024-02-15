// routes/vote.js
import express from "express";
import {
  createVote,
  getVoteById,
  updateVoteById,
  deleteVoteById,
  getVotesByTargetId,
} from "../controllers/vote.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const votesRouter = express.Router();

votesRouter.post("/", createVote, defaultErrorHandler);
votesRouter.get("/:voteId", getVoteById, defaultErrorHandler);
votesRouter.put("/:voteId", updateVoteById, defaultErrorHandler);
votesRouter.delete("/:voteId", deleteVoteById, defaultErrorHandler);
votesRouter.get("/target/:targetId", getVotesByTargetId, defaultErrorHandler);

export default votesRouter;
