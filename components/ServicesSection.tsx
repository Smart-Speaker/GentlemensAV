'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-tv-2-line',
      title: 'LED Video Walls',
      description: 'Custom LED display solutions for corporate environments, retail spaces, and entertainment venues.',
      features: ['4K/8K Resolution', 'Seamless Integration', 'Custom Sizing']
    },
    {
      icon: 'ri-computer-line',
      title: 'Digital Signage',
      description: 'Interactive digital signage networks with remote content management and real-time updates.',
      features: ['Cloud Management', 'Interactive Touch', 'Content Scheduling']
    },
    {
      icon: 'ri-presentation-line',
      title: 'Conference Solutions',
      description: 'Complete AV systems for meeting rooms, boardrooms, and presentation spaces.',
      features: ['Wireless Connectivity', 'Video Conferencing', 'Audio Integration']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'System Integration',
      description: 'Comprehensive integration services combining display, audio, and control systems.',
      features: ['Custom Programming', 'Unified Control', 'Seamless Operation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we deliver premium audiovisual solutions tailored to your specific needs and environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-yellow-400 text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <i className="ri-check-line text-yellow-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    {feature}
                  </li>
                ))}
              </ul>
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
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}