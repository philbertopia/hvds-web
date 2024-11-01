import Link from 'next/link';
import Image from 'next/image';

export default function BlogPreview({ posts }) {
  const displayPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-black">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl text-purple-900 font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                    Read more
                  </Link>
                  <Link href="/blog" className="bg-black text-white py-2 px-4 rounded hover:bg-purple-900 transition duration-300">
                    View All Posts
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
