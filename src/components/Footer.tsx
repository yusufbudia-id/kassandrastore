'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '6285774491378';
const EMAIL = 'hello@kassandrastore.id';
const INSTAGRAM = '@kassandrastore_id';

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (target: string) => {
    if (target.startsWith('/')) {
      router.push(target);
    } else if (pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${target}`);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0ms' }}>
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 text-left w-full group focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <img
                src="/logo.png"
                alt="KassandraStore"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold">KassandraStore</span>
            </button>
            <p className="text-stone-300 text-sm leading-relaxed">
              Brand fashion lokal dengan kualitas premium dan harga terjangkau.
              Siap melayani pengiriman ke seluruh Indonesia.
            </p>
            <div className="flex items-center space-x-2 text-sm text-stone-300">
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              <span>Made with love in Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '50ms' }}>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-stone-300 hover:text-white transition-colors text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/katalog')}
                  className="text-stone-300 hover:text-white transition-colors text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  Katalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('how-to-order')}
                  className="text-stone-300 hover:text-white transition-colors text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  Cara Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className="text-stone-300 hover:text-white transition-colors text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('faq')}
                  className="text-stone-300 hover:text-white transition-colors text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">WhatsApp</p>
                  <p className="text-stone-400 text-sm">+62 857-7491-378</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">Email</p>
                  <p className="text-stone-400 text-sm">{EMAIL}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-stone-300 text-sm font-medium">Instagram</p>
                  <p className="text-stone-400 text-sm">{INSTAGRAM}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '150ms' }}>
            <h3 className="text-lg font-semibold mb-4">Siap Berbelanja?</h3>
            <p className="text-stone-300 text-sm mb-4">
              Hubungi kami sekarang untuk pemesanan atau tanya-tanya seputar
              produk!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm text-center md:text-left">
              © {currentYear} KassandraStore. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-stone-400 hover:text-white text-sm transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Kembali ke atas
              <ArrowUp className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button (Mobile) */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </button>
    </footer>
  );
}
