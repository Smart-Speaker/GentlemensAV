
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      }, 500); // Increased delay for better reliability
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
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={goToHome}
            className="text-2xl font-['Pacifico'] text-white cursor-pointer"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Gentlemen's AV
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={goToHome}
              className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Link 
              href="/get-quote" 
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
          >
            <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={goToHome}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
              <Link 
                href="/get-quote" 
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
