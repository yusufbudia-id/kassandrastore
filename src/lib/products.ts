export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  stock: number;
  category: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kemeja Casual Premium - Putih",
    price: 129000,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop"
    ],
    description: "Kemeja casual dengan potongan modern yang cocok untuk santai maupun semi-formal. Bahan katun premium yang sejuk dan nyaman dipakai seharian.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Putih", "Hitam", "Navy"],
    material: "Katun Premium",
    stock: 50,
    category: "Pria",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Dress Floral Summer - Pink",
    price: 199000,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=750&fit=crop"
    ],
    description: "Dress dengan motif floral yang cantik dan feminim. Potongan A-line yang mempercantik siluet tubuh. Cocok untuk acara santai maupun jalan-jalan.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Kuning", "Biru"],
    material: "Katun Rayon",
    stock: 35,
    category: "Wanita",
    isBestSeller: true,
    isNew: true
  },
  {
    id: "3",
    name: "Kaos Oversized Street - Hitam",
    price: 89000,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop"
    ],
    description: "Kaos oversized dengan desain street style modern. Bahan cotton combed 30s yang lembut dan tidak mudah melar. Fitur drop shoulder yang kekinian.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Hitam", "Putih", "Abu-abu"],
    material: "Cotton Combed 30s",
    stock: 100,
    category: "Unisex",
    isBestSeller: true
  },
  {
    id: "4",
    name: "Jaket Denim Vintage - Biru",
    price: 249000,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1520975357542-82da6d7c9c12?w=600&h=750&fit=crop"
    ],
    description: "Jaket denim dengan potongan klasik yang timeless. Bahan denim berkualitas tinggi dengan finishing vintage yang stylish. Cocok untuk layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Biru", "Hitam"],
    material: "Denim Premium",
    stock: 25,
    category: "Unisex",
    isNew: true
  },
  {
    id: "5",
    name: "Blouse Kerja Wanita - Cream",
    price: 149000,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=750&fit=crop"
    ],
    description: "Blouse kerja dengan desain elegan dan profesional. Potongan yang flattering dan cocok untuk acara formal maupun casual.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Hitam"],
    material: "Satin Premium",
    stock: 40,
    category: "Wanita"
  },
  {
    id: "6",
    name: "Celana Chino Slim Fit - Khaki",
    price: 179000,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop"
    ],
    description: "Celana chino dengan potongan slim fit yang modern. Bahan stretchable yang nyaman untuk aktivitas sehari-hari. Cocok untuk casual maupun semi-formal.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Hitam", "Navy"],
    material: "Cotton Spandex",
    stock: 60,
    category: "Pria",
    isBestSeller: true
  },
  {
    id: "7",
    name: "Rok Plisket Midi - Merah",
    price: 129000,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0ujb7?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0ujb7?w=600&h=750&fit=crop"
    ],
    description: "Rok plisket dengan panjang midi yang elegan. Bahan crepe yang jatuh dan tidak mudah kusut. Cocok untuk acara formal maupun santai.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Merah", "Hitam", "Maroon"],
    material: "Crepe Premium",
    stock: 45,
    category: "Wanita",
    isNew: true
  },
  {
    id: "8",
    name: "Kemeja Flanel Pria - Kotak",
    price: 159000,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop"
    ],
    description: "Kemeja flanel dengan motif kotak-kotak klasik. Bahan flanel premium yang hangat dan nyaman. Cocok untuk casual hangout.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Merah-Kotak", "Biru-Kotak", "Hijau-Kotak"],
    material: "Flanel Premium",
    stock: 55,
    category: "Pria"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
