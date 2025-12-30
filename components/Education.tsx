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
    <section id="education" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I have studied so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <div className="relative border-l-2 border-white-100 mx-auto md:mx-0 md:ml-5 ml-5">
            {/* Education Items */}
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} />
            ))}
            {/* Certifications Items */}
            {certifications.map((cert, index) => (
              <CertificationCard key={`cert-${index}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const EducationCard = ({ edu }: any) => {
  return (
    <div className="mb-8 ml-6 relative">
      {/* Dot */}
      <span className="absolute -left-[35px] flex items-center justify-center w-4 h-4 rounded-full bg-secondary ring-8 ring-primary ring-opacity-100"></span>

      <div className="p-5 rounded-[12px] bg-tertiary sm:w-full md:w-[600px] w-full relative">
        {/* Arrow */}
        <div className="absolute top-6 -left-2 w-4 h-4 bg-tertiary transform rotate-45"></div>

        <h3 className="text-white text-[24px] font-bold">{edu.degree}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{edu.institution}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {edu.period}
          </li>
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            GPA: {edu.gpa}
          </li>
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {edu.description}
          </li>
        </ul>
      </div>
    </div>
  )
}

const CertificationCard = ({ cert }: any) => {
  return (
    <div className="mb-8 ml-6 relative">
      <span className="absolute -left-[35px] flex items-center justify-center w-4 h-4 rounded-full bg-secondary ring-8 ring-primary"></span>
      <div className="p-5 rounded-[12px] bg-tertiary sm:w-full md:w-[600px] w-full relative">
        <div className="absolute top-6 -left-2 w-4 h-4 bg-tertiary transform rotate-45"></div>
        <h3 className="text-white text-[24px] font-bold">{cert.name}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{cert.issuer}</p>
        <p className='text-gray-400 text-[14px] mt-2'>{cert.date}</p>
      </div>
    </div>
  )
}

const textVariant = (delay?: number) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: delay } },
  };
};


export default Education
