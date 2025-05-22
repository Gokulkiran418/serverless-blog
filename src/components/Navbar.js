import Link from 'next/link';

export default function Navbar() {
      return(
            <nav className="bg-background shadow-md">
                  <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                        Serverless Blog
                        </Link>
                        <div className="space-x-4">
                        <Link href="/" className="text-text hover:text-primary transition-colors">
                              Home
                        </Link>
                        </div>
                  </div>
             </nav>
      );
}