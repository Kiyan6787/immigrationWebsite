const Contact = () => {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
  
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Left Column - Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                Get in touch with us for professional legal assistance.
              </p>
              <div className="space-y-4 text-center">
                <p className="text-lg">Email: cramjanum@gmail.com</p>
                <p className="text-lg">Phone: +27 76 924 2726</p>
                <p className="text-lg">Address: Greenstone, Johannesburg, South Africa</p>
              </div>
            </div>
  
            {/* Right Column - Mailchimp Button */}
            <div className="flex flex-col items-center justify-center">
                <a
                    href="https://us13.list-manage.com/contact-form?u=dca9b1b4b46ff9e41c70ed938&form_id=e2b487613b505180148497bc65c561f1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
                    Contact us via Mailchimp
                    </button>
                </a>

                {/* Spans below the button */}
                <div className="mt-2 text-center">
                    <span className="block text-sm italic text-gray-600">
                    We use <a href="https://mailchimp.com" target="_blank" className="underline">MailChimp</a> for our forms, clicking the button will open a new tab with our form.
                    </span>
                    <span className="block text-sm italic text-gray-600">
                    Click <a href="https://www.freeprivacypolicy.com/live/975d3d21-145a-45eb-9095-2626e1a9cba0" target="_blank" className="underline">here</a> to view our privacy policy.
                    </span>
                </div>
            </div>

                
           </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  