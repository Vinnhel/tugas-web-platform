// src/components/ProductCard.tsx
'use client';

import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          + Keranjang
        </button>
      </div>
    </div>
  );
}