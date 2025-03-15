import User from "@/models/userModel";
import connectToMongoDB from "@/utils/connectToMongoDB";
import { generateToken } from "@/utils/jwt";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  try {
    const { uname, pwd } = await req.json();
    if (!uname || !pwd) {
      return NextResponse.json(
        { success: false, error: "User name and password are mandatory" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ uname });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    if (await bcrypt.compare(pwd, user.pwd)) {
      const token = generateToken({ uname, pwd });
      if (!token) {
        return NextResponse.json(
          {
            success: false,
            error: "Something went wrong",
          },
          { status: 500 }
        );
      }
      return NextResponse.json({ success: true, token }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: "Password is incorrect" },
        { status: 401 }
      );
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
};
