export default function PostForm({ onSubmit, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const post = {
      title: formData.get('title'),
      excerpt: formData.get('excerpt'),
      author: formData.get('author'),
    };
    onSubmit(post);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full animate-slide-up">
        <h2 className="text-2xl font-bold text-text mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-secondary mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary mb-1" htmlFor="excerpt">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              className="w-full p-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-secondary mb-1" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="w-full p-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}