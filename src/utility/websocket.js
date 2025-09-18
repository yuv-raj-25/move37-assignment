import { Server } from "socket.io";
import prisma from "../models/prismaClient.js";

let io;

export const initWebSocket = (server) => {
  io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join_poll", (pollId) => {
      socket.join(`poll_${pollId}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};

export const broadcastPollUpdate = async (pollId) => {
  if (!io) return;
  const poll = await prisma.poll.findUnique({
    where: { id: pollId },
    include: { options: { include: { votes: true } } }
  });
  io.to(`poll_${pollId}`).emit("poll_update", poll);
};
