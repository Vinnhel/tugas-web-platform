'use client'; // Pindahkan 'use client' ke file ini

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Toast from '@/components/Toast';

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
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setToastMessage(`${product.title} ditambahkan ke keranjang!`);
    setShowToast(true);
  };

  return (
    <>
      <Toast 
        show={showToast} 
        message={toastMessage} 
        onClose={() => setShowToast(false)} 
      />
      <main className="p-10">
        <h1 className="text-2xl font-bold mb-4">Halaman SSR (Server-Side Rendering)</h1>
        <p className="mb-4 text-gray-600">Waktu Load Server: {now}. Data selalu fresh setiap refresh.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded shadow border-blue-200">
              <img src={product.thumbnail} alt={product.title} className="h-32 w-full object-cover mb-2"/>
              <h3 className="font-semibold">{product.title}</h3>
              <p>${product.price}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}