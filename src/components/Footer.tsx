
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Immigration Law Firm</h3>
            <p className="text-gray-300">
              Professional legal services for all your immigration needs in South Africa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+27 XX XXX XXXX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@example.com</span>
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
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Immigration Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
