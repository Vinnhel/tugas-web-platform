import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider, useCart } from "@/context/CartContext"; // Import provider
import Navbar from "@/components/Navbar"; // Import Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tugas Web Platform",
  description: "Implementasi SSR, SSG, CSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-gray-900 text-white text-center p-4 mt-10">
            <p>&copy; 2026 Tugas Web Platform. Dibuat dengan Next.js.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}