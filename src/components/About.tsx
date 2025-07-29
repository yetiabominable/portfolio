import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer who thrives on transforming complex business challenges 
              into elegant, scalable solutions. With expertise spanning from backend architecture with .NET 
              to modern frontend frameworks, I bring a holistic approach to web development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development is driven by curiosity and a commitment to excellence. 
              I believe in writing clean, maintainable code and staying current with emerging technologies 
              to deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or diving deep into system architecture patterns that can make applications more 
              robust and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Clean Architecture</h3>
              </div>
              <p className="text-gray-300">
                Passionate about writing maintainable, testable code that stands the test of time.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Innovation Focus</h3>
              </div>
              <p className="text-gray-300">
                Always exploring new technologies and patterns to solve problems more effectively.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Coffee className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-300">
                Committed to staying current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;