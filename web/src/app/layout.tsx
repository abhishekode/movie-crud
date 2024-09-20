import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';

// Import Layout Component
import Providers from "./providers";
import Footer from "@/components/Layout/footer";
import { commonMetaData } from "@/utils/helper";

const inter = Inter({ subsets: ["latin"] });

interface AdminLayoutProps {
  children: ReactNode;
}

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Home',
    description: 'This is description of home page!',
    image: 'https://website.com/images/main.png',
    url: '/',
    keywords: ['movie', 'hello'],
  });
  return {
    ...metaData,
  };
};

const RootLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="">
            <div className="bg-[#093545]">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
