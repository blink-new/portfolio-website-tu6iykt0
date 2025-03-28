
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.name
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.email
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.message
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-full font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-600 dark:text-green-400"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-red-600 dark:text-red-400"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}