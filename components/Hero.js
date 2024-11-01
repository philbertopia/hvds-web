import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-8xl md:text-8xl font-bold text-white mb-4">
          HVDS
        </h1>
        <h1 className="text-4xl md:text-6xl text-white mb-4">
          Hudson Valley Digital Solutions
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Empowering businesses with cutting-edge web development and digital solutions.
        </p>
        <Link href="#contact" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-purple-900 transition duration-300">
          Get Started
        </Link>
      </div>
    </section>
  )
}