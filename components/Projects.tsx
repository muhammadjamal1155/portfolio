'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Customer Churn Prediction',
      category: 'Data Science',
      description: 'Machine learning model to predict customer churn using Python, scikit-learn, and pandas. Achieved 87% accuracy with Random Forest classifier.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/muhammadjamal1155/churn-prediction',
      demo: '#',
      image: '/projects/churn.jpg',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration using Next.js and MongoDB.',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/muhammadjamal1155/ecommerce',
      demo: '#',
      image: '/projects/ecommerce.jpg',
    },
    {
      title: 'Sentiment Analysis Dashboard',
      category: 'Data Science',
      description: 'Interactive dashboard for analyzing social media sentiment using NLP techniques. Visualizes trends and patterns in real-time data.',
      technologies: ['Python', 'NLTK', 'Streamlit', 'Plotly'],
      github: 'https://github.com/muhammadjamal1155/sentiment-analysis',
      demo: '#',
      image: '/projects/sentiment.jpg',
    },
    {
      title: 'Task Management App',
      category: 'Full Stack',
      description: 'Collaborative task management application with real-time updates, user roles, and team workspaces.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/muhammadjamal1155/task-manager',
      demo: '#',
      image: '/projects/task-app.jpg',
    },
    {
      title: 'Sales Forecasting Model',
      category: 'Data Science',
      description: 'Time series forecasting model for retail sales prediction using ARIMA and LSTM neural networks.',
      technologies: ['Python', 'TensorFlow', 'Prophet', 'NumPy'],
      github: 'https://github.com/muhammadjamal1155/sales-forecast',
      demo: '#',
      image: '/projects/forecast.jpg',
    },
    {
      title: 'Portfolio Website',
      category: 'Full Stack',
      description: 'Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and modern UI.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/muhammadjamal1155/portfolio',
      demo: '#',
      image: '/projects/builder.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of my recent work in data science and full-stack development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-6xl opacity-50">📊</span>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
