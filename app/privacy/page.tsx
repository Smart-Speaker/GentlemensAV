
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-300 text-lg">
                Last updated: January 2024
              </p>
            </div>

            {/* Content */}
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    At Gentlemen's AV, we collect information you provide to us directly, such as when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Request a quote or consultation</li>
                    <li>Contact us through our website or phone</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p>
                    This information may include your name, email address, phone number, company information, and project details.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our AV solutions and services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you technical updates, security alerts, and support messages</li>
                    <li>Communicate with you about products, services, and promotions</li>
                    <li>Process transactions and send related information</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors such as lawyers and accountants</li>
                    <li>Law enforcement when required by law</li>
                    <li>Business partners for joint projects (with your consent)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your experience. These help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our services</li>
                    <li>Provide relevant content and advertisements</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                    <p><strong>Email:</strong> privacy@gentlemensav.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Tech Boulevard, San Francisco, CA 94105</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
