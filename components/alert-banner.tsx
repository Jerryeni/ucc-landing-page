"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden">
        <div className="px-8 py-4 flex items-center justify-between space-x-8">
          <span className="text-white text-lg font-medium">
            Join Pre-sale – Earn X10 at Listing.
          </span>
          <div className="flex items-center space-x-4">
            <button
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Buy $UCC Now
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}