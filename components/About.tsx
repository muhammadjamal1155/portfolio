'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-tertiary rounded-2xl p-8 shadow-card">
              <p className="text-lg text-secondary mb-6 leading-relaxed text-justify">
                I&apos;m a passionate data science student and full-stack developer intern with a strong
                foundation in both analytical and technical skills. My journey combines the worlds
                of data analysis, machine learning, and modern web development.
              </p>

              <p className="text-lg text-secondary mb-6 leading-relaxed text-justify">
                As a data science student, I work with Python, statistical analysis, and machine
                learning algorithms to extract meaningful insights from complex datasets. I&apos;m
                fascinated by how data can drive decision-making and solve real-world problems.
              </p>

              <p className="text-lg text-secondary leading-relaxed text-justify">
                In my role as a full-stack developer intern, I build responsive web applications
                using modern frameworks and technologies. I enjoy creating intuitive user interfaces
                and robust backend systems that deliver seamless user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-tertiary rounded-2xl border border-white/5 hover:border-[#915eff] transition-colors">
                <div className="text-4xl font-bold text-[#915eff] mb-2">3+</div>
                <div className="text-secondary font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-tertiary rounded-2xl border border-white/5 hover:border-[#915eff] transition-colors">
                <div className="text-4xl font-bold text-[#915eff] mb-2">12+</div>
                <div className="text-secondary font-medium">Technologies</div>
              </div>
              <div className="text-center p-6 bg-tertiary rounded-2xl border border-white/5 hover:border-[#915eff] transition-colors">
                <div className="text-4xl font-bold text-[#915eff] mb-2">2+</div>
                <div className="text-secondary font-medium">Years Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
