import express from "express";
import cors from "cors"; 
import protect from "./middleware/authMiddleware.js";
import homeDevLog from "./routes/home.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/home", protect, homeDevLog);





export default app;