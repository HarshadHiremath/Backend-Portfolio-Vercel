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

// When running locally (e.g., `node api/index.js`), start an express server.
if (process.env.VERCEL !== "1") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

export default serverless(app);