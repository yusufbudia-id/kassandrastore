'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Eye, Star, Sparkles } from 'lucide-react';
import { products, formatPrice, Product } from '@/lib/products';

interface ProductCatalogProps {
  onProductClick: (product: Product) => void;
}

export function ProductCatalog({ onProductClick }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Wanita', 'Pria', 'Unisex'];
  const categoryLabels: Record<string, string> = {
    all: 'Semua',
    Wanita: 'Wanita',
    Pria: 'Pria',
    Unisex: 'Unisex',
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleQuickOrder = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Halo, saya ingin memesan produk ini:\n\nNama: ${product.name}\nHarga: ${formatPrice(product.price)}\n\nApakah stok masih tersedia?`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Katalog Produk
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Pilih koleksi fashion favoritmu dan pesan langsung via WhatsApp
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-stone-900 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-stone-200"
              onClick={() => onProductClick(product)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-stone-900 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Baru
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Best Seller
                    </span>
                  )}
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product);
                    }}
                    className="bg-white text-stone-900 hover:bg-stone-100 rounded-full"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => handleQuickOrder(e, product)}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-4">
                <h3 className="font-semibold text-stone-900 text-sm md:text-base mb-1 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-500 mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg font-bold text-stone-900">
                    {formatPrice(product.price)}
                  </p>
                  <Button
                    size="sm"
                    onClick={(e) => handleQuickOrder(e, product)}
                    className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                  >
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-stone-600 mb-4 text-sm md:text-base">
            Tidak menemukan yang kamu cari?
          </p>
          <Button
            onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Tanya Admin via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
