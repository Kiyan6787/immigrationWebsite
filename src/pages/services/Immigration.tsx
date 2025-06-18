
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Immigration = () => {
  const services = [
    "Tourist & Business Visa Applications",
    "Permanent Residence Applications (Critical Skills, Spouse, Retirement)",
    "Work Permits (General, Critical Skills, Intra-Company Transfer)",
    "Study Permits & Student Visas",
    "Business & Investor Visas",
    "South African Citizenship Applications",
    "Immigration Appeals & Reviews",
    "Corporate Immigration Services",
    "Visa Extensions & Renewals",
    "Immigration Compliance & Advisory"
  ];

  const faqData = [
    {
      question: "How long does a South African visa application take?",
      answer: "Processing times vary by visa type: tourist visas typically take 10-15 working days, work permits can take 6-8 weeks, and permanent residence applications may take 6-24 months depending on the category."
    },
    {
      question: "What documents do I need for a South African work permit?",
      answer: "Required documents include a valid passport, employment contract, qualifications certificates, police clearances, medical certificates, and proof of expertise in your field. Our attorneys will provide a complete checklist based on your specific situation."
    },
    {
      question: "Can I apply for permanent residence in South Africa?",
      answer: "Yes, there are several permanent residence categories including Critical Skills, Spouse/Life Partner, Retirement, and Business routes. Eligibility depends on your qualifications, relationship status, financial status, and other factors."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Immigration & Visa Services South Africa - Expert Legal Assistance"
        description="Expert South African immigration lawyers specializing in visa applications, work permits, permanent residence & citizenship. Professional legal services in Johannesburg. Call +27 76 924 2726."
        canonicalUrl="https://ramjanumattorneys.com/services/immigration"
        keywords="south africa immigration lawyer, visa application south africa, work permit south africa, permanent residence south africa, south african citizenship, immigration attorney johannesburg, visa lawyer, immigration legal services"
        breadcrumbs={[
          { name: "Home", url: "https://ramjanumattorneys.com" },
          { name: "Services", url: "https://ramjanumattorneys.com/#services" },
          { name: "Immigration Services", url: "https://ramjanumattorneys.com/services/immigration" }
        ]}
      />
      <JsonLd 
        type="LegalService" 
        data={{
          name: "Immigration & Visa Legal Services - Ramjanum C Attorneys",
          description: "Comprehensive immigration and visa legal services in South Africa including visa applications, permanent residence, work permits, and citizenship applications.",
          serviceType: "Immigration Law & Visa Services",
          url: "https://ramjanumattorneys.com/services/immigration"
        }} 
      />
      <JsonLd 
        type="FAQ" 
        data={{ questions: faqData }} 
      />
      
      <Navigation />
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-6 mt-8">
          <h1 className="text-4xl font-bold text-center mb-6">Immigration & Visa Services South Africa</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Expert legal assistance for all South African immigration matters. Our experienced immigration attorneys provide comprehensive services for individuals, families, and businesses navigating the complex South African immigration system.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Why Choose Our Immigration Law Firm?</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With over 15 years of specialized experience in South African immigration law, we have successfully assisted hundreds of clients from around the world in achieving their immigration goals. Our deep understanding of Department of Home Affairs procedures and requirements ensures the highest success rates for our clients.
                  </p>
                  <p>
                    We stay current with the latest immigration legislation changes and maintain strong relationships with government departments, enabling us to provide accurate advice and efficient processing of your applications.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Proven track record with high success rates</li>
                    <li>Comprehensive knowledge of South African immigration law</li>
                    <li>Personalized service tailored to your specific needs</li>
                    <li>Regular updates on your application progress</li>
                    <li>Expert guidance through complex procedures</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Our Immigration Services Include:</h2>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions About South African Immigration</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your South African Immigration Journey?</h2>
              <p className="text-lg mb-6">
                Contact our experienced immigration lawyers today for a consultation. We'll assess your case and provide expert guidance on the best immigration pathway for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+27769242726" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call +27 76 924 2726
                </a>
                <a href="mailto:cramjanum@gmail.com" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
                  Email Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Immigration;
