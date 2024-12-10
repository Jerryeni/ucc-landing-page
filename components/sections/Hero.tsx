"use client";

import { useEffect, useState } from 'react';
import { CountdownCard } from '@/components/ui/countdown-card';
import { TokenProgress } from '@/components/ui/token-progress';
import { calculateTimeLeft } from '@/lib/utils';
import { CountdownTime } from '@/lib/types';
import { CountdownTimer } from '../ui/countdown-timer';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 2,
    hours: 1,
    minutes: 18,
    seconds: 44
  });

  useEffect(() => {
    const targetDate = new Date('2024-03-04T00:00:00');
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex mb-10 flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-10 text-center">
        <h1 className="md:text-5xl text-3xl font-bold mb-2 w-fit backdrop-blur-lg bg-white/100 mx-auto text-white bg-clip-text text-transparent">
          Phase 2
        </h1>
        <p className="md:text-md text-xs  text-gray-400 mb-12">NEXT PHASE BEGINS IN</p>

        
        <CountdownTimer targetDate={new Date('2025-01-04')} />
         

        {/* Stats Bar */}
        <div className="w-full mt-24 max-w-4xl mx-auto backdrop-blur-xl bg-black/40 rounded-3xl border border-[#F0B90B]/20 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-3 p-6">
            <div className="text-left">
              <div className="text-xs md:text-sm text-gray-400 mb-1">USDT RAISED</div>
              <div className="text-xs md:text-2xl font-bold text-[#F0B90B]">$673,350</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm text-gray-400 mb-">LISTING DATE</div>
              <div className="text-xs md:text-2xl font-bold">MARCH 4, 2025</div>
            </div>
            <div className="text-right">
              <div className="text-xs md:text-sm text-gray-400 mb-1">HOLDERS</div>
              <div className="text-xs md:text-2xl font-bold text-[#F0B90B]">1,655</div>
            </div>
          </div>

          <div className="">
            <TokenProgress
              tokenPrice={0.37}
              nextPhaseIncrease={10}
              progress={60}
              tokensSold={3561909}
              totalTokens={5000000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}