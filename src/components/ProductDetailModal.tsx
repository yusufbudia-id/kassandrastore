'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';

const WHATSAPP_NUMBER = '6285774491378';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0);
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin memesan baju berikut:\n\n` +
      `Nama Produk: ${product.name}\n` +
      `Ukuran: ${selectedSize}\n` +
      `Warna: ${selectedColor}\n` +
      `Jumlah: ${quantity}\n` +
      `Harga: ${formatPrice(product.price * quantity)}\n\n` +
      `Mohon konfirmasi ketersediaan stok. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-stone-700" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-[3/4] md:aspect-square bg-stone-100">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Image Navigation */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-stone-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-stone-700" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-stone-900 w-6'
                        : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-stone-900 text-white text-xs px-3 py-1.5 rounded-full">
                  Baru
                </span>
              )}
              {product.isBestSeller && (
                <span className="bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Best Seller
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-stone-900">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            {/* Price & Category */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-3xl font-bold text-stone-900">
                  {formatPrice(product.price)}
                </p>
                <p className="text-sm text-stone-500">{product.category}</p>
              </div>
              {product.stock > 0 ? (
                <span className="text-green-600 text-sm font-medium">
                  Stok Tersedia ({product.stock})
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  Stok Habis
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-900 mb-2">Deskripsi</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-900 mb-3">Ukuran</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-900 mb-3">Warna</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-900 mb-3">Jumlah</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border-2 border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors text-lg font-medium"
                >
                  -
                </button>
                <span className="w-12 text-center text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border-2 border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Material Info */}
            <div className="mb-6 p-4 bg-stone-50 rounded-lg">
              <h3 className="font-semibold text-stone-900 mb-2">Informasi Bahan</h3>
              <p className="text-stone-600 text-sm">{product.material}</p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleWhatsAppOrder}
              disabled={product.stock === 0}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan Sekarang (WhatsApp)
            </Button>

            {product.stock > 0 && (
              <p className="text-center text-sm text-stone-500 mt-3">
                Pesanan akan langsung terkirim ke WhatsApp admin
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
