import { useRouter } from 'next/router';
import Image from 'next/image';
import BlogPreview from '@/components/BlogPreview';

export default function BlogPost({ post, allPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="relative w-full h-64 mb-8">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      
      <div className="bg-gray-100 w-full">
        <div className="container mx-auto px-6 py-16">
          <BlogPreview posts={allPosts.filter(p => p.slug !== post.slug)} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = [
    { slug: 'boost-your-business-with-seo' },
    { slug: 'importance-of-responsive-web-design' },
    { slug: 'cybersecurity-best-practices' },
    { slug: 'leveraging-social-media' },
  ];

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const posts = {
    'boost-your-business-with-seo': {
      title: 'Boost Your Business with SEO: How Hudson Valley Digital Can Help',
      content: `
        <p>In today's digital landscape, having a strong online presence is crucial for businesses of all sizes. Search Engine Optimization (SEO) is a powerful tool that can help your business stand out in the crowded online marketplace. At Hudson Valley Digital, we specialize in helping businesses like yours harness the power of SEO to drive growth and success.</p>
        
        <h2>Why SEO Matters</h2>
        <p>SEO is the practice of optimizing your website to rank higher in search engine results pages (SERPs). When your website ranks higher, it's more likely to be seen by potential customers who are actively searching for products or services like yours. This increased visibility can lead to more traffic, more leads, and ultimately, more sales.</p>
        
        <h2>How Hudson Valley Digital Can Help</h2>
        <p>Our team of SEO experts at Hudson Valley Digital uses a comprehensive approach to improve your website's search engine rankings:</p>
        <ul>
          <li><strong>Keyword Research:</strong> We identify the most relevant and valuable keywords for your business.</li>
          <li><strong>On-Page Optimization:</strong> We optimize your website's content, structure, and HTML elements to improve its relevance and authority.</li>
          <li><strong>Technical SEO:</strong> We ensure your website is fast, mobile-friendly, and easy for search engines to crawl and index.</li>
          <li><strong>Content Strategy:</strong> We develop a content strategy that attracts and engages your target audience while improving your search rankings.</li>
          <li><strong>Link Building:</strong> We implement ethical link building strategies to increase your website's authority and credibility.</li>
        </ul>
        
        <p>By partnering with Hudson Valley Digital for your SEO needs, you're investing in the long-term success of your business. Our tailored SEO strategies are designed to deliver sustainable results, helping you attract more customers and grow your business in the digital age.</p>
        
        <p>Ready to boost your business with SEO? Contact Hudson Valley Digital today to learn how we can help you achieve your online goals.</p>
      `,
      image: '/images/about.png',
    },
    'importance-of-responsive-web-design': {
      title: 'The Importance of Responsive Web Design',
      content: `
        <p>In an era where mobile devices are increasingly becoming the primary means of accessing the internet, responsive web design is no longer a luxury—it's a necessity. At Hudson Valley Digital, we understand the critical role that responsive design plays in creating a positive user experience and driving business success.</p>
        
        <h2>What is Responsive Web Design?</h2>
        <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that your website looks good and functions properly whether it's being viewed on a desktop computer, a tablet, or a smartphone.</p>
        
        <h2>Why is Responsive Design Important?</h2>
        <ul>
          <li><strong>Improved User Experience:</strong> A responsive website provides a seamless experience across all devices, leading to higher user satisfaction and engagement.</li>
          <li><strong>Better SEO Performance:</strong> Google favors mobile-friendly websites in its search rankings, making responsive design crucial for SEO.</li>
          <li><strong>Increased Conversion Rates:</strong> A well-designed responsive site can lead to higher conversion rates by making it easier for users to navigate and take action on any device.</li>
          <li><strong>Cost-Effective:</strong> Instead of maintaining separate mobile and desktop sites, you only need to manage one responsive site, saving time and resources.</li>
          <li><strong>Future-Proof:</strong> As new devices with different screen sizes enter the market, a responsive design ensures your site will still look great.</li>
        </ul>
        
        <h2>How Hudson Valley Digital Can Help</h2>
        <p>Our team of expert designers and developers at Hudson Valley Digital specializes in creating beautiful, functional responsive websites. We take a user-centered approach, ensuring that your website not only looks great on all devices but also provides an intuitive and engaging experience for your visitors.</p>
        
        <p>Whether you're looking to update an existing site or create a new one from scratch, we can help you implement responsive design principles that will set your business up for success in the mobile-first world.</p>
        
        <p>Ready to make your website responsive? Contact Hudson Valley Digital today to learn how we can help you create a website that looks great and performs well on any device.</p>
      `,
      image: '/images/about.png',
    },
    'cybersecurity-best-practices': {
      title: 'Cybersecurity Best Practices for Small Businesses',
      content: `
        <p>In today's digital age, cybersecurity is a critical concern for businesses of all sizes. Small businesses, in particular, are often targeted by cybercriminals because they may lack the robust security measures of larger corporations. At Hudson Valley Digital, we're committed to helping small businesses protect themselves from cyber threats.</p>
        
        <h2>Why Cybersecurity Matters for Small Businesses</h2>
        <p>Small businesses often believe they're not at risk because they're "too small to be a target." However, cybercriminals often see small businesses as easy targets precisely because they may not have strong security measures in place. A cyberattack can have devastating consequences, including financial loss, damage to reputation, and loss of customer trust.</p>
        
        <h2>Essential Cybersecurity Best Practices</h2>
        <ol>
          <li><strong>Use Strong, Unique Passwords:</strong> Implement a password policy that requires strong, complex passwords. Consider using a password manager to help employees maintain unique passwords for each account.</li>
          <li><strong>Keep Software Updated:</strong> Regularly update all software, including operating systems, applications, and antivirus programs. These updates often include critical security patches.</li>
          <li><strong>Implement Multi-Factor Authentication (MFA):</strong> MFA adds an extra layer of security by requiring two or more verification methods to access accounts.</li>
          <li><strong>Educate Employees:</strong> Train your staff on cybersecurity best practices and how to recognize potential threats like phishing emails.</li>
          <li><strong>Backup Data Regularly:</strong> Maintain regular backups of all important data. Store backups securely and test them periodically to ensure they can be restored if needed.</li>
          <li><strong>Use a Firewall and Antivirus Software:</strong> Install and maintain a firewall to create a barrier between your data and cybercriminals. Use antivirus software and keep it updated.</li>
          <li><strong>Secure Your Wi-Fi Network:</strong> Ensure your Wi-Fi network is secure, encrypted, and hidden. Password protect access to the router.</li>
          <li><strong>Implement Access Controls:</strong> Limit employee access to data and information, and limit authority to install software.</li>
          <li><strong>Have a Response Plan:</strong> Develop a plan for what to do if your business experiences a data breach or cyberattack.</li>
        </ol>
        
        <h2>How Hudson Valley Digital Can Help</h2>
        <p>At Hudson Valley Digital, we offer comprehensive cybersecurity services tailored to the needs of small businesses. Our team can help you assess your current security posture, implement best practices, and develop a robust cybersecurity strategy to protect your business from evolving threats.</p>
        
        <p>Don't wait until it's too late. Contact Hudson Valley Digital today to learn how we can help secure your business against cyber threats.</p>
      `,
      image: '/images/about.png',
    },
    'leveraging-social-media': {
      title: 'Leveraging Social Media for Business Growth',
      content: `
        <p>In the digital age, social media has become an indispensable tool for businesses looking to grow their brand, engage with customers, and drive sales. At Hudson Valley Digital, we understand the power of social media and how to harness it effectively for business growth.</p>
        
        <h2>The Importance of Social Media for Businesses</h2>
        <p>Social media platforms offer unprecedented opportunities to connect with your target audience, build brand awareness, and foster customer loyalty. With billions of active users across various platforms, social media provides a vast potential customer base and a direct line of communication with your audience.</p>
        
        <h2>Strategies for Leveraging Social Media</h2>
        <ol>
          <li><strong>Choose the Right Platforms:</strong> Not all social media platforms are created equal. Identify where your target audience spends their time and focus your efforts there.</li>
          <li><strong>Develop a Content Strategy:</strong> Create a mix of engaging, valuable content that resonates with your audience. This could include informative posts, behind-the-scenes glimpses, user-generated content, and promotional material.</li>
          <li><strong>Engage with Your Audience:</strong> Social media is a two-way street. Respond to comments, messages, and mentions promptly. Encourage discussions and build relationships with your followers.</li>
          <li><strong>Use Visual Content:</strong> Images and videos tend to perform well on social media. Incorporate high-quality visual content into your strategy.</li>
          <li><strong>Leverage Influencer Partnerships:</strong> Collaborating with influencers in your industry can help you reach new audiences and build credibility.</li>
          <li><strong>Utilize Paid Advertising:</strong> Social media platforms offer sophisticated targeting options for paid ads. Use these to reach specific demographics or to retarget website visitors.</li>
          <li><strong>Monitor and Analyze Performance:</strong> Use analytics tools to track the performance of your social media efforts. Use these insights to refine your strategy over time.</li>
          <li><strong>Stay Consistent:</strong> Maintain a consistent posting schedule and brand voice across your social media presence.</li>
          <li><strong>Integrate Social Media with Your Overall Marketing Strategy:</strong> Ensure your social media efforts align with and support your broader marketing goals.</li>
        </ol>
        
        <h2>How Hudson Valley Digital Can Help</h2>
        <p>Our team at Hudson Valley Digital specializes in creating and implementing effective social media strategies for businesses. We can help you:</p>
        <ul>
          <li>Develop a tailored social media strategy aligned with your business goals</li>
          <li>Create engaging content that resonates with your target audience</li>
          <li>Manage your social media accounts and engage with your followers</li>
          <li>Set up and manage paid social media advertising campaigns</li>
          <li>Monitor and analyze your social media performance, providing regular reports and insights</li>
        </ul>
        
        <p>Ready to take your social media presence to the next level? Contact Hudson Valley Digital today to learn how we can help you leverage social media for business growth.</p>
      `,
      image: '/images/about.png',
    },
  };

  const post = posts[params.slug];

  if (!post) {
    return {
      notFound: true,
    }
  }

  const allPosts = Object.entries(posts).map(([slug, data]) => ({
    ...data,
    slug,
  }));

  return {
    props: {
      post,
      allPosts,
    },
  };
}
