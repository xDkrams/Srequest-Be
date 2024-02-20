const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import MongoDB connection function
const { connectToMongoDB } = require("./mongoDb");

// Start the Express server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // Connect to MongoDB
  await connectToMongoDB();
});

// Define routes
app.get("/", async (req, res) => {
  const connectionSuccessful = await connectToMongoDB();
  if (connectionSuccessful) {
    res.send("Hello from Express! MongoDB connection successful");
  } else {
    res.send("Hello from Express! MongoDB connection failed");
  }
});
module.exports = app;
