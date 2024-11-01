import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ posts }) {
  return (
        <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full h-48">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: "cover" }}
                />
                </div>
                <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                    Read more
                </Link>
                </div>
            </div>
            ))}
        </div>
        </div>
  );
}

export async function getStaticProps() {
  const posts = [
    { 
      id: 1, 
      title: 'Boost Your Business with SEO: How Hudson Valley Digital Can Help', 
      excerpt: 'In today\'s digital landscape, having a strong online presence is crucial for businesses. Learn how SEO can transform your business and how Hudson Valley Digital can help you harness its power.',
      slug: 'boost-your-business-with-seo', 
      image: '/images/about.png'
    },
    { 
      id: 2, 
      title: 'The Importance of Responsive Web Design', 
      excerpt: 'With the increasing use of mobile devices, responsive web design is more important than ever. Discover why your business needs a responsive website and how it can improve user experience.',
      slug: 'importance-of-responsive-web-design', 
      image: '/images/about.png'
    },
    { 
      id: 3, 
      title: 'Cybersecurity Best Practices for Small Businesses', 
      excerpt: 'Small businesses are often targets for cyberattacks. Learn about essential cybersecurity practices that can protect your business from potential threats.',
      slug: 'cybersecurity-best-practices', 
      image: '/images/about.png'
    },
    { 
      id: 4, 
      title: 'Leveraging Social Media for Business Growth', 
      excerpt: 'Social media can be a powerful tool for business growth when used effectively. Explore strategies to enhance your social media presence and engage with your audience.',
      slug: 'leveraging-social-media', 
      image: '/images/about.png'
    }
  ];

  return {
    props: {
      posts,
    },
  };
}
