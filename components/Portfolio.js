import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Revamped a major retailer's online store, increasing conversions by 35%",
    image: "/images/portfolio/ecommerce.jpg",
    link: "/case-study/ecommerce-redesign"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Developed a comprehensive EHR system for a regional hospital network",
    image: "/images/portfolio/healthcare.jpg",
    link: "/case-study/healthcare-management"
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Created an innovative mobile banking solution for a startup, securing 100K+ users",
    image: "/images/portfolio/fintech.jpg",
    link: "/case-study/fintech-app"
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    description: "Built a real-time analytics platform with predictive capabilities for a SaaS company",
    image: "/images/portfolio/analytics.jpg",
    link: "/case-study/ai-analytics"
  },
  {
    id: 5,
    title: "Sustainable Energy Monitoring",
    description: "Engineered an IoT solution for monitoring and optimizing renewable energy systems",
    image: "/images/portfolio/energy.jpg",
    link: "/case-study/energy-monitoring"
  },
  {
    id: 6,
    title: "Educational Technology Platform",
    description: "Designed and developed an interactive learning management system for K-12 schools",
    image: "/images/portfolio/edtech.jpg",
    link: "/case-study/edtech-platform"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Portfolio</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore some of our most impactful projects. Each case study demonstrates our commitment to delivering innovative, scalable, and user-centric digital solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={project.link} key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}