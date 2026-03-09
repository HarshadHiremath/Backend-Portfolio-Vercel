import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

// root
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to VibeLink Backend 🚀"
  });
});

// health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server Running"
  });
});

export default serverless(app);