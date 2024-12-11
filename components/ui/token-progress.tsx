"use client";

import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, CircleDollarSign, } from "lucide-react";
import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SUPPORTED_TOKENS } from '@/lib/constants';
import { ActivitiesTable, Activity } from '@/components/ui/activities-table';
import { ReferralStats } from "./referral-stats";
import Image from "next/image";
import { AmountInput } from "./amount-input";
import { formatCurrency } from "@/lib/utils";
import { PurchaseButton } from "./purchase-button";
import { usePresale } from "@/hooks/usePresale";


// Mock data for demonstration
const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    date: new Date('2024-02-15T10:30:00'),
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    reward: '50 USDT',
    type: 'referral'
  },
  {
    id: '2',
    date: new Date('2024-02-14T15:45:00'),
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    reward: '100 ucc',
    type: 'staking'
  },
  {
    id: '3',
    date: new Date('2024-02-13T09:15:00'),
    walletAddress: '0x7890abcdef1234567890abcdef1234567890abcd',
    reward: '75 USDT',
    type: 'dividend'
  }
];

interface TokenProgressProps {
  tokenPrice: number;
  nextPhaseIncrease: number;
  progress: number;
  tokensSold: number;
  totalTokens: number;
}

export function TokenProgress({
  tokenPrice,
  nextPhaseIncrease,
  progress,
  tokensSold,
  totalTokens
}: TokenProgressProps) {
  const progressPercentage = (tokensSold / totalTokens) * 100;

  const [selectedToken, setSelectedToken] = useState('USDT');
  const [amount, setAmount] = useState('');
  const { status, buyWithUSDT, buyWithBNB, resetStatus } = usePresale();
  const [showActivities, setShowActivities] = useState(false);

  const handleAmountChange = (value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const calculateTokenAmount = useCallback((inputAmount: string) => {
    const numAmount = parseFloat(inputAmount) || 0;
    return formatCurrency(numAmount / 0.37);
  }, []);

  const handlePurchase = async () => {
    if (!amount) return;
    
    if (selectedToken === 'USDT') {
      await buyWithUSDT(amount);
    } else if (selectedToken === 'BNB') {
      await buyWithBNB(amount);
    }
  };

  return (
    <div className="space-y-6 backdrop-blur-xl bg-input rounded-3xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex  items-center justify-center gap-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#F0B90B] to-[#FCD435] flex items-center justify-center">
            <Image src="/images/icon.png" alt="ucc-logo" width={12} height={12} className="w-4 h-4" />

          </div>
          <span className="text-gray-200">1 UCC = </span>
          <div className="flex items-center gap-2">
            <img src="/images/tether.svg" alt="USDT" className="w-5 h-5" />
            <span className="text-[#F0B90B] font-semibold">{tokenPrice} USDT</span>
          </div>
        </div>
        <div className="text-card/50 font-medium">
          {nextPhaseIncrease}% Increase On Next Phase
        </div>
      </div>

      <Progress
        value={progress}
        tokensSold={tokensSold}
        totalTokens={totalTokens}
        className="h-4 rounded-xl bg-[rgba(255,77,77,0.2)] mb-20"
        indicatorClassName="bg-gradient-to-r from-[#F0B90B] to-[#FCD435]"
      />

      <div className="pt-10 p-1 md:p-8">
        <h2 className="text-sm md:text-xl mb-8 text-white ">Step 1 - <span className=" text-gray-400">
          Select the Payment Method (BEP20)
        </span> </h2>

        <div className="flex w-full md:w-[40%] mx-auto items-center justify-center p-1 bg-card glass-card gap-4 mb-8">
          {Object.entries(SUPPORTED_TOKENS).map(([symbol, details]) => (
            <Button
              key={symbol}
              variant={selectedToken === symbol ? "secondary" : "ghost"}
              onClick={() => setSelectedToken(symbol)}
              className="flex items-center gap-1 w-full"
            >
              <img src={details.icon} alt={symbol} className="w-6 h-6" />
              {symbol}
            </Button>
          ))}
        </div>

        <h2 className="text-sm md:text-xl mb-8 text-white ">Step 2 - <span className=" text-gray-400">
          Enter the Amount of Token You Would Like to Purchase
        </span> </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
          <AmountInput
            value={amount}
            onChange={handleAmountChange}
            token={selectedToken}
            tokenIcon={SUPPORTED_TOKENS[selectedToken].icon}
          />
          <AmountInput
            value={amount ? calculateTokenAmount(amount) : ''}
            onChange={() => { }}
            token="UCC"
            tokenIcon="/images/icon.png"
            readOnly
          />
        </div>

        <PurchaseButton
          status={status}
          onClick={handlePurchase}
          disabled={!amount || parseFloat(amount) <= 0}
        />
      </div>

      <div className="border-t border-[#F0B90B]/20 pt-6">
        <Button
          variant="secondary"
          onClick={() => setShowActivities(!showActivities)}
          className="w-full flex items-center justify-between text-left hover:bg-[#F0B90B]/50 hover:text-white"
        >
          <span className="text-lg font-medium">Recent Activities & Referrals</span>
          {showActivities ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </Button>

        {showActivities && (
          <div className="mt-6 space-y-6">
            <ReferralStats
              referralLink="https://ucc.network/?ref=0x1234567890abcdef"
              totalEarningsUSDT="1,234.56 USDT"
              totalEarningsucc="5,678.90 UCC"
            />

            <div>
              <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
              <ActivitiesTable activities={MOCK_ACTIVITIES} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}