import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API working on Vercel 🚀"
  });
});

// Post test
app.post("/api", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    name,
    email
  });
});

// ✅ IMPORTANT FOR VERCEL
export default app;