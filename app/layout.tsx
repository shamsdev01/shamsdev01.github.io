'use client';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
// import CustomCursor from '@/components/custom-cursor';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Shams | Software Developer</title>
        <meta name="description" content="Portfolio website for Shams, a professional software developer" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} custom-scrollbar`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise"></div>
          {/* <CustomCursor /> */}
          <Navigation />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}