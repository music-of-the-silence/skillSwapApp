import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import skillRoute from "./route/skill.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;

const URI = process.env.MongoDB_URI;
// Connect to MongoDB Server
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB Server");
} catch (error) {
  console.log("Error connecting to MongoDB Server");
}

// Defining Routes

app.use(express.json());
app.use("/skills", skillRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
