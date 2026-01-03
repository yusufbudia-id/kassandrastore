'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { products, formatPrice, Product } from '@/lib/products';

interface SearchBarProps {
  className?: string;
}

const WHATSAPP_NUMBER = '6285774491378';

export function SearchBar({ className = '' }: SearchBarProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const query = searchQuery.toLowerCase();
      const results = products.filter((p) => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.colors.some(c => c.toLowerCase().includes(query))
      ).slice(0, 5); // Limit to 5 results
      
      setFilteredProducts(results);
      setIsOpen(results.length > 0);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsOpen(false);
      setSearchQuery('');
      setFilteredProducts([]);
      router.push(`/katalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleProductClick = (product: Product) => {
    setIsOpen(false);
    setSearchQuery('');
    setFilteredProducts([]);
    router.push(`/katalog?search=${encodeURIComponent(product.name)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredProducts([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            if (filteredProducts.length > 0) {
              setIsOpen(true);
            }
          }}
          className="w-full pl-12 pr-10 py-2.5 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent text-sm bg-white"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 focus:outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-700 focus:outline-none"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* Dropdown with search results */}
      {isOpen && filteredProducts.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-stone-200 z-50 max-h-96 overflow-y-auto"
        >
          <div className="p-2">
            <div className="text-xs text-stone-500 px-3 py-2 mb-2 border-b border-stone-100">
              <span className="font-medium">Hasil pencarian</span>
              <span className="ml-2 bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                {filteredProducts.length} produk
              </span>
            </div>

            <div className="space-y-1">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleProductClick(product)}
                  className="w-full text-left hover:bg-stone-50 transition-colors rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-stone-900"
                >
                  <div className="flex items-center gap-3">
                    {/* Product Image */}
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-stone-500">
                          {product.category}
                        </span>
                        <span className="text-xs font-semibold text-stone-900">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 text-stone-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* View All Results Link */}
            <div className="mt-2 pt-2 border-t border-stone-100">
              <button
                type="button"
                onClick={handleSearch}
                className="w-full text-center text-sm text-green-600 hover:text-green-700 font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded-lg"
              >
                Lihat semua hasil untuk "{searchQuery}"
              </button>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery.trim().length >= 2 && filteredProducts.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-stone-200 z-50"
        >
          <div className="p-6 text-center">
            <Search className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-sm font-medium text-stone-900 mb-1">
              Tidak ada produk ditemukan
            </p>
            <p className="text-xs text-stone-500 mb-4">
              Coba kata kunci lain atau cari di katalog lengkap
            </p>
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center text-sm bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <Search className="w-4 h-4 mr-2" />
              Cari di Katalog
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
