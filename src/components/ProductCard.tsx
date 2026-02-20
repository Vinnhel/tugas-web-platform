// src/components/ProductCard.tsx
'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Toast from './Toast';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = () => {
    addToCart(product);
    setToastMessage(`${product.title} ditambahkan ke keranjang!`);
    setShowToast(true);
  };

  const buttonClasses = "w-full bg-blue-500 dark:bg-blue-300 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition";

  return (
    <>
      <Toast 
        show={showToast} 
        message={toastMessage} 
        onClose={() => setShowToast(false)} 
      />
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
        <div className="h-48 w-full overflow-hidden">
          <img src={product.thumbnail} alt={product.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4 flex flex-col grow justify-between">
          <div>
            <h3 className="font-bold text-lg mb-2 truncate text-gray-800 dark:text-gray-100">
              {product.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ${product.price}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className={buttonClasses}
          >
            + Keranjang
          </button>
        </div>
      </div>
    </>
  );
}