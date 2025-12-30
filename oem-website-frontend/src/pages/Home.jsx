import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact Since 2015</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '250+', label: 'Teen Mothers Empowered' },
              { number: '17', label: 'Sectors in Rulindo District' },
              { number: '150+', label: 'Livestock Distributed' },
              { number: '8', label: 'Partner Organizations' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;