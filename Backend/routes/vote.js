/**
 * @module routes/vote
 * @requires express
 * @requires models/vote
 * @description Routes for votes
 */
import express from "express";
import Vote from "../models/Vote";

const router = express.Router();

// Create a new vote
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body using object destructuring
    const { voterId, targetId, voteType } = req.body;

    // Create a new vote in the database
    const newVote = await Vote.create({ voterId, targetId, voteType });

    // Return the newly created vote as JSON
    res.status(201).json(newVote);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Retrieve a single vote by its ID
router.get("/:voteId", async (req, res) => {
  try {
    // Find a vote by its ID in the database
    const vote = await Vote.findById(req.params.voteId);

    // Check if the vote exists
    if (!vote) {
      return res.status(404).json({ error: "Vote not found" });
    }
    // Return the found vote as JSON
    res.json(vote);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update an existing vote
router.put("/:voteId", async (req, res) => {
  try {
    const { voterId, targetId, voteType } = _req.body;
        
    // Find the vote by ID
    const vote = await Vote.findById(_req.params.voteId);
    
    // Check if the vote exists
    if (!vote) {
      return _res.status(404).json({ error: "Vote not found" });
    }
    
    // Update the vote
    vote.voterId = voterId;
    vote.targetId = targetId;
    vote.voteType = voteType;
    
    // Save the updated vote to the database
    const updatedVote = await vote.save();
    
    _res.json(updatedVote);
  } catch (error) {
    console.error(error);
    _res.status(500).json({ error: "Internal Server Error" });
  }

});

// Delete a vote by its ID
router.delete("/:voteId", async (req, res) => {
  try {
    // Find the vote by ID and delete it
    const deletedVote = await Vote.findByIdAndDelete(_req.params.voteId);
    
    // Check if the vote exists
    if (!deletedVote) {
      return _res.status(404).json({ error: "Vote not found" });
    }
    
    _res.json(deletedVote);
  } catch (error) {
    console.error(error);
    _res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all votes associated with a specific target
router.get("/target/:targetId", async (req, res) => {
  try {
    const vote = await Vote.findById(_req.params.voteId);
    if (!vote) {
      return _res.status(404).json({ error: "Vote not found" });
    }
    _res.json(vote);
  } catch (error) {
    console.error(error);
    _res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;

