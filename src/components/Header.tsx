'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, List, ChevronRight } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';

interface HeaderProps {
  isCatalogPage?: boolean;
}

const WHATSAPP_NUMBER = '6285774491378';

export function Header({ isCatalogPage = false }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    // Entrance animation for header
    setTimeout(() => setIsHeaderLoaded(true), 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveNav(section);
    
    if (section === 'home') {
      router.push('/');
    } else if (pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${section}`);
    }
    setIsMobileMenuOpen(false);
    
    // Reset active nav after scroll
    setTimeout(() => setActiveNav(null), 1000);
  };

  const navItems = [
    { id: 'home', label: 'Beranda', icon: ShoppingBag },
    { id: 'catalog', label: 'Katalog', icon: List },
    { id: 'how-to-order', label: 'Cara Order', icon: ChevronRight },
    { id: 'about', label: 'Tentang Kami', icon: ChevronRight },
    { id: 'faq', label: 'FAQ', icon: ChevronRight },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveNav(null);
  };

  const handleLogoClick = () => {
    setActiveNav('home');
    router.push('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        ref={headerRef}
        className={`${
          isHeaderLoaded ? 'animate-header-in' : ''
        } transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/0 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group animate-scale-in"
              onClick={handleLogoClick}
              style={{ animationDelay: '50ms' }}
            >
              <img
                src="/logo.png"
                alt="KassandraStore"
                className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span className={`text-xl sm:text-2xl font-bold transition-all duration-300 group-hover:text-stone-900 ${
                  activeNav === 'home' ? 'text-green-600' : 'text-stone-800'
                }`}>
                KassandraStore
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'catalog') {
                      router.push('/katalog');
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                  className={`text-stone-700 hover:text-stone-900 transition-all duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-stone-900 rounded-full px-4 py-2 relative overflow-hidden group animate-slide-in ${
                    activeNav === item.id ? 'text-green-600' : ''
                  }`}
                  style={{ animationDelay: `${100 + (item.id === 'home' ? 0 : item.id === 'catalog' ? 50 : item.id === 'how-to-order' ? 100 : item.id === 'about' ? 150 : 200)}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeNav === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 animate-underline"></span>
                  )}
                  <span className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
                </button>
              ))}
            </nav>

            {/* Search Bar & CTA - Desktop */}
            <div className="hidden md:flex items-center space-x-3 animate-scale-in" style={{ animationDelay: '250ms' }}>
              <div className="w-48 lg:w-56">
                <SearchBar />
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm whitespace-nowrap hover:shadow-lg transition-all duration-300"
              >
                Belanja via WhatsApp
              </Button>
            </div>

            {/* Mobile: Logo, Search, Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Logo - Mobile */}
              <img
                src="/logo.png"
                alt="KassandraStore"
                className="w-7 h-7"
              />

              {/* Search Icon - Mobile */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(true);
                  setActiveNav(null);
                  setTimeout(() => {
                    const searchInput = document.querySelector('#mobile-search-input') as HTMLInputElement;
                    searchInput?.focus();
                  }, 100);
                }}
                className="p-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
              >
                <Search className="w-4.5 h-4.5 text-stone-700" />
              </button>

              {/* Menu List Button - Mobile */}
              <button
                onClick={handleMobileMenuToggle}
                className={`p-2.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-900 animate-scale-in ${
                  isMobileMenuOpen 
                    ? 'bg-stone-900 text-white shadow-lg rotate-90 scale-110' 
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
                style={{ animationDelay: '150ms' }}
              >
                <List className={`w-4.5 h-4.5 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'text-white' : 'text-stone-700'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-slide-up"
            onClick={handleMobileMenuToggle}
          ></div>

          {/* Menu Content */}
          <div 
            className="absolute inset-y-0 right-0 w-full max-w-[280px] bg-white shadow-2xl"
            style={{
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              opacity: isMobileMenuOpen ? '1' : '0',
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white animate-slide-up" style={{ animationDelay: '50ms' }}>
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="KassandraStore"
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold text-stone-800">
                  KassandraStore
                </span>
              </div>
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-lg hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 animate-scale-in"
                style={{ animationDelay: '100ms' }}
              >
                <X className="w-5 h-5 text-stone-700" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-stone-200 bg-white animate-slide-up" style={{ animationDelay: '100ms' }}>
              <SearchBar />
            </div>

            {/* Mobile Nav Items */}
            <div className="flex flex-col overflow-y-auto bg-white" style={{ maxHeight: 'calc(100vh - 220px)' }}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    if (item.id === 'catalog') {
                      router.push('/katalog');
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                  className={`w-full text-left px-4 py-4 border-b border-stone-100 hover:bg-stone-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-900 group relative overflow-hidden ${
                    activeNav === item.id ? 'bg-green-50' : ''
                  } animate-slide-up`}
                  style={{ animationDelay: `${150 + (index * 30)}ms` }}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeNav === item.id 
                          ? 'bg-green-600 text-white scale-110 shadow-lg' 
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}>
                        {item.icon && <item.icon className="w-4.5 h-4.5" />}
                      </div>
                      <span className={`font-medium transition-all duration-300 ${
                        activeNav === item.id ? 'text-green-600' : 'text-stone-900'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                      activeNav === item.id ? 'text-green-600 translate-x-1' : 'text-stone-400'
                    }`} />
                  </div>
                  {activeNav === item.id && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-green-600 z-20"></div>
                  )}
                  <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0"></div>
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-stone-200 bg-gradient-to-r from-stone-50 to-white animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center animate-scale-in"
                style={{ animationDelay: '450ms' }}
              >
                Belanja via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
