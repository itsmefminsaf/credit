import User from "@/models/userModel";
import connectToMongoDB from "@/utils/connectToMongoDB";
import { generateToken } from "@/utils/jwt";
import bcrypt, { genSalt } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  try {
    const { uname, pwd, confirmPwd } = await req.json();
    if (!uname || !pwd || !confirmPwd) {
      return NextResponse.json(
        {
          success: false,
          error: "User name, password and confirm password are mandatory",
        },
        { status: 400 }
      );
    }
    if (pwd !== confirmPwd) {
      return NextResponse.json(
        { success: false, error: "Password and confirm password must be same" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ uname });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "User name already exist" },
        { status: 401 }
      );
    }

    const hashedPwd = await bcrypt.hash(pwd, await genSalt(10));

    await User.create({ uname, pwd: hashedPwd });
    const token = generateToken({ uname, pwd });
    return NextResponse.json({ success: true, token });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
};
