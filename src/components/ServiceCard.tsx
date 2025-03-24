
import { Link } from 'react-router-dom';

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
      className="group p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-primary transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
};
