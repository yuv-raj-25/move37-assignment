import prisma from "../models/prismaClient.js";
// import { broadcastPollUpdate } from "../utility/websocket.js";

export const createPoll = async (req, res, next) => {
    try {
      const { creatorId, question, options } = req.body;
  
      // validate request body
      if (!creatorId || !question) {
        return res.status(400).json({ error: "creatorId and question are required" });
      }
  
      if (!Array.isArray(options) || options.length === 0) {
        return res.status(400).json({ error: "At least one option is required" });
      }
  
      const poll = await prisma.poll.create({
        data: {
          question,
          creatorId,
          isPublished: true,
          options: {
            create: options.map((text) => ({ text })),
          },
        },
        include: { options: true },
      });
  
      res.status(201).json(poll);
    } catch (err) {
      next(err);
    }
  };
export const getPolls = async (req, res, next) => {
  try {
    const polls = await prisma.poll.findMany({ include: { options: true } });
    res.json(polls);
  } catch (err) {
    next(err);
  }
};

export const getPollById = async (req, res, next) => {
  try {
    const poll = await prisma.poll.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { options: { include: { votes: true } } }
    });
    res.json(poll);
  } catch (err) {
    next(err);
  }
};
