
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-text-muted">
        <p>&copy; {new Date().getFullYear()} TechSphere. All rights reserved.</p>
        <p className="text-sm mt-2">Your one-stop shop for the latest in technology.</p>
      </div>
    </footer>
  );
};

export default Footer;
