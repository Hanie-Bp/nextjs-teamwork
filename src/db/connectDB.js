import { connect, connection, disconnect } from "mongoose";

const connectDB = async () => {
  if (connection.readyState === 1) return;
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

const disconnectDB = async () => {
  try {
    await disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error("MongoDB disconnecting error:", error);
  }
};


export { connectDB, disconnectDB };