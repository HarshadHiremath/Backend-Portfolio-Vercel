import express from "express";
import cors from "cors";
import Status from "../views/status.js";

const app = express();

app.use(cors());
app.use(express.json());

/* Root API */
app.get("/api", (req, res) => {
  res.send(Status);
});

/* Test GET API */
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "GET API working"
  });
});

/* Test POST API */
app.post("/api/test", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "POST API working",
    data: {
      name,
      email
    }
  });
});

/* Export for Vercel */
export default app;

/* Localhost run */
if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}