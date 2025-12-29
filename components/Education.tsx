'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Science in Data Science',
      institution: 'University Name',
      period: '2021 - 2025',
      description: 'Relevant coursework: Machine Learning, Statistical Analysis, Database Systems, Algorithms, Data Visualization',
      gpa: '3.8/4.0',
    },
  ]

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: '2023',
    },
    {
      name: 'Data Analysis with Python',
      issuer: 'DataCamp',
      date: '2023',
    },
    {
      name: 'Prompt Engineering Essentials',
      issuer: 'Coursera',
      date: '2024',
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-3xl text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg p-6 shadow-md mb-4"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {edu.period}
                  </p>
                  {edu.gpa && (
                    <p className="text-gray-700 font-medium mb-3">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  <p className="text-gray-600">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCertificate className="text-3xl text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-primary-600 text-sm font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
