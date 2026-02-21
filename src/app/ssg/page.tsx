import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
}

async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch('https://dummyjson.com/products?limit=5', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function SSGPage() {
  const { products } = await getProducts();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Halaman SSG (Static Site Generation)</h1>
      <p className="mb-4 text-gray-600">Pembuatan Situs Statis (Static Site Generation/SSG) melibatkan pembuatan seluruh situs web terlebih dahulu selama proses pembuatan, menghasilkan file HTML statis untuk setiap halaman</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}