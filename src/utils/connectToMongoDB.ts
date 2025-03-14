import mongoose from "mongoose";

const connectToMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    return console.error("MongoDB connection string is missing!");
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to Database");
  } catch (err) {
    return console.error("Error connecting to MongoDB:", err);
  }
};

export default connectToMongoDB;
