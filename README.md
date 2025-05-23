# Serverless Blog Platform
A serverless blog platform built with Next.js, Tailwind CSS, and Vercel Serverless Functions.

## Tech Stack
- Front-end: Next.js (14.x), Tailwind CSS (3.x)
- Font: Inter
- Backend: Vercel Serverless Functions (Node.js)
- Deployment: Vercel (files prepared)

## Features
- Responsive homepage with blog title and dynamic post list.
- Elegant navbar with logo and "Home" link.
- Post cards with title, excerpt, author, date, and "Read More" link; smooth pop-up on hover.
- Post creation via modal form (title, excerpt, author), stored in-memory.
- Light color palette (soft white `#F9FAFB`, teal `#14B8A6`, text `#007F73`, black `#000000`, coral `#F472B6`).
- Animations: Fade-in title, slide-up post cards/form, hover effects (scale, shadow, color change).
- Responsive design for mobile, tablet, and desktop.

## Setup
1. Install: `npm install`
2. Run: `npm run dev`
3. Build: `npm run build`
4. Test API: `curl http://localhost:3000/api/posts`