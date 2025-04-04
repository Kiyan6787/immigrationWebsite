
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ramjanum C Attorneys</h3>
            <p className="text-gray-300">
              Professional legal services for all your immigration needs in South Africa.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>076 924 2726</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>cramjanum@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Johannesburg, South Africa</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.freeprivacypolicy.com/live/975d3d21-145a-45eb-9095-2626e1a9cba0" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ramjanum C Attorneys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
