'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Star } from 'lucide-react';
import { getBestSellers, formatPrice, Product } from '@/lib/products';
import { useRouter } from 'next/navigation';

const WHATSAPP_NUMBER = '6285774491378';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

export function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
  const router = useRouter();
  const featuredProducts = getBestSellers().slice(0, 4);

  const handleQuickOrder = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Halo, saya ingin memesan produk ini:\n\nNama: ${product.name}\nHarga: ${formatPrice(product.price)}\n\nApakah stok masih tersedia?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleViewAllClick = () => {
    router.push('/katalog');
  };

  return (
    <section id="featured" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4 animate-scale-in">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Best Seller
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Produk Terlaris
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Koleksi favorit pelanggan kami
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-stone-200 animate-slide-up"
              onClick={() => onProductClick(product)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Best Seller Badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Best Seller
                  </span>
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

        {/* View All CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Button
            onClick={handleViewAllClick}
            className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Lihat Semua Katalog
          </Button>
        </div>
      </div>
    </section>
  );
}
