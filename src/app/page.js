import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-text text-center mb-8 animate-fade-in">
          Welcome to Serverless Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder posts */}
          <PostCard />
          <PostCard title="Another Post" excerpt="Another sample excerpt for testing." />
        </div>
      </main>
    </div>
  );
}