import React from 'react';
import { ExternalLink, Github, ShoppingCart, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Microservices Platform',
      description: 'A scalable e-commerce solution built with microservices architecture, featuring distributed services for inventory, payments, user management, and order processing.',
      icon: ShoppingCart,
      technologies: ['ASP.NET Core', 'Docker', 'Microservices', 'SQL Server', 'Redis', 'RabbitMQ'],
      features: [
        'Microservices architecture with Docker containerization',
        'Event-driven communication between services',
        'Distributed caching and session management',
        'API Gateway with authentication and authorization',
        'Automated testing and CI/CD pipeline'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'OCR Document Search Engine',
      description: 'An intelligent document search system that uses OCR technology to extract text from images and documents, enabling full-text search across various file formats.',
      icon: Search,
      technologies: ['C#', 'MongoDB', 'Elasticsearch', 'OCR', 'Machine Learning', 'REST API'],
      features: [
        'OCR text extraction from multiple file formats',
        'Elasticsearch-powered full-text search',
        'MongoDB document storage and indexing',
        'RESTful API with comprehensive search filters',
        'Machine learning for text recognition accuracy'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Personal <span className="text-purple-400">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passion projects that showcase my commitment to clean architecture and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${project.gradient} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200">
                    <Github size={16} className="mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            These projects demonstrate my passion for building scalable, maintainable solutions 
            using modern development practices and clean architecture principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;