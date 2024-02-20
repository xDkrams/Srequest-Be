require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Check MongoDB connection status
let mongoDBStatus = "Connecting to MongoDB...";
db.once("open", () => {
  console.log("✅ Connected to MongoDB");
  mongoDBStatus = "MongoDB connection successful";
});
db.once("close", () => {
  console.log("❌ Disconnected from MongoDB");
  mongoDBStatus = "MongoDB connection failed";
});

// Root route to check MongoDB connection status
app.get("/", (req, res) => {
  res.send(mongoDBStatus);
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
