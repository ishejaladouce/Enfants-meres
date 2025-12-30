import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1920)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Empowering <span className="text-green-300">Teen Mothers</span><br />
          Building Futures
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Since 2015, Organisation Enfants Mere has provided education, livestock, 
          and vocational training to teen mothers across all 17 sectors of Rulindo District.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/donate" 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg text-center transition duration-300"
          >
            Support Our Mission
          </a>
          <a 
            href="/work" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg text-center transition duration-300"
          >
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;