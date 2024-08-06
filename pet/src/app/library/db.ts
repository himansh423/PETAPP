import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI as string; // Ensure MONGO_URI is a string
    await mongoose.connect(mongoUri);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
};

export default connectToDatabase;
