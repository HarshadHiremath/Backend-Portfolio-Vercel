import express from "express";
import cors from "cors"; 
import protect from "./middleware/authMiddleware.js";

import home from "./routes/home.js";
import project from "./routes/project.js";
import codeDev from "./routes/codeDev.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/home", protect, home);

app.use("/api/project", protect, project);

app.use("/api/codeDev", protect, codeDev);



export default app;