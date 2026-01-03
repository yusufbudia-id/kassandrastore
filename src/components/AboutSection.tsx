'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Clock, MapPin, Instagram, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '6285774491378';
const EMAIL = 'hello@kassandrastore.id';
const INSTAGRAM = '@kassandrastore_id';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Tentang KassandraStore
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Brand fashion lokal dengan kualitas premium dan harga terjangkau
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  Cerita Kami
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  KassandraStore adalah brand fashion lokal yang berdiri sejak 2020.
                  Kami berkomitmen untuk menyediakan pakaian berkualitas tinggi
                  dengan harga yang terjangkau untuk semua kalangan.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Setiap produk kami dibuat dengan bahan pilihan yang nyaman
                  dipakai dan desain yang selalu mengikuti tren fashion terkini.
                  Kami percaya bahwa gaya yang baik tidak harus mahal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  Misi Kami
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">
                      Menyediakan fashion berkualitas dengan harga terjangkau
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">
                      Mendukung UMKM lokal dengan mempekerjakan tenaga kerja lokal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">
                      Memberikan pelayanan terbaik dan responsif kepada pelanggan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">
                      Selalu update dengan tren fashion terkini
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-6">
                  Hubungi Kami
                </h3>

                {/* WhatsApp */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-medium text-stone-900">WhatsApp</span>
                  </div>
                  <p className="text-stone-600 ml-8 mb-2">
                    +62 857-7491-378
                  </p>
                  <Button
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white ml-8"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Sekarang
                  </Button>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-stone-600 mr-3" />
                    <span className="font-medium text-stone-900">Email</span>
                  </div>
                  <p className="text-stone-600 ml-8">
                    {EMAIL}
                  </p>
                </div>

                {/* Jam Operasional */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-stone-600 mr-3" />
                    <span className="font-medium text-stone-900">
                      Jam Operasional
                    </span>
                  </div>
                  <ul className="text-stone-600 ml-8 space-y-1">
                    <li>Senin - Jumat: 08:00 - 17:00 WIB</li>
                    <li>Sabtu: 09:00 - 15:00 WIB</li>
                    <li>Minggu: Libur</li>
                  </ul>
                </div>

                {/* Lokasi */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-stone-600 mr-3" />
                    <span className="font-medium text-stone-900">Lokasi</span>
                  </div>
                  <p className="text-stone-600 ml-8">
                    Jakarta, Indonesia
                  </p>
                  <p className="text-sm text-stone-500 ml-8 mt-1">
                    Pengiriman ke seluruh Indonesia
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <div className="flex items-center mb-3">
                    <Instagram className="w-5 h-5 text-pink-600 mr-3" />
                    <span className="font-medium text-stone-900">
                      Follow Kami
                    </span>
                  </div>
                  <div className="ml-8 space-y-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-stone-600 hover:text-stone-900 hover:text-pink-600 transition-colors"
                    >
                      <span className="text-pink-600 mr-2">{INSTAGRAM}</span>
                      - Instagram
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      <span className="mr-2">@kassandrastore_id</span>
                      - TikTok
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA Card */}
            <Card className="bg-stone-900 text-white border-none animate-scale-in" style={{ animationDelay: '500ms' }}>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-bold mb-3">
                  Punya Pertanyaan?
                </h3>
                <p className="text-stone-300 text-sm mb-4">
                  Jangan ragu untuk menghubungi kami. Tim kami siap membantu
                  Anda 24/7 via WhatsApp!
                </p>
                <Button
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Tanya via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
