import express from "express";
import cors from "cors"; 
import protect from "./middleware/authMiddleware.js";

import home from "./routes/home.js";
import project from "./routes/project.js";
import codeDev from "./routes/codeDev.js";
import about from "./routes/about.js";
import blog from "./routes/blog.js";
import contact from "./routes/contact.js";
import link from "./routes/link.js";
import adminRoutes from "./routes/admin-adminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/home", home);

app.use("/api/project", protect, project);

app.use("/api/codeDev", protect, codeDev);

app.use("/api/about", protect, about);

app.use("/api/blog", protect, blog);

app.use("/api/contact", protect, contact);

app.use("/api/link", protect, link);

app.use("/api/admin", adminRoutes);


export default app;