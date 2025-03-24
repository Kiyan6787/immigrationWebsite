
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Immigration = () => {
  const services = [
    "Visa Applications",
    "Permanent Residence Applications",
    "Work Permits",
    "Study Permits",
    "Business Visas",
    "Citizenship Applications",
    "Appeals and Reviews"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Immigration & Emigration Services"
        description="Comprehensive immigration and emigration legal services in South Africa including visa applications, permanent residence, work permits and more."
        canonicalUrl="https://ramjanumattorneys.com/services/immigration"
        keywords="south africa immigration, visa application, permanent residence, work permit, study permit, business visa, citizenship"
      />
      <JsonLd 
        type="LegalService" 
        data={{
          name: "Ramjanum C Attorneys - Immigration Services",
          description: "Comprehensive immigration and emigration legal services in South Africa",
          serviceType: "Immigration Law"
        }} 
      />
      
      <Navigation />
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-6 mt-8">
          <h1 className="text-4xl font-bold text-center mb-12">Immigration & Emigration Services</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              We provide comprehensive immigration and emigration services to help you navigate the complex
              legal requirements of moving to or from South Africa.
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

export default Immigration;
