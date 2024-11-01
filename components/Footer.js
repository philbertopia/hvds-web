import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">HVDS</h3>
            <h3 className="text-xl mb-4">Hudson Valley Digital Solutions</h3>
            <p className="text-purple-400">
              Innovative web development and software engineering solutions for businesses in the Hudson Valley and beyond.
            </p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-purple-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/#about" className="text-purple-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/#portfolio" className="text-purple-400 hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link href="/#contact" className="text-purple-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-purple-400">
              <li>123 Tech Lane, Hudson Valley, NY 12345</li>
              <li>Phone: (845) 555-0123</li>
              <li>Email: info@hudsonvalleydigital.com</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/hvdigital" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="https://linkedin.com/company/hvdigital" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="https://github.com/hvdigital" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-400">
          <p>&copy; {new Date().getFullYear()} Hudson Valley Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}