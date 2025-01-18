import Blog from '@/models/Blog';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/dbConfig/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  const { id } = req.query;

  if (req.method === 'GET') {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    return res.status(200).json(blog);
  }

  if (req.method === 'PUT') {
    const { title, content, author } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, author }, { new: true });
    if (!updatedBlog) return res.status(404).json({ error: 'Blog not found' });
    return res.status(200).json(updatedBlog);
  }

  if (req.method === 'DELETE') {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) return res.status(404).json({ error: 'Blog not found' });
    return res.status(200).json({ message: 'Blog deleted successfully' });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
