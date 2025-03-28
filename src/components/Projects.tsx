
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  link: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Full Stack",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website using React and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Frontend",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management using Node.js and MongoDB",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Backend",
      link: "#"
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              } hover:bg-blue-500 hover:text-white transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative pb-[60%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 dark:text-blue-400">{project.category}</span>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}