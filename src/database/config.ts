import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    const uri = process.env.MONGO_URI!;
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error del servidor");
  }
};

export default databaseConnection;
