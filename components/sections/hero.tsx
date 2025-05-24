'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  // Text animation states
  const [text, setText] = useState('');
  const [fullText] = useState('Software Developer');
  const [index, setIndex] = useState(0);

  // Handle typing animation
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, fullText]);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0"></div>
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
      </motion.div>

      {/* Data stream overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/30 h-px w-full"
            style={{ top: `${5 * i}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-3 glow shadow-primary">
              Hello, I'm
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="glitch" data-text="Shams.Dev">Shams.Dev</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl font-medium text-foreground/80 mb-8 h-10">
              {text}<span className="animate-ping">|</span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
           Crafting seamless digital experiences by blending innovative technology with intuitive design. Let's build something remarkable together.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <Link href="#about" passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDownIcon className="h-6 w-6 text-primary" />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}