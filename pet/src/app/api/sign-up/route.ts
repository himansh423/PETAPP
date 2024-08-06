import User from "@/app/library/modals/User";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URL as string);
}

export async function POST(req: NextRequest, res: NextResponse) {
  await connectToDatabase();

  const { username, email, password } = await req.json();
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({ result: true, success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
