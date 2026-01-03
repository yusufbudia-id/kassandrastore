'use client';

import { Check, Zap, Heart, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function FeaturesSection() {
  const router = useRouter();

  const features = [
    {
      icon: Heart,
      title: 'Bahan Nyaman',
      description:
        'Semua produk menggunakan bahan berkualitas premium yang lembut dan sejuk di kulit.',
    },
    {
      icon: Zap,
      title: 'Harga Terjangkau',
      description:
        'Dapatkan kualitas terbaik dengan harga yang bersahabat dan ramah di kantong.',
    },
    {
      icon: Check,
      title: 'Model Kekinian',
      description:
        'Selalu update dengan tren fashion terbaru yang stylish dan modern.',
    },
    {
      icon: Truck,
      title: 'Pengiriman Cepat',
      description:
        'Siap kirim ke seluruh Indonesia dengan jaringan ekspedisi terpercaya.',
    },
  ];

  const handleViewCatalog = () => {
    router.push('/katalog');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Kualitas terbaik dengan harga yang tetap terjangkau untuk semua
            kalangan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 hover:shadow-lg transition-all duration-300 border border-stone-200 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <feature.icon className="w-7 h-7 text-stone-700" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-600 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <button
            onClick={handleViewCatalog}
            className="inline-flex items-center text-stone-700 hover:text-stone-900 font-medium text-base md:text-lg transition-colors"
          >
            Lihat Katalog Produk
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
