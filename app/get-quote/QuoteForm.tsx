
'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const projectTypes = [
    'LED Display Installation',
    'Video Wall System',
    'Digital Signage Network',
    'Conference Room AV',
    'Outdoor LED Displays',
    'Interactive Displays',
    'Control Room Setup',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    'Over $250,000',
    'Prefer to discuss'
  ];

  const showToastNotification = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
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
          type: 'quote',
          data: formData
        }),
      });

      if (response.ok) {
        showToastNotification('Quote request submitted successfully! We\'ll contact you within 24 hours with a detailed proposal.', 'success');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budgetRange: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      showToastNotification('Error submitting quote request. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6">
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg border transition-all duration-300 max-w-md ${
          toastType === 'success' 
            ? 'bg-green-900/90 text-green-100 border-green-700' 
            : 'bg-red-900/90 text-red-100 border-red-700'
        }`}>
          <div className="flex items-start space-x-3">
            <i className={`${toastType === 'success' ? 'ri-check-line' : 'ri-error-warning-line'} text-xl mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0`}></i>
            <span className="font-medium text-sm leading-relaxed">{toastMessage}</span>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-2 text-current hover:opacity-70 cursor-pointer flex-shrink-0"
            >
              <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-4xl">
        {/* Header with added top spacing */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Start Your Project
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Request a Quote
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your AV project and we'll provide you with a detailed quote tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Project Type
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      const dropdown = document.getElementById('projectTypeDropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 text-left focus:border-yellow-400 focus:outline-none transition-colors text-sm cursor-pointer pr-8"
                  >
                    {formData.projectType || 'Select project type'}
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center"></i>
                  </button>
                  <div id="projectTypeDropdown" className="hidden absolute z-10 w-full bg-gray-800 border border-gray-600 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          handleSelectChange('projectType', type);
                          document.getElementById('projectTypeDropdown')?.classList.add('hidden');
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 transition-colors cursor-pointer text-sm"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      const dropdown = document.getElementById('budgetDropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 text-left focus:border-yellow-400 focus:outline-none transition-colors text-sm cursor-pointer pr-8"
                  >
                    {formData.budgetRange || 'Select budget range'}
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center"></i>
                  </button>
                  <div id="budgetDropdown" className="hidden absolute z-10 w-full bg-gray-800 border border-gray-600 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => {
                          handleSelectChange('budgetRange', range);
                          document.getElementById('budgetDropdown')?.classList.add('hidden');
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 transition-colors cursor-pointer text-sm"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Project Details & Requirements *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                maxLength={500}
                rows={6}
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors text-sm resize-vertical"
                placeholder="Please describe your project requirements, timeline, location, and any specific needs or preferences..."
              />
              <div className="text-right text-gray-400 text-sm mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {/* File Upload Note */}
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <i className="ri-file-upload-line text-yellow-400 text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                <div>
                  <h3 className="text-white font-semibold mb-1">Supporting Documents</h3>
                  <p className="text-gray-300 text-sm">
                    Have floor plans, technical specifications, or reference images? Please mention them in your message and we'll follow up to collect any additional materials needed for your quote.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors cursor-pointer whitespace-nowrap ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                    Submit Quote Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-gray-300">
          <p className="mb-4">Need immediate assistance? Contact us directly:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line text-yellow-400 w-5 h-5 flex items-center justify-center"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line text-yellow-400 w-5 h-5 flex items-center justify-center"></i>
              <span>quotes@gentlemensav.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
