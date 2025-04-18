import Head from "next/head";
import HomePage from "@/app/(main)/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Site Title</title>
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
        <HomePage />
      </main>
    </div>
  );
}
