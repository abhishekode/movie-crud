import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';

// Import Layout Component
import Providers from "./providers";
import Header from '@/components/Layout/header'
import Footer from '@/components/Layout/footer'
import AOSProvider from "@/components/Common/AOSInit";

const inter = Inter({ subsets: ["latin"] });

interface AdminLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AOSProvider>
          <Providers>
            <Header />
            <div className="min-h-screen">{children}</div>
            {/* <Footer /> */}
          </Providers>
        </AOSProvider>
      </body>
    </html>
  );
};

export default RootLayout;
