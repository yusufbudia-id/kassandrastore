'use client';

import { Card, CardContent, Button } from '@/components/ui/card';
import { MessageCircle, CreditCard, CheckCircle, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HowToOrderSection() {
  const router = useRouter();

  const steps = [
    {
      icon: MessageCircle,
      title: 'Pilih & Pesan via WhatsApp',
      description:
        'Pilih produk yang kamu suka, lalu klik tombol "Pesan via WhatsApp". Pesanan otomatis terkirim ke admin.',
    },
    {
      icon: CheckCircle,
      title: 'Konfirmasi Stok & Total',
      description:
        'Admin akan membalas segera untuk mengkonfirmasi ketersediaan stok dan total harga pembayaran.',
    },
    {
      icon: CreditCard,
      title: 'Pembayaran',
      description:
        'Lakukan pembayaran via Transfer Bank atau QRIS. Kirim bukti pembayaran via WhatsApp.',
    },
    {
      icon: Truck,
      title: 'Pengiriman',
      description:
        'Setelah pembayaran dikonfirmasi, pesanan akan dikirim menggunakan ekspedisi terpercaya. Resi akan dikirim via WhatsApp.',
    },
  ];

  const paymentMethods = [
    {
      name: 'Transfer Bank',
      details: ['BCA', 'Mandiri', 'BRI', 'BNI'],
      icon: '🏦',
    },
    {
      name: 'QRIS',
      details: ['Scan QRIS dari berbagai e-wallet', 'GoPay, OVO, Dana, ShopeePay'],
      icon: '📱',
    },
  ];

  const handleViewCatalog = () => {
    router.push('/katalog');
  };

  return (
    <section id="how-to-order" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Cara Order & Pembayaran
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Proses pemesanan mudah dan cepat langsung via WhatsApp
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${300 + (index * 50)}ms` }}>
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Step Card */}
              <Card className="h-full pt-6 border-stone-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-stone-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-stone-300">
                  <svg
                    className="w-8 h-8"
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
              )}
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '700ms' }}>
          <h3 className="text-2xl font-bold text-stone-900 text-center mb-8">
            Metode Pembayaran
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="border-stone-200 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${750 + (index * 50)}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{method.icon}</span>
                    <h4 className="text-xl font-semibold text-stone-900">
                      {method.name}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-stone-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center animate-slide-up" style={{ animationDelay: '1000ms' }}>
          <p className="text-stone-600 mb-4 text-sm md:text-base">
            Siap untuk memesan? Hubungi kami sekarang!
          </p>
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
                d="M19 9l-7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
