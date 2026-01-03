'use client';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { FullCatalog } from '@/components/FullCatalog';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { Footer } from '@/components/Footer';
import { Product } from '@/lib/products';
import { useState } from 'react';

export const dynamic = "force-dynamic"


export default function KatalogPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pt-16 md:pt-20">
      <Header isCatalogPage={true} />
      
      <main className="flex-1">
        <FullCatalog
          onProductClick={handleProductClick}
          initialSearch={searchQuery}
        />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
