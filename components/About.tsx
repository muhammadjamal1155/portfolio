'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate data science student and full-stack developer intern with a strong 
                foundation in both analytical and technical skills. My journey combines the worlds 
                of data analysis, machine learning, and modern web development.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a data science student, I work with Python, statistical analysis, and machine 
                learning algorithms to extract meaningful insights from complex datasets. I'm 
                fascinated by how data can drive decision-making and solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                In my role as a full-stack developer intern, I build responsive web applications 
                using modern frameworks and technologies. I enjoy creating intuitive user interfaces 
                and robust backend systems that deliver seamless user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Technologies</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-700 font-medium">Years Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
