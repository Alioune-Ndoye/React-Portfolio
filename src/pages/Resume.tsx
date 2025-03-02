import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const proficiencies = [
    'JavaScript (ES6+)',
    'React & React Hooks',
    'Node.js',
    'HTML5 & CSS3',
    'Git & GitHub',
    'REST APIs',
    'Webpack',
    'Responsive Design',
    'Test-Driven Development',
    'Agile Methodologies'
  ];

  return (
    <section 
      className="min-h-screen p-8 text-white"
      
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        
        <div className="mb-12 text-center">
          <a
            href="/resume.pdf" // Make sure to add your resume PDF to the public folder
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors duration-300"
          >
            <FaFileDownload className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="proficiencies">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proficiencies.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;