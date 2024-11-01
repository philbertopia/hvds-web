import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close menu after clicking
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId)
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold hover:text-gray-300">HVDS</a>
        </Link>

        {/* Hamburger button */}
        <button 
          className="lg:hidden z-50 transition-transform duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Navigation menu */}
        <nav className={`${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
        } lg:block fixed lg:relative top-0 right-0 h-full lg:h-auto w-full lg:w-auto bg-black lg:bg-transparent pt-20 lg:pt-0 p-4 lg:p-0 z-40 transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:text-gray-300 block" onClick={() => setIsMenuOpen(false)}>Home</a>
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 block" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 block" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-300 block" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a>
            </li>
            <li>
              <Link href="/blog" legacyBehavior>
                <a className="hover:text-gray-300 block" onClick={() => setIsMenuOpen(false)}>Blog</a>
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 block" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
