
import React from 'react';
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Our Practice"
        description="Learn about Ramjanum C Attorneys, our history, values, mission and legal expertise in South African immigration law."
        canonicalUrl="https://ramjanumattorneys.com/about"
        keywords="immigration lawyer south africa, about ramjanum attorneys, legal expertise, south african law firm"
      />
      <JsonLd 
        type="Article" 
        data={{
          headline: "About Ramjanum C Attorneys - Immigration Law Firm",
          authorName: "Chantal Ramjanum",
          datePublished: "2023-08-01",
          dateModified: "2023-08-01"
        }} 
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 mt-5">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Our Practice</h1>
          <p className="text-xl max-w-3xl">
            Dedicated to providing expert immigration law services in South Africa since 2008.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2008, our immigration law firm has been at the forefront of providing specialized legal assistance for all immigration matters in South Africa. What started as a small practice has grown into a trusted name in immigration law.
              </p>
              <p>
                With a deep understanding of South African immigration regulations and policies, we have successfully assisted hundreds of clients with their immigration needs, from work permits and permanent residency applications to complex litigation cases.
              </p>
              <p>
                Our practice is built on the principles of integrity, expertise, and personalized service. We believe that each client's situation is unique and requires a tailored approach to achieve the best possible outcome.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[600px] flex items-center justify-center">
            <div className="text-gray-500 text-center p-8">
              <img src='public\profile-img.jpg'/>
            </div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, expert legal guidance that empowers individuals and families to navigate the complex immigration system with confidence. We are committed to delivering personalized solutions that address the unique needs of each client while maintaining the highest standards of legal practice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Integrity:</strong> We uphold the highest ethical standards in all our interactions.</li>
                <li>• <strong>Excellence:</strong> We are committed to delivering exceptional legal services.</li>
                <li>• <strong>Empathy:</strong> We understand the challenges our clients face and provide compassionate support.</li>
                <li>• <strong>Accessibility:</strong> We make complex legal processes understandable and navigable.</li>
                <li>• <strong>Dedication:</strong> We are relentlessly dedicated to achieving the best outcomes for our clients.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Attorney Profile */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Meet Our Attorney</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-gray-200 rounded-full overflow-hidden h-64 w-64 mx-auto md:mx-0 flex items-center justify-center">
                <div className="text-gray-500 text-center p-8">
                  <img src='public\profile-img.jpg'/>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Chantal Ramjanum</h3>
                <p className="text-gray-500 mb-4">Principal Attorney</p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With multiple years of experience specializing in South African immigration law, Chantal Ramjanum has established herself as a trusted legal expert in the field.
                  </p>
                  <p>
                    Chantal graduated from the Unisa and holds a LLB. Her academic background, combined with extensive practical experience, provides her with a comprehensive understanding of both the legal and humanitarian aspects of immigration law.
                  </p>
                  <p>
                    Throughout her career, Chantal has successfully represented clients in various immigration matters, from routine visa applications to complex deportation defense cases. Her dedication to her clients and her passion for immigration law drives her to stay current with the ever-evolving immigration policies and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
