import express from "express";
import { prisma } from "@repo/prisma";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;

  const user = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  res.json({
    message: "User created",
    userId: user.id,
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
