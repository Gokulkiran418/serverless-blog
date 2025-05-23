'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleCreatePost = async (post) => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          id: posts.length + 1,
          date: new Date().toISOString().split('T')[0],
          slug: post.title.toLowerCase().replace(/\s+/g, '-'),
        }),
      });
      if (!res.ok) throw new Error('Failed to create post');
      const newPost = await res.json();
      setPosts([newPost, ...posts]);
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-text text-center mb-8 animate-fade-in">
          Welcome to Serverless Blog
        </h1>
        <div className="text-center mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors"
          >
            Create Post
          </button>
        </div>
        {showForm && (
          <PostForm
            onSubmit={handleCreatePost}
            onCancel={() => setShowForm(false)}
          />
        )}
        {loading ? (
          <p className="text-center text-secondary animate-pulse">Loading posts...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}