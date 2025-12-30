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
      title: 'AI Personal Tutor',
      category: 'Full Stack',
      description: 'AI-powered learning tutor using RAG, Memory, and Agentic Planning. Features PDF ingestion, intelligent context-aware answers, and conversation memory with a ChatGPT-style interface.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'LangChain', 'OpenAI GPT-4', 'FAISS'],
      github: 'https://github.com/muhammadjamal1155/ai-tutor',
      demo: '#',
      image: '/projects/ai-tutor.jpg',
    },
    {
      title: 'Eat Smart AI Plans (NutriPlan)',
      category: 'Data Science',
      description: 'Intelligent meal planning app generating personalized nutrition plans using ML algorithms (KNN, Cosine Similarity, TF-IDF). Calculates BMR, TDEE, and creates smart grocery lists.',
      technologies: ['React', 'TypeScript', 'Python', 'Flask', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/muhammadjamal1155/eat-smart-ai-plans',
      demo: '#',
      image: '/projects/nutriplan.jpg',
    },
    {
      title: 'Portfolio Website',
      category: 'Full Stack',
      description: 'Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and modern UI.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/muhammadjamal1155/portfolio',
      demo: '#',
      image: '/projects/portfolio.jpg',
    },
    {
      title: 'GMS v0 Demo',
      category: 'Full Stack',
      description: 'GMS Next prototype automatically synced with v0.app deployments. Features modern UI components, PostgreSQL integration, and automated deployment pipelines.',
      technologies: ['Next.js', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'Neon DB', 'PostgreSQL'],
      github: 'https://github.com/SAJ33L/GMS-v0-demo',
      demo: '#',
      image: '/projects/gms-demo.jpg',
    },
    {
      title: 'GitHub Partner Bot',
      category: 'Bot / Automation',
      description: 'A project created with Lovable, serving as a base for a web application that can be edited through the Lovable platform. Built with modern web technologies.',
      technologies: ['TypeScript', 'React', 'Vite', 'shadcn-ui', 'Tailwind CSS'],
      github: 'https://github.com/muhammadjamal1155/github-partner-bot',
      demo: '#',
      image: '/projects/partner-bot.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({
  index,
  title,
  description,
  technologies,
  image,
  github,
  demo,
}: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <div className="w-full h-full bg-violet-900/20 rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(github, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <FaGithub className='w-1/2 h-1/2 text-white' />
            </div>
            <div
              onClick={() => window.open(demo, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2 hover:scale-110 transition-transform'
            >
              <FaExternalLinkAlt className='w-1/2 h-1/2 text-white' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {technologies.map((tag: string) => (
            <p
              key={`${title}-${tag}`}
              className={`text-[14px] blue-text-gradient`} // Ideally would map specific colors to tags
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const textVariant = (delay?: number) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: delay } },
  };
};

const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: { x: 0, y: direction === "up" ? 100 : 0, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1, transition: { type: type, delay: delay, duration: duration, ease: "easeOut" } },
  };
};


export default Projects
