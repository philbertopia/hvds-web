import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    quote: "Hudson Valley Digital Solutions transformed our online presence. Their expertise in web development and UX design resulted in a 40% increase in our conversion rates.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: 2,
    quote: "Working with this team was a game-changer for our software project. Their innovative approach and technical skills brought our vision to life.",
    author: "Michael Chen",
    position: "CTO, InnovateSoft",
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 3,
    quote: "The mobile app developed by Hudson Valley Digital Solutions has received overwhelmingly positive feedback from our users. Their attention to detail and user-centric design approach is commendable.",
    author: "Emily Rodriguez",
    position: "Product Manager, MobileFirst",
    image: "/images/testimonials/emily.jpg"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <blockquote className="text-xl text-gray-600 text-center mb-4">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <p className="text-gray-800 font-semibold text-center">
              {testimonials[currentTestimonial].author}
            </p>
            <p className="text-gray-600 text-center">
              {testimonials[currentTestimonial].position}
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={prevTestimonial}
              className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              &#8592; {/* Left arrow */}
            </button>
            <button
              onClick={nextTestimonial}
              className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              &#8594; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}