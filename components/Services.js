import { useChatContext } from '../context/ChatContext';
import Link from 'next/link';

export default function Services() {
  const { askQuestion } = useChatContext();

  const services = [
    { 
      title: 'Web Development', 
      description: 'Our web development services focus on creating custom websites and web applications tailored to meet your specific business needs. Whether you need a simple landing page or a complex e-commerce platform, we leverage the latest technologies and best practices to deliver fast, responsive, and user-friendly web solutions that drive engagement and conversions.',
      question: "Can you tell me more about your web development services and what technologies you use?",
      ctaText: "Start Your Project",
      ctaLink: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: 'UI/UX Design', 
      description: 'We specialize in crafting intuitive and engaging user interfaces that enhance the overall user experience. Our UI/UX design process involves thorough research and user testing to ensure that your product not only looks great but is also easy to navigate. We aim to create a seamless interaction that keeps users coming back, ultimately boosting your brand\'s reputation and customer loyalty.',
      question: "What's your approach to UI/UX design and how do you ensure good user experience?",
      ctaText: "Get a Design Quote",
      ctaLink: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    { 
      title: 'Mobile App Development', 
      description: 'We create native and cross-platform mobile applications for both iOS and Android devices, designed to provide users with seamless experiences across all platforms. Our mobile app development process includes everything from concept and design to testing and launch, ensuring that your app is not only functional but also engaging and user-friendly, tailored to meet the needs of your target audience.',
      question: "What platforms do you develop mobile apps for and what's your development process?",
      ctaText: "Discuss Your App",
      ctaLink: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: 'Cyber Security', 
      description: 'In today\'s digital landscape, protecting your business from cyber threats is crucial. Our cybersecurity services offer comprehensive solutions that safeguard your digital assets, including network security, application security, and data protection. We conduct thorough assessments and implement robust security measures to minimize vulnerabilities and ensure compliance with industry standards, giving you peace of mind.',
      question: "What cybersecurity measures do you implement to protect digital assets?",
      ctaText: "Security Assessment",
      ctaLink: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    { 
      title: 'Blockchain Development', 
      description: 'We provide innovative blockchain development services that facilitate secure and transparent transactions across various industries. Our team has expertise in creating decentralized applications (dApps), smart contracts, and blockchain integration solutions. By harnessing the power of blockchain technology, we help businesses streamline processes, enhance security, and build trust with their customers.',
      question: "What types of blockchain solutions do you offer and which platforms do you work with?",
      ctaText: "Explore Solutions",
      ctaLink: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
  ];
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-100 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl text-purple-900 font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mt-auto space-y-3">
                
                
                <div className="flex justify-between items-center">
                  <Link 
                    href={service.ctaLink}
                    className="block w-50 bg-purple-600 text-white py-2 px-4 rounded-lg text-center hover:bg-purple-700 transition-colors"
                  >
                    {service.ctaText}
                  </Link>
                  <button 
                    onClick={() => askQuestion(service.question)}
                    className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2 text-sm"
                    title="Ask about this service"
                  >
                    {service.icon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}