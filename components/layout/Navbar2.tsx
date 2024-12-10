"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
// import { MobileMenu } from '../mobile-menu';

const NAV_ITEMS = [
  { label: "Home", href: "/", active: true },
  { label: "Dividends", href: "/dividends" },
  { label: "Staking", href: "/staking" },
  { label: "Wiki", href: "/wiki" },
  { label: "Blog", href: "/blog" },
  { label: "Socials", href: "/socials" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-0 right-0 z-50">
      <div className="rounded-xl container bg-black/50 backdrop-blur-xl border-b border-white/10 mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/icon.png" alt="ucc-logo" width={24} height={24} />
              <span className="text-xl font-bold">UCCash</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm ${item.active ? "text-primary" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:flex border-gray-800 hover:bg-primary/10 hover:text-primary"
            >
              λ Console
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-[#FCD435] hover:from-primary/90 hover:to-[#FCD435]/90 text-black font-semibold"
            >
              Connect Wallet
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-3">
            <Button 
              className="bg-secondary text-white rounded-lg hover:bg-[#ff3333] h-8 text-sm px-4"
            >
              Connect Wallet
            </Button>
            {/* <MobileMenu /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}