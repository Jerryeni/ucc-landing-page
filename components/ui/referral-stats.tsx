"use client";

import { Copy } from "lucide-react";
import { Button } from "./button";
import { toast } from "./use-toast";

interface ReferralStatsProps {
  referralLink: string;
  totalEarningsUSDT: string;
  totalEarningsucc: string;
}

export function ReferralStats({ referralLink, totalEarningsUSDT, totalEarningsucc }: ReferralStatsProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success(
      "Your referral link has been copied to your clipboard",
      {
        duration: 3000, 
        position: "top-right", 
      }
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-black/50 rounded-xl p-4 border border-[#F0B90B]/20">
          <div className="text-sm text-gray-400 mb-1">Total Earnings (USDT)</div>
          <div className="text-2xl font-bold text-[#F0B90B]">{totalEarningsUSDT}</div>
        </div>
        <div className="flex-1 bg-black/50 rounded-xl p-4 border border-[#F0B90B]/20">
          <div className="text-sm text-gray-400 mb-1">Total Earnings (UCC)</div>
          <div className="text-2xl font-bold text-[#F0B90B]">{totalEarningsucc}</div>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={referralLink}
          readOnly
          className="w-full bg-black/50 border border-[#F0B90B]/20 rounded-xl px-4 py-3 pr-24 text-sm"
        />
        <Button
          size="sm"
          onClick={copyToClipboard}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black"
        >
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </Button>
      </div>
    </div>
  );
}