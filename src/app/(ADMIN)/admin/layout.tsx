"use client";
import { useEffect, useState } from "react";

export default function DashBoardLayout() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create blog");
      }
      setForm({ title: "", content: "", author: "" });
      fetchBlogs();
    } catch (error) {
      console.log({ error });
    }
  };

  console.log({ blogs });

  // const handleDelete = async (id: string) => {
  //   await fetch(`/api/blogs/${id}`, { method: "DELETE" });
  //   fetchBlogs();
  // };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <button type="submit">Add Blog</button>
      </form>
      {/* <ul>
        {blogs?.data?.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>By {blog.author}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
