import SSRPageContent from './SSRPageContent';

export const dynamic = 'force-dynamic'; 

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=5&skip=5', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function SSRPage() {
  const { products } = await getProducts();
  const now = new Date().toLocaleTimeString();

  return <SSRPageContent products={products} now={now} />;
}