import express from "express";
import serverless from "serverless-http";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is working 🚀"
  });
});

// POST route for Postman testing
app.post("/api/test", (req, res) => {

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and Email required"
    });
  }

  res.json({
    success: true,
    message: "Data received successfully",
    data: {
      name,
      email
    }
  });
});

// Export for Vercel
export default serverless(app);

// Run locally
if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}