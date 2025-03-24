
export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Expert Immigration Law Services in South Africa
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn">
            Professional legal guidance for all your immigration needs
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors animate-fadeIn"
          >
            Get Legal Assistance
          </a>
        </div>
      </div>
    </div>
  );
};
