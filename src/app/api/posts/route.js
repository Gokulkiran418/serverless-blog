export async function GET(){
      const posts = [
      {
            id: 1,
            title: "First Blog Post",
            excerpt: "This is the excerpt for the first blog post, showcasing our serverless platform.",
            date: "2025-05-23",
    },
    {
            id: 2,
            title: "Exploring Serverless",
            excerpt: "A dive into the benefits of serverless architecture for modern web apps.",
            date: "2025-05-22",
    },
];
      return new Response(JSON.stringify(posts), {
            status: 200, headers: { 'Content-Type':'application/json'},
      });
}