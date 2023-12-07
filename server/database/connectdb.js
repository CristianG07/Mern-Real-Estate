import mongoose from 'mongoose';

try {
   await mongoose.connect(process.env.MONGODB_URI)
   console.log("😎😎 db conectada");
} catch (error) {
  console.log("😒😒" + error);
}