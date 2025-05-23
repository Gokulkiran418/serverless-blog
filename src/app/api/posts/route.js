export async function GET() {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      excerpt: "This is the excerpt for the first blog post, showcasing our serverless platform.",
      date: "2025-05-23",
      author: "John Doe",
      slug: "first-blog-post",
    },
    {
      id: 2,
      title: "Exploring Serverless",
      excerpt: "A dive into the benefits of serverless architecture for modern web apps.",
      date: "2025-05-22",
      author: "Jane Smith",
      slug: "exploring-serverless",
    },
    {
      id: 3,
      title: "Building with Next.js",
      excerpt: "Tips and tricks for creating fast, scalable apps with Next.js and Tailwind.",
      date: "2025-05-21",
      author: "Alex Lee",
      slug: "building-with-nextjs",
    },
    {
      id: 4,
      title: "The Future of Web Dev",
      excerpt: "How serverless and AI are shaping the next generation of web development.",
      date: "2025-05-20",
      author: "Sam Patel",
      slug: "future-of-web-dev",
    },
  ];

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}