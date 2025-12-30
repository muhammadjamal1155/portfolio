'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaChartBar,
  FaChartLine
} from 'react-icons/fa'
import {
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiJupyter,
  SiNumpy
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Python', icon: <FaPython className="text-4xl text-blue-500" /> },
        { name: 'Pandas', icon: <SiPandas className="text-4xl text-blue-600" /> },
        { name: 'NumPy', icon: <SiNumpy className="text-4xl text-blue-400" /> },
        { name: 'Matplotlib', icon: <FaChartBar className="text-4xl text-green-500" /> },
        { name: 'Seaborn', icon: <FaChartLine className="text-4xl text-indigo-400" /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn className="text-4xl text-orange-500" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-4xl text-orange-600" /> },
        { name: 'Jupyter', icon: <SiJupyter className="text-4xl text-orange-500" /> },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact className="text-4xl text-cyan-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-900" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-600" /> },
        { name: 'SQL', icon: <FaDatabase className="text-4xl text-gray-700" /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-600" /> },
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Skills & Technologies
          </h2>

          <div className="flex flex-col gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="w-full"
              >
                <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-violet-500">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#151030] border border-white/10 hover:border-violet-500 transition-colors duration-300 group h-full"
                    >
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300 min-w-[40px] flex justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-white group-hover:text-violet-500 transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
