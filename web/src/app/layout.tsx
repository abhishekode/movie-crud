import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';

// Import Layout Component
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

interface AdminLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">

      <body className={inter.className}>
          <Providers>
            <div className="min-h-screen bg-[#093545]">{children}</div>
            {/* <Footer /> */}
          </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
