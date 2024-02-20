require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function connectToMongoDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    // Additional setup or initialization can be done here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectToMongoDB };
