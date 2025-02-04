import { WebSocketServer } from "ws";
import { prisma } from "@repo/prisma";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (socket: WebSocket) => {
  await prisma.user.create({
    data: {
      name: Math.random().toString(),
      email: Math.random().toString(),
    },
  });
  console.log("Client connected");
  socket.send("Random user created!!")
});
