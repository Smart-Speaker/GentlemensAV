
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // Navigate to home page first
      router.push('/');
      // Wait for navigation and page load to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // Increased delay to ensure full page load
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const goToHome = () => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // Navigate to home page
      router.push('/');
    } else {
      // Already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div 
              className="text-2xl font-['Pacifico'] text-white mb-4"
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              Gentlemen's AV
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming spaces with cutting-edge LED displays and premium digital signage solutions that redefine visual excellence.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={goToHome}
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <i className="ri-phone-line text-yellow-400 mt-1 w-4 h-4 flex items-center justify-center"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-mail-line text-yellow-400 mt-1 w-4 h-4 flex items-center justify-center"></i>
                <span>info@gentlemensav.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-map-pin-line text-yellow-400 mt-1 w-4 h-4 flex items-center justify-center"></i>
                <span>123 Tech Boulevard<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gentlemen's AV. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/get-quote" className="text-gray-400 hover:text-yellow-400 text-sm cursor-pointer">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
