import React from 'react';
import { Code2, Zap, Globe, TestTube, FileText, ClipboardList, Database, FileCode, Layers, Palette, Atom, Container, Diameter as Kubernetes, Cloud, Settings, Rocket, GitBranch, Leaf, Search, Server, Activity, Rabbit, BarChart3, FileSpreadsheet } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    { 
      name: 'C#', 
      category: 'Backend', 
      color: 'from-purple-500 to-purple-600',
      icon: Code2
    },
    { 
      name: '.NET Core', 
      category: 'Backend', 
      color: 'from-blue-500 to-blue-600',
      icon: Zap
    },
    { 
      name: 'ASP.NET', 
      category: 'Backend', 
      color: 'from-indigo-500 to-indigo-600',
      icon: Globe
    },
    { 
      name: 'xUnit', 
      category: 'Backend', 
      color: 'from-green-500 to-green-600',
      icon: TestTube
    },
    { 
      name: 'ILogger', 
      category: 'Backend', 
      color: 'from-blue-600 to-indigo-600',
      icon: FileText
    },
    { 
      name: 'Serilog', 
      category: 'Backend', 
      color: 'from-indigo-600 to-purple-600',
      icon: ClipboardList
    },
    { 
      name: 'PHP', 
      category: 'Backend', 
      color: 'from-purple-600 to-indigo-600',
      icon: Database
    },
    { 
      name: 'JavaScript', 
      category: 'Frontend', 
      color: 'from-yellow-500 to-yellow-600',
      icon: FileCode
    },
    { 
      name: 'TypeScript', 
      category: 'Frontend', 
      color: 'from-blue-400 to-blue-500',
      icon: Layers
    },
    { 
      name: 'Vue.js', 
      category: 'Frontend', 
      color: 'from-green-500 to-green-600',
      icon: Palette
    },
    { 
      name: 'React', 
      category: 'Frontend', 
      color: 'from-cyan-400 to-cyan-500',
      icon: Atom
    },
    { 
      name: 'Docker', 
      category: 'DevOps', 
      color: 'from-cyan-500 to-cyan-600',
      icon: Container
    },
    { 
      name: 'Kubernetes', 
      category: 'DevOps', 
      color: 'from-blue-500 to-blue-600',
      icon: Kubernetes
    },
    { 
      name: 'Azure', 
      category: 'DevOps', 
      color: 'from-blue-600 to-cyan-500',
      icon: Cloud
    },
    { 
      name: 'Azure DevOps', 
      category: 'DevOps', 
      color: 'from-blue-500 to-indigo-500',
      icon: Settings
    },
    { 
      name: 'CI/CD Pipelines', 
      category: 'DevOps', 
      color: 'from-indigo-500 to-purple-500',
      icon: Rocket
    },
    { 
      name: 'Git', 
      category: 'DevOps', 
      color: 'from-orange-500 to-red-500',
      icon: GitBranch
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      color: 'from-green-600 to-green-700',
      icon: Leaf
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      color: 'from-blue-600 to-blue-700',
      icon: Database
    },
    { 
      name: 'Elasticsearch', 
      category: 'Database', 
      color: 'from-teal-500 to-teal-600',
      icon: Search
    },
    { 
      name: 'SQL Server', 
      category: 'Database', 
      color: 'from-red-500 to-red-600',
      icon: Server
    },
    { 
      name: 'Redis', 
      category: 'Database', 
      color: 'from-red-600 to-red-700',
      icon: Activity
    },
    { 
      name: 'RabbitMQ', 
      category: 'Database', 
      color: 'from-orange-500 to-orange-600',
      icon: Rabbit
    },
    { 
      name: 'Power BI', 
      category: 'Analytics', 
      color: 'from-yellow-600 to-orange-500',
      icon: BarChart3
    },
    { 
      name: 'Excel', 
      category: 'Analytics', 
      color: 'from-green-500 to-green-600',
      icon: FileSpreadsheet
    }
  ];

  const categories = ['Backend', 'Frontend', 'Database', 'DevOps', 'Analytics'];

  return (
    <section id="stack" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-white text-center mb-6 pb-2 border-b border-gray-700">
                {category}
              </h3>
              <div className="space-y-4">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div
                      key={tech.name}
                      className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                    >
                      <div className={`bg-gradient-to-r ${tech.color} p-0.5 rounded-xl shadow-lg`}>
                        <div className="bg-gray-900 rounded-xl p-4 group-hover:bg-gray-800 transition-colors duration-300">
                          <div className="text-center">
                            <div className="mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                              <tech.icon size={32} className="text-white" />
                            </div>
                            <span className="text-white font-medium text-sm">{tech.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Core <span className="text-purple-400">Competencies</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 size={32} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Full Stack Development</h4>
              <p className="text-gray-300 text-sm">End-to-end web application development with modern frameworks and best practices</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Business Intelligence</h4>
              <p className="text-gray-300 text-sm">Data analysis, visualization, and reporting to drive business insights</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">System Modernization</h4>
              <p className="text-gray-300 text-sm">Legacy system upgrades and architecture improvements</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;