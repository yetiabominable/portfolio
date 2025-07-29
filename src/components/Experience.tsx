import React from 'react';
import { Building, Calendar, ArrowRight, GraduationCap, BarChart3 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Teknisa',
      period: 'Present',
      type: 'current',
      icon: Building,
      description: 'Contributing to the modernization of legacy enterprise systems for food service management, creating solutions that streamline operations and improve decision-making processes.',
      responsibilities: [
        'Developing responsive web interfaces using Vue.js',
        'Maintaining and enhancing PHP-based business logic',
        'Creating BIRT reports for strategic decision support',
        'Modernizing legacy systems architecture'
      ],
      technologies: ['Vue.js', 'PHP', 'JavaScript', 'BIRT', 'SQL', 'HTML/CSS'],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Trainee - Full Stack Development',
      company: 'Previous Company',
      period: '2023',
      type: 'past',
      icon: GraduationCap,
      description: 'Gained hands-on experience in full-stack web development, working on various projects to build foundational skills in modern web technologies.',
      responsibilities: [
        'Developed web applications using modern frameworks',
        'Learned best practices in software development',
        'Collaborated on team projects and code reviews',
        'Built responsive user interfaces and APIs'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'React', 'Node.js', 'Git'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Trainee - Business Intelligence',
      company: 'Previous Company',
      period: '2022',
      type: 'past',
      icon: BarChart3,
      description: 'Focused on data analysis and business intelligence, creating insights through data extraction, cleaning, and visualization to support business decision-making.',
      responsibilities: [
        'Data extraction and cleaning from various sources',
        'Creating interactive dashboards and reports',
        'Analyzing business metrics and KPIs',
        'Collaborating with stakeholders on data requirements'
      ],
      technologies: ['Excel', 'Power BI', 'SQL', 'Data Analysis', 'Dashboard Design'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <exp.icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-purple-400 text-lg font-semibold mb-2">{exp.company}</p>
                          <div className="flex items-center text-gray-400 mb-4">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                            {exp.type === 'current' && (
                              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white flex items-center">
                            <ArrowRight size={16} className="text-purple-400 mr-2" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2 text-gray-300">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white flex items-center">
                            <ArrowRight size={16} className="text-blue-400 mr-2" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;