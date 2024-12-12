"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed w-[80%] md:w-auto mx-auto bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#F0B90B]  space-y-2 w-full rounded-2xl shadow-lg p-3 px-4 overflow-hidden">
          <span className="text-black text-xs md:text-lg font-medium">
            Refer and get 30% referral rewards (15% USDT + 15% UCC)
          </span>
          <div className="flex items-center space-x-4">
            <button
              className="bg-white text-black w-full text-xs px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Refer Now
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-black hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
      </div>
    </div>
  );
}