'use client'; // Wajib untuk komponen Client

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext'; // Menggunakan Global State

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function CSRPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cart } = useCart(); // Menggunakan Context API

  useEffect(() => {
    // Simulasi loading network
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products?limit=5&skip=10');
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="p-10">Loading data di client...</div>;

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Halaman CSR (Client-Side Rendering)</h1>
      <p className="mb-4 text-gray-600">Data di-load di browser. Interaktif (Bisa tambah ke cart).</p>
      <p className="mb-4 font-bold">Items di Cart: {cart.length}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded shadow border-green-200">
            <img src={product.thumbnail} alt={product.title} className="h-32 w-full object-cover mb-2"/>
            <h3 className="font-semibold">{product.title}</h3>
            <p>${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}