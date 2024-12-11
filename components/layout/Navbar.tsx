"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { shortenAddress } from "@/lib/utils";
import { usePresale } from "@/providers/provider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {initWallet,userAddress} = usePresale();


  useEffect(() => {
  },[userAddress]);

  return (
    <nav className="fixed top-3 w-full z-50">
      <div className="w-[95%] relative mx-auto px-4 bg-background backdrop-blur-smx rounded-xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/icon.png"
              alt="ucc-logo"
              width={24}
              height={24}
              priority
            />
            <span className="text-lg md:text-xl font-normal">UCC</span>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-primary hover:text-white transition-colors text-sm ${
                  item.label === "Home" ? "text-secondary rounded-lg" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div> */}

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-primary !rounded-xl hover:bg-secondary h-10 text-sm text-white inset-0"
              onClick={initWallet}
            >
              {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden">
            <Button
              className="bg-primary text-black hover:text-white rounded-lg hover:bg-secondary h-8 text-sm px-4"
              onClick={initWallet}
            >
              {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
            </Button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Mobile Menu */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-4 relative bg-dark flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/icon.png"
                      alt="ucc-logo"
                      width={24}
                      height={24}
                    />
                    <span className="text-white text-lg font-normal">ucc</span>
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

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6 text-center">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-lg text-gray-300 hover:text-white ${
                        item.label === "Home" ? "text-primary" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Buttons in Mobile Menu */}
                <div className="mt-auto space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Button
                      variant="outline"
                      className="bg-white text-black hover:bg-gray-100 rounded-lg w-full"
                    >
                      λ Console
                    </Button>
                    <Button
                      className="bg-primary hover:bg-secondary text-black rounded-lg w-full"
                    onClick={initWallet}
                    >
                      {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}