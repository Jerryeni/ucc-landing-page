"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { shortenAddress } from "@/lib/utils";
import { usePresale } from "@/providers/provider";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { initWallet, userAddress } = usePresale();
const {isConnected} = useAccount();

  useEffect(() => {
  }, [userAddress]);

  return (
    <nav className="fixed top-3 w-full z-50">
      <div className="w-[95%] relative mx-auto px-4 bg-background backdrop-blur-smx rounded-xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src='/logo.svg' width={40} height={40} alt="ucc Logo" className="w-32 h-32 md:w-full md:h-full" />
              {/* <span className="text-xl font-bold">UCC</span> */}
            </Link>
          </div>

          

          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center space-x-4">
            <div className="social flex gap-2 items-center">
            <Link
                        href='https://t.me/universecryptochain'
                        className="text-muted-foreground flex gap-1 items-center hover:text-foreground transition-colors font-light"
                      >
                        {/* <Image
                          src="/images/telegram.svg"
                          alt="telegram-logo"
                          width={18}
                          height={18}
                          priority
                        /> */}
                        <span>Chat</span>

                      </Link>
            <Link
                href='https://x.com/ucchainofficial'
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                <Image
                  src="/images/x.svg"
                  alt="x-logo"
                  width={24}
                  height={24}
                  priority
                />
                
              </Link>
              <Link
                href='https://t.me/ucchaincommunity'
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                <Image
                  src="/images/telegram.svg"
                  alt="telegram-logo"
                  width={24}
                  height={24}
                  priority
                />
              </Link>
            </div>
            {/* <Button
              className="bg-primary !rounded-xl hover:bg-secondary h-10 text-sm text-white inset-0"
              onClick={initWallet}
            >
              {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
            </Button> */}
            {/* <ConnectButton /> */}
          </div>

          {/* Mobile Buttons */}
          <div className="">
            {/* <Button
              className="bg-primary text-black hover:text-white rounded-lg hover:bg-secondary h-8 text-sm px-4"
              onClick={initWallet}
            >
              {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
            </Button> */}
            <ConnectButton/>
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
              className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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

                

                {/* Buttons in Mobile Menu */}
                <div className="mt-auto space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                   
                    <div className="social flex gap-4 items-center">
                      <Link
                        href='https://x.com/ucchainofficial'
                        className="text-muted-foreground flex items-center hover:text-foreground transition-colors font-light"
                      >
                        
                        <Image
                          src="/images/x.svg"
                          alt="ucc-logo"
                          width={24}
                          height={24}
                          priority
                        /> 
                      </Link>
                      <Link
                        href='https://t.me/universecryptochain'
                        className="text-muted-foreground flex gap-1 items-center hover:text-foreground transition-colors font-light"
                      >
                        <Image
                          src="/images/telegram.svg"
                          alt="telegram-logo"
                          width={18}
                          height={18}
                          priority
                        />
                        <span>Chat</span>

                      </Link>
                      <Link
                        href='https://t.me/ucchaincommunity'
                        className="text-muted-foreground gap-1 flex items-center hover:text-foreground transition-colors font-light"
                      >
                        <Image
                          src="/images/telegram.svg"
                          alt="telegram-logo"
                          width={18}
                          height={18}
                          priority
                        />
                        <span>Channel</span>

                      </Link>
                    </div>
                    
                      <ConnectButton />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}