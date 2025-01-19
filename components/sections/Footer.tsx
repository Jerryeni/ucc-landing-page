"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter, Send, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-20 bg-black/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Early Bird Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enjoy Exclusive <span className="gradient-text">Early Bird</span> Opportunity
              </h2>
              <p className="text-gray-400 mb-6">
                Secure your UCC coins now and get a head start before the global launch!
              </p>
              <Button onClick={scrollToTop}
                className="gradient-btn rounded-full hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold"
              >
                Buy UCC
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[200px] md:h-[300px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0"
              >
                <div className="relative w-full">
                  <Image src={require("../../public/image.png")} alt="refer" className="animate-bounce duration-50 w-[90%]" />
                  {/* Animated city skyline illustration */}
                  <div className="absolute bottom-0 right-0 w-full h-4/5">
                    <div className="relative w-full h-full">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: "0%" }}
                          whileInView={{ height: `${40 + Math.random() * 60}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="absolute bottom-0 bg-gradient-to-t from-yellow-500/20 to-yellow-500/5"
                          style={{
                            left: `${i * 20}%`,
                            width: "15%",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* UCC Logo */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full animate-pulse bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-yellow-500/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/50" />
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>

        <Image src={require("../../public/images/bg.svg")} alt="refer" className="absolute bottom-1 h-96 w-full" />


        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div>
          <div className="md:block flex items-center">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Image src='/ucc-logo.svg' width={40} height={40} alt="ucc Logo" className="w-10 shadow-sm rounded-full shadow-yellow-500 h-10 " />
              <span className="text-2xl font-normal">Universal Chain</span>
            </Link>
          </div>
            <p className="text-gray-400 text-sm">
              © 2025 Ucchain Network. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#why-us" className="hover:text-yellow-500 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="hover:text-yellow-500 transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-yellow-500 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              <Link 
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 -top-6 w-12 h-12 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black flex items-center justify-center transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}