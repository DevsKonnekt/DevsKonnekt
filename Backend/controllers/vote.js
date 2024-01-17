import Vote from "../models/votes";


// create a new vote
export const createVote = async (req, res) => {
  try {
    const {voteId, targetId, VoteType } = req.body;
    const newVote = await Vote.create({ voteId, targetId, VoteType });
    res.status(201).json(newVote);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
          
  }
};

// Retrueve a single vote by its ID
export const getVoteById = async (req, res) => {
  try {
    const vote = await Vote.findById(req.params.voteId);
    if (!vote) {
      return res.status(404).json({error: "Vote not found"});           
    }
    res.json(vote);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
  }
};

// Update an existing vote
export const updateVoteById = async (req, res) => {
  try {
    const { voterId, targetId, voteType } = req.body;
    const vote = await Vote.findById(req.params.voteId);
    if (!vote) {
      return res.status(404).json({ error: "Vote not found" });
    }
    vote.voterId = voterId;
    vote.targetId = targetId;
    vote.voteType = voteType;
    const updatedVote = await vote.save();
    res.json(updatedVote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
  
// Delete a vote by its ID
export const deleteVoteById = async (req, res) => {
  try {
    const deletedVote = await Vote.findByIdAndDelete(req.params.voteId);
    if (!deletedVote) {
      return res.status(404).json({ error: "Vote not found" });
    }
    res.json(deletedVote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
  
// Retrieve all votes associated with a specific target
export const getVotesByTargetId = async (req, res) => {
  try {
    const votes = await Vote.find({ targetId: req.params.targetId });
    if (!votes.length) {
      return res.status(404).json({ error: "Votes not found for the target" });
    }
    res.json(votes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
        