
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Footer } from "../components/Footer";
import { Briefcase, Scale, Users, KeyRound, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <Navigation />
      
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in South African immigration law, our firm provides expert legal services
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
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                Get in touch with us for professional legal assistance.
              </p>
              <div className="space-y-4 text-center">
                <p className="text-lg">
                  Email: contact@example.com
                </p>
                <p className="text-lg">
                  Phone: +27 XX XXX XXXX
                </p>
                <p className="text-lg">
                  Address: Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
