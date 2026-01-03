'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const WHATSAPP_NUMBER = '6285774491378';

export function HeroSection() {
  const router = useRouter();
  
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      'Halo, saya ingin melihat koleksi terbaru KassandraStore. Apakah ada promo hari ini?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleCatalogClick = () => {
    router.push('/katalog');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 pt-20 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm animate-scale-in">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-stone-700">
                Koleksi Baru Siap Kirim! 🚀
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 leading-tight animate-slide-up">
              Temukan Gaya
              <br />
              <span className="text-stone-600">Fashion Terbaikmu</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '50ms' }}>
              Koleksi baju modern dengan kualitas premium dan harga terjangkau.
              Siap kirim ke seluruh Indonesia! 🇮🇩
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '100ms' }}>
              <Button
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Belanja via WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={handleCatalogClick}
                className="bg-white hover:bg-stone-100 text-stone-800 border-2 border-stone-300 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Lihat Katalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-stone-600 animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Bahan Premium</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Siap Kirim</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Garansi Return</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Fashion Collection"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Promo Spesial</p>
                    <p className="text-lg font-bold text-stone-900">
                      Diskon 20% Pembelian Pertama!
                    </p>
                  </div>
                  <Button
                    onClick={handleWhatsAppOrder}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full whitespace-nowrap"
                  >
                    Ambil Promo
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-stone-300/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-400/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
