'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { HowToOrderSection } from '@/components/HowToOrderSection';
import { AboutSection } from '@/components/AboutSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { Product } from '@/lib/products';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleProductClick = (product: Product) => {
    router.push(`/katalog?search=${encodeURIComponent(product.name)}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div>
          <HeroSection />
        </div>

        <div className="animate-slide-up stagger-1">
          <FeaturesSection />
        </div>

        <div className="animate-slide-up stagger-2">
          <FeaturedProducts onProductClick={handleProductClick} />
        </div>

        <div className="animate-slide-up stagger-3">
          <HowToOrderSection />
        </div>

        <div className="animate-slide-up stagger-4">
          <AboutSection />
        </div>

        <div className="animate-slide-up stagger-5">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
