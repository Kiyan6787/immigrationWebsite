
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

const Bail = () => {
  const services = [
    "24/7 Bail Applications",
    "Legal Representation",
    "Court Appearances",
    "Bail Conditions Advice",
    "Emergency Assistance",
    "Appeal Applications",
    "Post-Bail Support"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-6 mt-8">
          <h1 className="text-4xl font-bold text-center mb-12">Bail Application Services</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              We provide swift and professional assistance with bail applications, ensuring your rights
              are protected throughout the legal process.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Services Include:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Bail;
