'use client';

import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function SSRPageContent({
  products,
  now
}: {
  products: Product[];
  now: string;
}) {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Halaman SSR (Server-Side Rendering)</h1>
      <p className="mb-4 text-gray-600">Server-Side Rendering (SSR) melibatkan rendering halaman web di server sebelum mengirimkannya ke browser klien</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}