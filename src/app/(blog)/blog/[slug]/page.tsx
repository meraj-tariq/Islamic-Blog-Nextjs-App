import React from "react";
import styles from "@/styles/missionStyle.module.css";

interface SubSubCategory {
  subHeading?: string;
  subDescription?: string;
  subCategories?: SubSubCategory[];
}

interface SubCategory {
  subHeading: string;
  subDescription: string;
  subCategories: SubSubCategory[];
}

interface ContentSection {
  heading: string;
  description: string;
  subcategories: SubCategory[];
}
interface Blog {
  title: string;
  slug: string;
  author: string;
  views: number;
  heading: string;
  content: ContentSection[];
  subcategories: SubCategory[];
}

async function fetchBlog(slug: string): Promise<Blog | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    `http://localhost:${process.env.PORT || 3000}`;

  const apiUrl = `${baseUrl}/api/blogs/${slug}`;
  console.log({ apiUrl });

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>; // Params are expected to be a Promise
}

const BlogDetailPage = async ({ params }: PageProps) => {
  // Wait for the params to resolve and access the slug
  const resolvedParams = await params; // Await the promise to resolve
  const { slug } = resolvedParams;

  // Fetch the blog data using the fetchBlog function
  const blog = await fetchBlog(slug);

  if (!blog) {
    return <div>Blog not Found!</div>; // If no blog is found
  }

  return (
    <div className="max-w-8xl mx-auto py-10 px-5">
      <div className="mx-auto py-10 px-5">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-white-600 text-white p-6 items-center">
            <h1 className={`text-4xl font-bold ${styles.textStyle}`}>
              {blog.title}
            </h1>
            <p className="mt-2 text-xl">
              Category:{" "}
              <span className="font-semibold textStyle">Technology</span>
            </p>
          </div>

          <div className="p-6 space-y-6">
            {blog.content.map((item: ContentSection, ind: number) => (
              <div className="space-y-4" key={ind}>
                <h2 className="text-3xl font-semibold">{item?.heading}</h2>
                <p className="text-lg text-gray-700"></p>

                {item?.subcategories.map((value, key) => (
                  <div
                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                    key={key}
                  >
                    <h3 className="text-xl font-semibold">
                      {value.subHeading}
                    </h3>
                    <p className="mt-2 text-gray-700">{value.subDescription}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
