import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

export default function Home() {
  return (
    <section 
      className="home flex flex-col items-center justify-center min-h-screen text-center"
   
    >
      <div className="text-white mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">I'm a developer passionate about creating web applications.</p>
      </div>
      
      <div className="social-icons flex gap-5rem">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaGithub size={50} />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaLinkedin size={50} />
        </a>
        <a 
          href="https://stackoverflow.com/users/youruserid" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaStackOverflow size={50} />
        </a>
      </div>
    </section>
  )
}