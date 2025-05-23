import Link from 'next/link';

export default function PostCard({ title, excerpt, date, author, slug }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-up">
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <p className="mt-2 text-secondary">{excerpt}</p>
      <p className="mt-2 text-sm text-secondary">By {author} on {date}</p>
      <Link
        href={`/posts/${slug}`}
        className="mt-4 inline-block text-primary hover:text-accent transition-colors"
      >
        Read More
      </Link>
    </div>
  );
}