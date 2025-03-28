
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      content: "Their attention to detail and problem-solving skills are outstanding. They brought fresh ideas to the table and executed them perfectly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Creative Director",
      company: "Design Studio",
      content: "The level of creativity and technical expertise they brought to our project was impressive. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}