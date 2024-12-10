"use client";

import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, CircleDollarSign } from "lucide-react";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SUPPORTED_TOKENS } from '@/lib/constants';
import { ActivitiesTable, Activity } from '@/components/ui/activities-table';
import { ReferralStats } from "./referral-stats";


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
  const [showActivities, setShowActivities] = useState(false);

  return (
    <div className="space-y-6 backdrop-blur-xl bg-input rounded-3xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F0B90B] to-[#FCD435] flex items-center justify-center">
            <CircleDollarSign className="h-5 w-5 text-black" />
          </div>
          <span className="text-gray-200">1 UCC = </span>
          <div className="flex items-center gap-2">
            <img src="/icons/usdt.svg" alt="USDT" className="w-5 h-5" />
            <span className="text-[#F0B90B]/50 font-semibold">{tokenPrice} USDT</span>
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

      <div className="mt-10 p-8">
        <h2 className="text-xl mb-8 text-white ">Step 1 - <span className=" text-gray-400">
          Select the Payment Method (BEP20)
        </span> </h2>

        <div className="flex w-80 mx-auto items-center justify-center p-1 bg-card glass-card gap-4 mb-8">
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

        <h2 className="text-xl mb-8 text-white ">Step 2 - <span className=" text-gray-400">
          Enter the Amount of Token You Would Like to Purchase
        </span> </h2>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="text-xl glass-card"
            />
          </div>
          <div className="flex-1">
            <Input
              type="number"
              value={amount ? (Number(amount) * 0.37).toString() : ''}
              readOnly
              placeholder="0"
              className="text-xl glass-card"
            />
          </div>
        </div>

        <Button className="w-full text-lg py-6" size="lg">
          Buy $ucc
        </Button>
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
              totalEarningsucc="5,678.90 ucc"
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