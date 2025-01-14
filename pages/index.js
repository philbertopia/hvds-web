import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Hudson Valley Digital Solutions | Web Development & Software Engineering</title>
        <meta name="description" content="Premier web development and software engineering consultancy in the Hudson Valley. Crafting innovative digital solutions for businesses of all sizes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <BlogPreview posts={posts} />
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export async function getStaticProps() {
  // Fetch your blog posts here (from an API or local files)
  const posts = [
    { 
      id: 1, 
      title: 'Boost Your Business with SEO', 
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
