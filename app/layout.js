import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CashCare",
  description: "One stop solution for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header*/}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
