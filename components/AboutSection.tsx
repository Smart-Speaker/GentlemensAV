'use client';

export default function AboutSection() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'Michael Thompson',
      role: 'Chief Technology Officer',
      experience: '15+ years in AV systems',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20in%20suit%2C%20confident%20executive%20portrait%2C%20modern%20corporate%20headshot%2C%20clean%20background%2C%20professional%20lighting%2C%20mature%20male%20technology%20leader&width=400&height=400&seq=team-1&orientation=squarish'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Project Manager',
      experience: '12+ years project delivery',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20executive%2C%20modern%20corporate%20headshot%2C%20clean%20background%2C%20professional%20lighting%2C%20project%20management%20leader&width=400&height=400&seq=team-2&orientation=squarish'
    },
    {
      name: 'David Rodriguez',
      role: 'Senior Installation Engineer',
      experience: '10+ years field expertise',
      image: 'https://readdy.ai/api/search-image?query=Professional%20engineer%20portrait%2C%20confident%20male%20technician%2C%20modern%20corporate%20headshot%2C%20clean%20background%2C%20professional%20lighting%2C%20installation%20specialist&width=400&height=400&seq=team-3&orientation=squarish'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">Gentlemen's AV</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over 15 years of excellence in the audiovisual industry, we've built our reputation on delivering premium solutions that exceed expectations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2008, Gentlemen's AV began with a simple mission: to transform how businesses communicate through cutting-edge visual technology. What started as a small team of passionate AV professionals has grown into a leading provider of premium audiovisual solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We've had the privilege of working with Fortune 500 companies, educational institutions, and innovative startups, helping them create spaces that inspire, inform, and engage their audiences.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <i className="ri-award-fill text-yellow-400 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div>
                <div className="text-white font-semibold">Industry Certified</div>
                <div className="text-sm text-gray-400">CTS, InfoComm, and manufacturer certifications</div>
              </div>
            </div>
          </div>
          <div 
            className="aspect-video rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20AV%20company%20office%20space%20with%20professional%20team%20working%20on%20large%20LED%20display%20installations%2C%20high-tech%20workshop%20environment%2C%20engineers%20testing%20equipment%2C%20sophisticated%20audiovisual%20laboratory%20setup&width=600&height=400&seq=about-office-1&orientation=landscape')`
            }}
          ></div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center">
                <div 
                  className="w-24 h-24 rounded-full bg-cover bg-center mx-auto mb-6"
                  style={{ backgroundImage: `url('${member.image}')` }}
                ></div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-yellow-400 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}