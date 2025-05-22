export default function PostCard({title = "Sample Post", excerpt = "This is a plain post excerpt. "}){
      return (
           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-up">
                  <h2 className="text-xl font-semibold text-text">{title}</h2>
                  <p className="mt-2 text-secondary">{excerpt}</p>
                  <a
                  href="#"
                  className="mt-4 inline-block text-primary hover:text-accent transition-colors"
                  >
                  Read More
                  </a>
            </div> 
      );
}