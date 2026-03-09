import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to VibeLink Backend 🚀"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "Server Running"
  });
});

export const handler = serverless(app);