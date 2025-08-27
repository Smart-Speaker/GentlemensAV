
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'info@gentlemensav.com',
      subtext: 'Response within 24hrs'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Office',
      details: '123 Tech Boulevard',
      subtext: 'San Francisco, CA 94105'
    },
    {
      icon: 'ri-time-line',
      title: 'Support',
      details: '24/7 Emergency',
      subtext: 'Always available'
    }
  ];

  const showToastNotification = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleQuickContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      showToastNotification('Please fill in all required fields.', 'error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aWl5dmloa2xqd2FrY3NpZG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjI0NzMsImV4cCI6MjA3MTg5ODQ3M30.1u7KlRjCb2cuhOqhi3KtmcX0g9q9LgLInmAp9KzKiy4',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aWl5dmloa2xqd2FrY3NpZG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMjI0NzMsImV4cCI6MjA3MTg5ODQ3M30.1u7KlRjCb2cuhOqhi3KtmcX0g9q9LgLInmAp9KzKiy4',
        },
        body: JSON.stringify({
          type: 'contact',
          data: data
        }),
      });

      if (response.ok) {
        showToastNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      showToastNotification('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg border transition-all duration-300 ${
          toastType === 'success' 
            ? 'bg-green-900/90 text-green-100 border-green-700' 
            : 'bg-red-900/90 text-red-100 border-red-700'
        }`}>
          <div className="flex items-center space-x-3">
            <i className={`${toastType === 'success' ? 'ri-check-line' : 'ri-error-warning-line'} text-xl w-5 h-5 flex items-center justify-center`}></i>
            <span className="font-medium">{toastMessage}</span>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-4 text-current hover:opacity-70 cursor-pointer"
            >
              <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space with premium AV solutions? Contact our team of experts to discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-yellow-400 text-xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-yellow-400 font-medium">{info.details}</p>
                    <p className="text-sm text-gray-400">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                  <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                  <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                  <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
            <form id="quick-contact" onSubmit={handleQuickContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 resize-none text-sm"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
                <p className="text-xs text-gray-400 mt-1">Maximum 500 characters</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Need detailed project planning?
              </p>
              <Link 
                href="/get-quote"
                className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
