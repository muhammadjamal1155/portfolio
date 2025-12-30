'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-row items-start gap-5 flex-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className="text-white font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I&apos;m <span className="text-[#915eff]">Muhammad</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative z-10">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#915eff]/30 shadow-[0_0_50px_rgba(145,94,255,0.3)] relative group">
            <div className="absolute inset-0 bg-[#915eff]/10 group-hover:bg-transparent transition-colors duration-300 z-20"></div>
            <img
              src="/hero-profile.png"
              alt="Muhammad Jamal"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Simulated Computers Canvas - Placeholder for now to avoid breaking build with missing Three.js deps */}
      <div className="absolute top-[40%] w-full flex justify-center items-center">
        {/* Placeholder image or just empty space for the '3D' vibe */}
        {/* If user provided an image, we could use it, otherwise just leave space or use a static graphic */}
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
