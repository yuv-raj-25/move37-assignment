// src/controllers/voteController.js
import prisma from "../models/prismaClient.js";

export const castVote = async (req, res, next) => {
  try {
    const { userId, optionId } = req.body;

    if (!userId || !optionId) {
      return res.status(400).json({ error: "userId and optionId are required" });
    }

    const vote = await prisma.vote.create({
      data: {
        user: { connect: { id: userId } },
        option: { connect: { id: optionId } },
      },
    });

    res.status(201).json(vote);
  } catch (err) {
    next(err);
  }
};
