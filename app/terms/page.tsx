
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-300 text-lg">
                Last updated: January 2024
              </p>
            </div>

            {/* Content */}
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing and using Gentlemen's AV services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Services Description</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Gentlemen's AV provides premium audiovisual solutions including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>LED display systems and video walls</li>
                    <li>Digital signage solutions</li>
                    <li>Conference room technology</li>
                    <li>System design and integration</li>
                    <li>Installation and maintenance services</li>
                    <li>Technical support and training</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Terms of Use</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Payment terms for our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Quotes are valid for 30 days unless otherwise specified</li>
                    <li>50% deposit required to begin work on custom projects</li>
                    <li>Final payment due within 30 days of project completion</li>
                    <li>Late payments may incur additional fees</li>
                    <li>All prices are subject to change without notice</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Warranties and Guarantees</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We provide the following warranties:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>1-year warranty on all installation work</li>
                    <li>Manufacturer warranties on all equipment</li>
                    <li>30-day satisfaction guarantee on completed projects</li>
                    <li>Free technical support for the first 90 days</li>
                  </ul>
                  <p>
                    Warranties do not cover damage due to misuse, accidents, or normal wear and tear.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    To the maximum extent permitted by law, Gentlemen's AV shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Damages exceeding the total amount paid for services</li>
                    <li>Delays due to circumstances beyond our control</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    All content, designs, and intellectual property created by Gentlemen's AV remain our property unless otherwise agreed in writing. You may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Copy or reproduce our designs without permission</li>
                    <li>Use our trademarks or branding</li>
                    <li>Reverse engineer our custom solutions</li>
                    <li>Share proprietary information with third parties</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cancellation and Refunds</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Project cancellation terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cancellations before work begins: Full refund minus 10% processing fee</li>
                    <li>Cancellations after work has started: Charges apply for work completed</li>
                    <li>Custom orders cannot be cancelled once manufacturing begins</li>
                    <li>Installation cancellations require 48-hour notice</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of California, United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of San Francisco County.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                    <p><strong>Email:</strong> legal@gentlemensav.com</p>
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
