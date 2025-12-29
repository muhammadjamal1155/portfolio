import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/muhammadjamal1155"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-jamal-a08241240"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:muhammadjamal1144@gmail.com"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Muhammad Jamal. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
