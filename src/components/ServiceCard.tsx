
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className="group p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
          <span className="mr-2">Learn More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};
