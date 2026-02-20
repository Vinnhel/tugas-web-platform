// SSR: Data di-fetch setiap ada request
// Di Next.js App Router, kita paksa dynamic agar tidak di-cache

export const dynamic = 'force-dynamic'; 

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=5&skip=5', {
    cache: 'no-store' // Memastikan tidak ada cache (SSR Murni)
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function SSRPage() {
  const { products } = await getProducts();
  const now = new Date().toLocaleTimeString();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Halaman SSR (Server-Side Rendering)</h1>
      <p className="mb-4 text-gray-600">Waktu Load Server: {now}. Data selalu fresh setiap refresh.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded shadow border-blue-200">
            <img src={product.thumbnail} alt={product.title} className="h-32 w-full object-cover mb-2"/>
            <h3 className="font-semibold">{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}