import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/up.png"
                alt="Our team at work"
                width={500}
                height={375}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Hudson Valley Digital Solutions</h2>
              <p className="text-gray-600 mb-6">
                At Hudson Valley Digital Solutions, we&apos;re more than just a web development and digital marketing agency. We&apos;re a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2024, our agency has been at the forefront of digital transformation in the Hudson Valley region. We combine our deep technical expertise with a keen understanding of business needs to deliver solutions that drive growth and efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Over 10 years of combined experience</li>
                <li>Committed to using cutting-edge technologies</li>
                <li>Focused on delivering measurable results</li>
              </ul>
              <p className="text-gray-600 mb-8">
                Our mission is to empower businesses in the Hudson Valley and beyond with technology that matters. Whether you&apos;re a startup looking to make your mark or an established company aiming to stay ahead, we&apos;re here to guide you through the digital landscape.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-wrap gap-4 mb-20">
                <Link
                  href="#contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                >
                  <span>Get in Touch</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  href="#services"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            
            
            
          </div>
          <p className="text-gray-600 text-center mb-6 font-bold">We support local businesses!</p>

              <p className="text-gray-600 text-center mb-16 font-bold">100% Satisfaction Guaranteed!</p>
          <div className="flex justify-center items-center w-full relative">
              <div className="absolute z-0 flex justify-center items-center gap-8 w-full">
                  <Image
                      src="/images/splash2.png"
                      alt="Decorative splash"
                      width={400}
                      height={400}
                      className="object-contain animate-float-slow -mr-16 mt-48"
                  />
                  
                  <Image
                      src="/images/splash.png"
                      alt="Decorative splash"
                      width={300}
                      height={300}
                      className="object-contain animate-float-fast -ml-16 mt-96"
                  />
              </div>
              
              <div className="relative z-10">
                  <Image
                      src="/images/blob.png"
                      alt="100% Satisfaction Guaranteed"
                      width={300}
                      height={250}
                      className="object-contain animate-float-medium"
                  />
              </div>
          </div>
          
        </div>

        {/* Add this wave divider at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 
                 C150,120 350,0 500,80 
                 C650,160 850,40 1200,120 
                 L1200,120 L0,120 Z"
              className="fill-gray-100"
            ></path>
          </svg>
        </div>
      </section>
    </>
  )
}