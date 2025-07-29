import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'developer@example.com',
      href: 'mailto:developer@example.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/developer',
      href: 'https://github.com',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/developer',
      href: 'https://linkedin.com',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you're looking for a developer to join your team, need consultation 
                  on a project, or want to discuss potential collaborations, I'm always open 
                  to interesting conversations and opportunities.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm particularly interested in projects involving modern web development, 
                  system architecture, and innovative solutions that push the boundaries 
                  of what's possible.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin size={20} className="text-purple-400" />
                <span>Available for remote work worldwide</span>
              </div>
            </div>

            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`bg-gradient-to-r ${contact.color} p-0.5 rounded-xl`}>
                    <div className="bg-gray-800 rounded-xl p-6 group-hover:bg-gray-700 transition-colors duration-300">
                      <div className="flex items-center">
                        <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg mr-4`}>
                          <contact.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{contact.label}</h4>
                          <p className="text-gray-300">{contact.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}

              <div className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
                <p className="text-gray-300">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  LinkedIn messages tend to get the quickest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;