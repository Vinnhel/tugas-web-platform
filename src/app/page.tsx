import Link from 'next/link';
// import Background from '@/components/Background';
import RenderingCard from '@/components/RenderingCard';

export default function Home() {
  const renderingMethods = [
    {
      title: 'SSG',
      fullName: 'Static Site Generation',
      description:
        'Halaman dibuat saat build time. HTML statis di-generate sebelum user mengakses. Paling cepat untuk konten yang jarang berubah.',
      color: 'border-green-500',
      href: '/ssg',
      icon: '📄',
    },
    {
      title: 'SSR',
      fullName: 'Server-Side Rendering',
      description:
        'Halaman di-generate di server setiap ada request. Data selalu fresh dan real-time. Cocok untuk konten dinamis.',
      color: 'border-blue-500',
      href: '/ssr',
      icon: '🖥️',
    },
    {
      title: 'CSR',
      fullName: 'Client-Side Rendering',
      description:
        'Halaman di-render di browser menggunakan JavaScript. Sangat interaktif, cocok untuk aplikasi dengan banyak state.',
      color: 'border-purple-500',
      href: '/csr',
      icon: '⚡',
    },
  ];

  return (
    <div className="min-h-screen bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* SECTION 1: Welcome & Navigation Buttons */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors">
            Tugas Web Platform
          </h1>
          <p className="mb-8 text-lg transition-colors">
            Implementasi Teknik Rendering Modern dengan Next.js
          </p>

          {/* Tombol Navigasi */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ssg"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition font-medium"
            >
              Halaman SSG
            </Link>
            <Link
              href="/ssr"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition font-medium"
            >
              Halaman SSR
            </Link>
            <Link
              href="/csr"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition font-medium"
            >
              Halaman CSR
            </Link>
          </div>
        </section>

        {/* SECTION 2: Penjelasan Metode Rendering */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 transition-colors">
            📚 Penjelasan Metode Rendering
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {renderingMethods.map((method) => (
              <RenderingCard
                key={method.title}
                title={method.title}
                fullName={method.fullName}
                description={method.description}
                color={method.color}
                href={method.href}
                icon={method.icon}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 dark:text-gray-400 text-sm transition-colors">

        </footer>
      </div>
    </div>
  );
}