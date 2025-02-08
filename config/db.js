import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.CONNECT)
    .then(() => console.log("DB Connected"));
};
