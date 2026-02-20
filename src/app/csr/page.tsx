'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function CSRPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products?limit=5&skip=10');
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const loaderClasses = "flex flex-col items-center justify-center min-h-screen bg-(--background) text-(--foreground)";

  if (loading)
    return (
      <div className={loaderClasses}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-6"></div>
        <p className="text-lg font-medium">
          Memuat data di client...
        </p>
      </div>
    );

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Halaman CSR (Client-Side Rendering)</h1>
      <p className="mb-4 text-gray-600">Data di-load di browser. Interaktif (Bisa tambah ke cart).</p>
      <p className="mb-4 font-bold">Items di Cart: {cart.length}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}