'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Eye, Star, Sparkles, Filter } from 'lucide-react';
import { products, formatPrice, Product } from '@/lib/products';
import { useRouter } from 'next/navigation';

const WHATSAPP_NUMBER = '6285774491378';

interface FullCatalogProps {
  onProductClick: (product: Product) => void;
  initialSearch?: string;
}

export function FullCatalog({ onProductClick, initialSearch = '' }: FullCatalogProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'Wanita', 'Pria', 'Unisex'];
  const categoryLabels: Record<string, string> = {
    all: 'Semua',
    Wanita: 'Wanita',
    Pria: 'Pria',
    Unisex: 'Unisex',
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.colors.some(c => c.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const handleQuickOrder = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Halo, saya ingin memesan produk ini:\n\nNama: ${product.name}\nHarga: ${formatPrice(product.price)}\n\nApakah stok masih tersedia?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Katalog Lengkap
          </h1>
          <p className="text-base md:text-lg text-stone-600">
            Temukan koleksi fashion favoritmu
          </p>
        </div>

        {/* Local Search in Catalog */}
        {searchQuery && (
          <div className="max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '50ms' }}>
            <div className="bg-stone-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-stone-600" />
                <p className="text-sm text-stone-700">
                  Filter aktif: <span className="font-semibold">"{searchQuery}"</span>
                </p>
                <Button
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  variant="outline"
                  className="ml-auto border-stone-300"
                >
                  Hapus Filter
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Toggle (Mobile) */}
        <div className="md:hidden mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? 'Sembunyikan Filter' : 'Tampilkan Filter'}
          </Button>
        </div>

        {/* Category Filter */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-8 animate-slide-up`} style={{ animationDelay: '150ms' }}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
        </div>

        {/* Results Count */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <p className="text-stone-600 text-sm">
            {filteredProducts.length} produk ditemukan
            {searchQuery && ` untuk pencarian "${searchQuery}"`}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-stone-200 animate-slide-up"
                onClick={() => onProductClick(product)}
                style={{ animationDelay: `${300 + (index * 30)}ms` }}
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
        ) : (
          <div className="text-center py-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Filter className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-900 mb-2">
              Tidak ada produk ditemukan
            </h3>
            <p className="text-stone-600 mb-6">
              Coba cari dengan kata kunci lain atau reset filter
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {searchQuery && (
                <Button
                  onClick={() => setSearchQuery('')}
                  variant="outline"
                  className="border-stone-300"
                >
                  Reset Pencarian
                </Button>
              )}
              {selectedCategory !== 'all' && (
                <Button
                  onClick={() => setSelectedCategory('all')}
                  variant="outline"
                  className="border-stone-300"
                >
                  Reset Kategori
                </Button>
              )}
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Tanya Admin via WhatsApp
              </Button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 md:mt-16 text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
            <p className="text-stone-600 mb-4 text-sm md:text-base">
              Tidak menemukan yang kamu cari?
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Tanya Admin via WhatsApp
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
