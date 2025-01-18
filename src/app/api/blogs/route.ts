// import { connectToDatabase } from "@/lib/mongodb";
// import Blog from "@/models/Blog";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("*******s*s*s**s*s*s", req.method);

//   try {
//     await connectToDatabase();
//     if (req.method === "POST") {
//       const { title, content, author } = req.body;

//       // Validate input
//       if (!title || !content || !author) {
//         console.error("Missing fields in request body");
//         return res.status(400).json({ error: "Missing required fields" });
//       }
//       // const newBlog = await Blog.create({ title, content, author });
//       const newBlog = { id: Date.now(), title, content, author };
//       // Simulate saving to database
//       console.log("Blog created:", newBlog);

//       // Send success response
//       return res
//         .status(201)
//         .json({ message: "Blog created successfully", data: newBlog });
//     }

//     if (req.method === "GET") {
//       // const blogs = await Blog.find({});

//       return res.status(200).json({ success: true, message: 'hellow rolw' });
//     }

//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   } catch (error) {
//     console.error("API Error:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   try {
// //     await connectToDatabase();

// //     if (req.method === "GET") {
// //       const blogs = await Blog.find({});
// //       return res.status(200).json({ success: true, data: blogs });
// //     }
// //     console.log("Request Body:", req.body);
// //     console.log("Request Headers:", req.headers);
// //     if (req.method === "POST") {
// //       const { title, content, author } = req.body;
// //       console.log("BODY", req.body);

// //       const newBlog = await Blog.create({ title, content, author });
// //       return res.status(201).json({ success: true, data: newBlog });
// //     }

// //     res.setHeader("Allow", ["GET", "POST"]);
// //     res.status(405).end(`Method ${req.method} Not Allowed`);
// //   } catch (error) {
// //     console.error("API Error:", error);
// //     return res
// //       .status(500)
// //       .json({ success: false, error: "Internal Server Error" });
// //   }
// // }

// export const dynamic = "force-static";

// export async function GET() {

//   return Response.json({ mesg: 'asdf' });
// }

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
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const blogs = await blogModel.find({});
    return NextResponse.json(
      { success: true, data: blogs, status: 200 },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
