import { Schema,  Document, } from "mongoose";
import * as mongoose from "mongoose";

export interface BlogDocument extends Document {
  title: string;
  content: string;
  author: string;
}

const BlogSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
); 

// const blogModel = mongoose?.models.Blog || model <BlogDocument>("Blogs", BlogSchema);
const blogModel = mongoose?.models.Blog || mongoose.model("Blog", BlogSchema);
export default blogModel;
