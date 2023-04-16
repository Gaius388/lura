import mongoose from "mongoose";

const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  throw new Error("Invalid environment variable: MONGO_URL ");
}

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
