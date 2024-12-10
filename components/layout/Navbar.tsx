"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from '@/lib/constants';
import Image from 'next/image';
import { X, Menu } from "lucide-react";
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 w-full z-50 ">
      <div className="w-[95%] mx-auto px-4 bg-background backdrop-blur-sm rounded-xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center space-x-2">
            <Image src="/images/icon.png" alt="ucc-logo" width={24} height={24} />
            <span className="text-lg md:text-xl font-normal">ucc</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-gray-300 hover:text-white transition-colors text-sm ${item.label === 'Home' ? 'text-secondary rounded-lg' : ''
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-white !rounded-xl text-black hover:bg-gray-100 h-10 text-sm"
            >
              λ Console
            </Button>
            <Button
              className="bg-secondary !rounded-xl hover:bg-[#ff3333] h-10 text-sm text-white inset-0"
            >
              Connect Wallet
            </Button>
          </div>

            <div className="md:hidden" >
            <Button
            className="bg-primary text-black hover:text-white rounded-lg hover:bg-secondary h-8 text-sm px-4"
          >
            Connect Wallet
          </Button>
            </div>
          
            <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-white"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8">λ</div>
                <Button 
                  className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white"
                >
                  Connect Wallet
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-6 text-2xl">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${
                    item.label === "Home" ? "text-[#ff4d4d]" : "text-gray-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-6">
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="flex-1">
                  λ Console
                </Button>
                <Button variant="outline" className="flex-1">
                  Join community <span className="ml-2">✈</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-400">
                <Link href="#" className="flex items-center space-x-2">
                  <X className="h-5 w-5" /> <span>X</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2">
                  <span className="text-[#229ED9]">○</span> <span>Telegram</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2">
                  <span className="text-[#229ED9]">○</span> <span>Chat</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2">
                  <span>◉</span> <span>Medium</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
    </nav>
  );
}