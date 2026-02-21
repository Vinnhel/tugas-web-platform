import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${poppins.className} transition-colors duration-300 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center transition-colors duration-300">
              <div className="w-full max-w-6xl px-8 py-12">
                {children}
              </div>
            </main>
            <footer className="text-white text-center p-4 mt-10 bg-blue-800 dark:bg-blue-600 transition-colors duration-300">
              <p>&copy; 2026 Tugas Web Platform. Dibuat dengan Next.js.</p>
            </footer>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}