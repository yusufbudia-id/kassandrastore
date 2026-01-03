'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '6285774491378';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Apakah bisa COD (Bayar di Tempat)?',
      answer:
        'Mohon maaf, saat ini kami belum melayani COD. Pembayaran dilakukan via Transfer Bank atau QRIS sebelum barang dikirim. Namun, kami menjamin keamanan transaksi Anda dengan sistem konfirmasi yang jelas.',
    },
    {
      question: 'Berapa lama proses pengiriman?',
      answer:
        'Estimasi pengiriman tergantung lokasi tujuan:\n• Jabodetabek: 1-2 hari kerja\n• Pulau Jawa: 2-3 hari kerja\n• Luar Pulau Jawa: 3-5 hari kerja\n\nKami akan memberikan resi pengiriman setelah barang dikirim.',
    },
    {
      question: 'Apakah bisa tukar ukuran?',
      answer:
        'Ya, kami menerima penukaran ukuran dengan ketentuan:\n• Penukaran maksimal 3 hari setelah barang diterima\n• Barang harus dalam kondisi original (tidak dipakai, tag masih ada)\n• Ongkir penukaran ditanggung pembeli\n• Silakan hubungi admin via WhatsApp untuk proses penukaran',
    },
    {
      question: 'Apakah stok yang terdisplay ready?',
      answer:
        'Sebagian besar produk kami ready stock. Namun, stok dapat berubah sewaktu-waktu. Kami sarankan Anda konfirmasi ketersediaan stok terlebih dahulu via WhatsApp sebelum melakukan pembayaran.',
    },
    {
      question: 'Bagaimana cara cek status pesanan?',
      answer:
        'Anda dapat mengecek status pesanan kapan saja dengan menghubungi admin via WhatsApp. Admin kami akan memberikan update status pesanan Anda, termasuk nomor resi pengiriman setelah barang dikirim.',
    },
    {
      question: 'Apakah ada garansi jika barang cacat?',
      answer:
        'Ya, kami memberikan garansi jika barang yang diterima cacat atau tidak sesuai dengan deskripsi. Silakan foto barang yang bermasalah dan kirim ke admin via WhatsApp dalam waktu 24 jam setelah barang diterima. Kami akan mengganti atau refund sesuai kesepakatan.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            FAQ (Tanya Jawab)
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            Pertanyaan yang sering diajukan oleh pelanggan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openIndex === index}
              onOpenChange={() => toggleFAQ(index)}
              className="border border-stone-200 rounded-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CollapsibleTrigger className="w-full flex items-center justify-between p-4 md:p-6 bg-white hover:bg-stone-50 transition-colors text-left">
                <span className="font-medium text-stone-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-stone-600 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <p className="text-stone-600 mb-4 text-sm md:text-base">
            Punya pertanyaan lain yang belum terjawab?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Tanya via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
