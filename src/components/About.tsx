
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'UI/UX Design', 'Responsive Design', 'RESTful APIs', 'Database Design'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful,
              functional web applications. With years of experience in full-stack development,
              I bring ideas to life through clean code and intuitive user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-gray-800 dark:text-gray-200">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}