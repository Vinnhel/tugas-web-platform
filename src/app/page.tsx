import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Tugas Web Platform</h1>
      <div className="flex gap-4">
        <Link href="/ssg" className="px-4 py-2 bg-gray-800 text-white rounded">Halaman SSG</Link>
        <Link href="/ssr" className="px-4 py-2 bg-gray-800 text-white rounded">Halaman SSR</Link>
        <Link href="/csr" className="px-4 py-2 bg-gray-800 text-white rounded">Halaman CSR</Link>
      </div>
    </main>
  );
}