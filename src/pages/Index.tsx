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
        title="Immigration Lawyer South Africa - Ramjanum C Attorneys"
        description="Leading Immigration Lawyers in South Africa. Expert visa applications, work permits, permanent residence & citizenship services in Johannesburg. Call +27 76 924 2726."
        keywords="immigration lawyer south africa, immigration attorney johannesburg, visa application south africa, work permit south africa, permanent residence south africa, south african immigration law, citizenship application, immigration legal services johannesburg, best immigration lawyer south africa"
        breadcrumbs={[
          { name: "Home", url: "https://ramjanumattorneys.com" }
        ]}
      />
      <JsonLd 
        type="LegalService" 
        data={{
          name: "Ramjanum C Attorneys - Immigration Lawyers South Africa",
          description: "Expert Immigration Law Services in South Africa. Specializing in visa applications, permanent residence, work permits, and citizenship applications in Johannesburg.",
          telephone: "+27769242726",
          email: "cramjanum@gmail.com",
          serviceType: "Immigration Law, Litigation, Family Law, Bail Applications",
          streetAddress: "Greenstone Shopping Centre",
          addressLocality: "Johannesburg",
          addressRegion: "Gauteng",
          postalCode: "1609"
        }} 
      />
      <JsonLd 
        type="Organization" 
        data={{}} 
      />
      
      <Navigation />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leading Immigration Lawyers in South Africa</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of specialized experience in South African immigration law, Ramjanum C Attorneys is your trusted partner for navigating complex immigration processes. We've successfully helped hundreds of clients achieve their immigration goals, from tourist visas to permanent residency and citizenship applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our Johannesburg-based immigration law firm provides expert legal services throughout South Africa, ensuring your immigration journey is smooth, efficient, and successful. We understand the complexities of South African immigration legislation and Department of Home Affairs requirements.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn more about our immigration law practice
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Expert Immigration Legal Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive legal solutions for all your South African immigration needs. Our experienced attorneys provide personalized service for individuals, families, and businesses.
          </p>
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
          <h2 className="text-3xl font-bold text-center mb-4">What Our Immigration Clients Say</h2>
          <p className="text-center text-gray-600 mb-12">
            Real testimonials from clients who successfully navigated South African immigration with our expert legal assistance.
          </p>
          
          <TestimonialCarousel />

          <div className="mt-8 text-center">
            <a href="https://us13.list-manage.com/survey?u=dca9b1b4b46ff9e41c70ed938&id=898f7d15fe&attribution=false" target="_blank">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
                Share Your Immigration Success Story
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Our Immigration Lawyers</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to start your South African immigration journey? Contact our experienced immigration attorneys for a consultation. We're here to help you achieve your immigration goals.
          </p>
        </div>
        <Contact/>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
