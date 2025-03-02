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
      
      <div className="social-icons">
  <a 
    href="https://github.com/Alioune-Ndoye" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-link"
  >
    <FaGithub size={50} />
  </a>
  <a 
    href="https://www.linkedin.com/feed/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaLinkedin size={50} />
  </a>
  <a 
    href="https://stackoverflow.com/users/13218315/ali-ndoye" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaStackOverflow size={50} />
  </a>
</div>
    </section>
  );
}