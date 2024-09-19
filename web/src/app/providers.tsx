'use client'
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider>;
};

export default Providers;
