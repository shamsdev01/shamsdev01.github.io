'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MonitorSmartphone, Github, Linkedin, Heart } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="#hero" className="flex items-center gap-2 text-foreground hover:text-primary transition duration-300 mb-4">
              <MonitorSmartphone className="h-6 w-6" />
              <span className="text-xl font-bold">Shams</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Building exceptional digital experiences with innovative solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/shamsdev01"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BsGithub className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="linkedin.com/in/ajasa-shamsudeen-91644a23a"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://x.com/ShamsDev01?t=tnHASHBrxtzDZLNEARpqXA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Frontend Development', 'Backend Development', 'Mobile Development'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#contact" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-muted-foreground mb-2">Online</p>
              <p className="text-muted-foreground mb-2">
                <a href="mailto: shamsudeenajasa@gmail.com" className="hover:text-foreground transition-colors duration-300">
                  shamsudeenajasa@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="tel:+15551234567" className="hover:text-foreground transition-colors duration-300">
                  +234 8084 677 145 </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}