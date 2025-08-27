
'use client';
import { useState } from 'react';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('led-walls');

  const categories = [
    { 
      id: 'led-walls', 
      name: 'LED Video Walls', 
      icon: 'ri-tv-2-line'
    },
    { 
      id: 'digital-signage', 
      name: 'Digital Signage', 
      icon: 'ri-computer-line'
    },
    { 
      id: 'displays', 
      name: 'Premium Displays', 
      icon: 'ri-monitor-line'
    },
    { 
      id: 'outdoor-led', 
      name: 'Outdoor LED', 
      icon: 'ri-sun-line'
    }
  ];

  const products = {
    'led-walls': [
      {
        name: 'UltraView 4K Video Wall',
        description: 'Premium LED video wall with 4K resolution and seamless bezels for corporate installations',
        specs: ['4K Resolution', '0.9mm Bezels', '1000 nits Brightness', 'Seamless Integration'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20LED%20video%20wall%20display%20system%20showing%20vibrant%204K%20content%2C%20ultra-thin%20bezels%2C%20corporate%20installation%2C%20modern%20conference%20room%20setting%2C%20seamless%20multi-screen%20configuration%2C%20high%20resolution%20display%20technology&width=500&height=300&seq=product-1&orientation=landscape'
      },
      {
        name: 'MegaWall 8K Display System',
        description: 'Ultra-high resolution LED video wall for premium installations and critical viewing',
        specs: ['8K Resolution', 'HDR Support', 'Ultra-Wide Viewing', 'Advanced Calibration'],
        image: 'https://readdy.ai/api/search-image?query=High-end%208K%20LED%20video%20wall%20showing%20crystal%20clear%20detailed%20imagery%2C%20professional%20grade%20display%20system%2C%20sleek%20black%20frame%2C%20premium%20quality%20LED%20technology%20in%20modern%20corporate%20environment&width=500&height=300&seq=product-2&orientation=landscape'
      }
    ],
    'digital-signage': [
      {
        name: 'SmartSign Interactive LED',
        description: 'Touch-enabled LED digital signage with cloud management and real-time content updates',
        specs: ['Multi-Touch', 'Cloud Connected', '24/7 Operation', 'Weather Resistant'],
        image: 'https://readdy.ai/api/search-image?query=Interactive%20LED%20digital%20signage%20display%20with%20touch%20interface%2C%20modern%20retail%20environment%2C%20sleek%20mounting%20system%2C%20professional%20commercial%20LED%20display%20showing%20dynamic%20content&width=500&height=300&seq=product-3&orientation=landscape'
      },
      {
        name: 'FlexiDisplay Outdoor LED',
        description: 'Weather-resistant outdoor LED signage solutions with high brightness for daylight visibility',
        specs: ['IP65 Rating', 'High Brightness', 'Temperature Control', 'Remote Management'],
        image: 'https://readdy.ai/api/search-image?query=Outdoor%20LED%20signage%20display%20mounted%20on%20building%20exterior%2C%20weather-resistant%20design%2C%20bright%20daylight%20visibility%2C%20commercial%20LED%20advertising%20screen%2C%20professional%20installation&width=500&height=300&seq=product-4&orientation=landscape'
      }
    ],
    'displays': [
      {
        name: 'CrystalView Premium LED',
        description: 'Premium LED displays with exceptional color accuracy and brightness for professional use',
        specs: ['4K/8K Ready', 'Wide Color Gamut', 'Low Power Consumption', 'Slim Profile'],
        image: 'https://readdy.ai/api/search-image?query=Premium%20LED%20display%20monitor%20showing%20crystal%20clear%20detailed%20imagery%2C%20professional%20grade%20screen%2C%20sleek%20modern%20frame%2C%20high-end%20LED%20display%20technology%20in%20corporate%20office%20environment&width=500&height=300&seq=product-5&orientation=landscape'
      },
      {
        name: 'ProLED Commercial Series',
        description: 'Commercial-grade LED displays designed for continuous operation in demanding environments',
        specs: ['24/7 Operation', 'Industrial Grade', 'Advanced Cooling', 'Remote Diagnostics'],
        image: 'https://readdy.ai/api/search-image?query=Commercial%20LED%20display%20system%20in%20professional%20installation%2C%20industrial%20grade%20LED%20technology%2C%20multiple%20screens%20showing%20business%20content%2C%20high-tech%20corporate%20environment&width=500&height=300&seq=product-6&orientation=landscape'
      }
    ],
    'outdoor-led': [
      {
        name: 'WeatherMax Outdoor LED',
        description: 'Rugged outdoor LED displays engineered to withstand harsh weather conditions',
        specs: ['IP67 Waterproof', 'UV Resistant', 'Anti-Glare', 'Extreme Temperature'],
        image: 'https://readdy.ai/api/search-image?query=Rugged%20outdoor%20LED%20display%20screen%20showing%20bright%20content%20in%20daylight%2C%20weatherproof%20housing%2C%20professional%20outdoor%20installation%2C%20commercial%20building%20exterior%20mounting&width=500&height=300&seq=product-7&orientation=landscape'
      },
      {
        name: 'BrightView Stadium LED',
        description: 'Large-format outdoor LED displays for stadiums, arenas, and major venue installations',
        specs: ['Ultra High Brightness', 'Wide Viewing Angle', 'Modular Design', 'Sports Ready'],
        image: 'https://readdy.ai/api/search-image?query=Large%20stadium%20LED%20display%20screen%20showing%20sports%20content%2C%20massive%20outdoor%20LED%20installation%2C%20professional%20sports%20venue%2C%20bright%20high-resolution%20LED%20technology%20for%20large%20audiences&width=500&height=300&seq=product-8&orientation=landscape'
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of premium LED display products, engineered for exceptional performance and visual excellence.
          </p>
        </div>

        {/* Category Tabs with Simple Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center w-32 h-20 sm:w-40 sm:h-24 px-4 py-3 rounded-2xl font-semibold transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center mb-2">
                <i className={`${category.icon} text-xl`}></i>
              </div>
              <span className="text-xs sm:text-sm font-medium text-center leading-tight">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products[activeCategory as keyof typeof products].map((product, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center bg-top"
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Product Information
          </button>
        </div>
      </div>
    </section>
  );
}
