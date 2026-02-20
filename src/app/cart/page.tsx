'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);

  // Hitung total harga
  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
        <p className="text-gray-600 mb-4">Keranjang Anda masih kosong</p>
        <Link href="/csr" className="text-blue-500 hover:underline">
          Mulai Belanja →
        </Link>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja ({cart.length} items)</h1>
      
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex items-center gap-4 border p-4 rounded-lg shadow">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
          Checkout (Demo)
        </button>
      </div>

      <Link href="/csr" className="inline-block mt-4 text-blue-500 hover:underline">
        ← Lanjut Belanja
      </Link>
    </main>
  );
}