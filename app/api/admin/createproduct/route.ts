import dbConnect from "@/config/connectdb";
import ProductModel from "@/config/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Product = await ProductModel.find();
    return NextResponse.json(
      { message: "Connected", Product },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
