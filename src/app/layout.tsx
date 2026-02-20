import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider, useCart } from "@/context/CartContext"; // Import provider

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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}