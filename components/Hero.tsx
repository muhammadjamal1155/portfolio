'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Data Science Student & Full Stack Developer Intern
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Passionate about building data-driven solutions and creating seamless web experiences. 
              Combining analytical insights with modern development practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/muhammadjamal1155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaLinkedin size={30} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
