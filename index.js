require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Root route to check MongoDB connection status
app.get("/", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send("MongoDB connection successful");
  } else {
    res.status(500).send("MongoDB connection failed");
  }
});

// Import routes
app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
