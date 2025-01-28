import { connect } from "@/dbConfig/dbConfig";
import blogModel from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, content, author } = reqBody;

    // Validate input
    if (!title || !content || !author) {
      console.error("Missing fields in request body");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newBlog = await blogModel.create({ title, content, author });

    // Send success response
    return NextResponse.json(
      { message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" });
  }
}

export async function GET() {
  try {
    const blogs = await blogModel.find({});
    return NextResponse.json(
      { success: true, data: blogs, status: 200 },
      { status: 200 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" });
  }
}
