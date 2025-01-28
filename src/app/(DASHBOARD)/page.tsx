import Head from "next/head";
import HomeLayout from "@/app/(DASHBOARD)/layout";

export default function DashBoard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="A brief description of your website."
        />
        <meta
          name="keywords"
          content="nextjs, tailwindcss, SEO, web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
      <HomeLayout/>
      </main>
    </div>
  );
}
