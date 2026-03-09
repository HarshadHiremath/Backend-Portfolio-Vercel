import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

// root
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to VibeLink Backend 🚀"
  });
});

// health check
app.get("/health", (req, res) => {
  res.json({
    status: "Server Running"
  });
});

export default serverless(app);