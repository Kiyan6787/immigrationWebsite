import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Footer } from "../components/Footer";
import { Briefcase, Scale, Users, KeyRound, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  const services = [
    {
      title: "Immigration & Emigration",
      description: "Expert guidance for all your migration needs",
      icon: <Briefcase size={32} />,
      link: "/services/immigration"
    },
    {
      title: "Litigation",
      description: "Professional legal representation",
      icon: <Scale size={32} />,
      link: "/services/litigation"
    },
    {
      title: "Family Law",
      description: "Compassionate family legal services",
      icon: <Users size={32} />,
      link: "/services/family"
    },
    {
      title: "Bail Applications",
      description: "Efficient bail application assistance",
      icon: <KeyRound size={32} />,
      link: "/services/bail"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ramjanum C Attorneys - Immigration Law Firm"
        description="Expert legal services for immigration, litigation, family law and bail applications in South Africa."
        keywords="immigration lawyer, South Africa immigration, visa application, work permit, permanent residency, legal services"
      />
      <JsonLd 
        type="LegalService" 
        data={{
          name: "Ramjanum C Attorneys",
          description: "Professional Immigration Law Services in South Africa",
          telephone: "+27 76 924 2726",
          email: "cramjanum@gmail.com",
          serviceType: "Immigration Law, Litigation, Family Law, Bail Applications"
        }} 
      />
      
      <Navigation />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              With multiple years of experience in South African immigration law, our firm provides expert legal services
              to individuals and families seeking to navigate the complex immigration system.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn more about our practice
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          
          {/* Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Add Testimonial Button */}
          <div className="mt-8 text-center">
            <a href="https://us13.list-manage.com/survey?u=dca9b1b4b46ff9e41c70ed938&id=898f7d15fe&attribution=false" target="_blank">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
                Add Your Testimonial
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact/>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
