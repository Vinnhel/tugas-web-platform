import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext"; // Import provider
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar"; // Import Navbar

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
      <body className={poppins.className}>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <footer className="text-white text-center p-4 mt-10 bg-(--dark-blue)">
              <p>&copy; 2026 Tugas Web Platform. Dibuat dengan Next.js.</p>
            </footer>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}