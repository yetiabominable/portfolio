import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <Code size={16} className="mr-2 text-purple-400" />
            <span>Built with React & TypeScript</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-400" fill="currentColor" />
            <span>by a passionate developer</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Full Stack Developer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;