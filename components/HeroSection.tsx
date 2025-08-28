
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const demoSlides = [
    {
      title: "LED Video Wall Installation",
      description: "Corporate Headquarters - 8K Resolution Display",
      image: "https://readdy.ai/api/search-image?query=Professional%20LED%20video%20wall%20display%20showing%20vibrant%20corporate%20presentation%20with%20colorful%20data%20visualizations%20and%20modern%20graphics%2C%20high%20resolution%204K%20quality%2C%20sleek%20conference%20room%20environment%2C%20multiple%20screens%20showing%20different%20content%20sections&width=800&height=450&seq=display-demo-1&orientation=landscape"
    },
    {
      title: "Digital Signage Network",
      description: "Retail Chain - 200+ Connected Displays",
      image: "https://readdy.ai/api/search-image?query=Large%20digital%20signage%20network%20installation%20in%20modern%20retail%20environment%2C%20multiple%20connected%20LED%20displays%20showing%20synchronized%20content%2C%20professional%20commercial%20digital%20signage%20system%2C%20bright%20colorful%20retail%20displays&width=800&height=450&seq=display-demo-2&orientation=landscape"
    },
    {
      title: "Conference Room Solution",
      description: "Interactive Presentation System",
      image: "https://readdy.ai/api/search-image?query=Interactive%20LED%20presentation%20system%20in%20modern%20conference%20room%2C%20touch-enabled%20display%20with%20business%20presentation%20content%2C%20professional%20meeting%20room%20setup%2C%20collaborative%20digital%20workspace%20technology&width=800&height=450&seq=display-demo-3&orientation=landscape"
    }
  ];

  // Auto-cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % demoSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [demoSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoSlides.length) % demoSlides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen bg-cover bg-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20audiovisual%20control%20room%20with%20multiple%20LED%20displays%20and%20high-tech%20equipment%2C%20dark%20ambient%20lighting%20with%20blue%20and%20purple%20accents%2C%20sleek%20minimalist%20design%2C%20corporate%20technology%20environment%2C%20ultra-wide%20monitors%20showing%20data%20analytics%2C%20professional%20AV%20installation%20setup&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
              Premium AV Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Gentlemen's{' '}
              <span className="text-yellow-400">AV</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforming spaces with cutting-edge LED displays and premium digital signage solutions that redefine visual excellence.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold">15+ Years</div>
                  <div className="text-sm text-gray-400">Excellence</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <i className="ri-tools-line text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold">Expert</div>
                  <div className="text-sm text-gray-400">Installation</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <i className="ri-star-line text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold">Premium</div>
                  <div className="text-sm text-gray-400">Quality</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Explore Solutions
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-gray-800/80 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors cursor-pointer border border-gray-600 whitespace-nowrap"
              >
                <i className="ri-play-circle-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Display Mockup */}
          <div className="relative hidden lg:block">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              <div className="bg-black rounded-lg overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  <i className="ri-live-line mr-1 w-4 h-4 inline-flex items-center justify-center"></i>
                  Live Display
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                  4K Ultra HD
                </div>
                
                {/* Sliding Images Container */}
                <div className="aspect-video relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{
                      width: `${demoSlides.length * 100}%`,
                      transform: `translateX(-${(currentSlide * 100) / demoSlides.length}%)`,
                    }}
                  >
                    {demoSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="h-full bg-cover bg-center flex-shrink-0"
                        style={{
                          width: `${100 / demoSlides.length}%`,
                          backgroundImage: `url('${slide.image}')`,
                        }}
                      ></div>
                    ))}
                  </div>

                  
                  {/* Slide Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button 
                      onClick={prevSlide}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                  </div>

                  {/* Slide Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                    <h3 className="font-bold">{demoSlides[currentSlide].title}</h3>
                    <p className="text-sm text-gray-300">{demoSlides[currentSlide].description}</p>
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {demoSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                          index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Demo Showcase</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="ri-close-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden bg-cover bg-center"
                   style={{
                     backgroundImage: `url('https://readdy.ai/api/search-image?query=Time-lapse%20video%20of%20professional%20AV%20technicians%20installing%20large%20LED%20video%20wall%20in%20modern%20corporate%20office%2C%20multiple%20screens%20being%20mounted%20and%20calibrated%2C%20sophisticated%20installation%20process%2C%20high-tech%20equipment%20and%20tools%2C%20professional%20lighting%20setup&width=1200&height=675&seq=demo-video-1&orientation=landscape')`
                   }}>
                <div className="flex items-center justify-center h-full">
                  <button className="bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer">
                    <i className="ri-play-fill text-3xl w-8 h-8 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
