"use client";

import { X, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { shortenAddress } from "@/lib/utils";
import { usePresale } from "@/providers/provider";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const {initWallet, userAddress} = usePresale();

  useEffect(() => {
  },[userAddress]);

  return (
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
                  className="bg-primary hover:bg-primary text-white"
                  onClick={initWallet}
                >
                  {userAddress === "" ? "Connect Wallet" : shortenAddress(userAddress)}
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

            {/* <nav className="flex flex-col space-y-6 text-2xl">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${
                    item.label === "Home" ? "text-text-gray-400" : "text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav> */}

            <div className="mt-auto space-y-6">
              {/* <div className="flex justify-center space-x-4">
                <Button variant="outline" className="flex-1">
                  λ Console
                </Button>
                <Button variant="outline" className="flex-1">
                  Join community <span className="ml-2">✈</span>
                </Button>
              </div> */}

             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}