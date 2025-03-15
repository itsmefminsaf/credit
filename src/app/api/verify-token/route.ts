import { verifyToken } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token must be provided" },
        { status: 401 }
      );
    }
    if (verifyToken(token)) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
};
