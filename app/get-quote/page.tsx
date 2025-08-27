
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteForm from './QuoteForm';

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      {/* Small Hero Section */}
      <section 
        className="relative pt-32 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20AV%20consultation%20meeting%20with%20business%20people%20discussing%20LED%20display%20solutions%2C%20modern%20office%20environment%20with%20technology%20displays%20in%20background%2C%20elegant%20corporate%20setting%20with%20premium%20audiovisual%20equipment&width=1920&height=600&seq=quote-hero-bg&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="text-yellow-400">Amazing</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your space with premium AV solutions? Get a personalized quote tailored to your project needs.
          </p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}
