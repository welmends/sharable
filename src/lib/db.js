// lib/db.js
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  console.log("Init connectDB");
  if (cached.conn) {
    console.log("Cached!");
    return cached.conn;
  }
  
  console.log("Promise..");
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI)
      .then((mongoose) => {
        return mongoose;
      });
  }
  console.log("Await promise..");
  cached.conn = await cached.promise;
  console.log("Return connection");
  return cached.conn;
};

export default connectDB;
