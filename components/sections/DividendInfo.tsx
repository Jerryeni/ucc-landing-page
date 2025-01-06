"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';

export default function DividendInfo() {
  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-10 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />
      
      <h1 className="text-5xl font-bold text-center mb-8">
        How to Get Dividends from ucc Network
      </h1>
      <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
        One of the core values of $ucc is its Dividend Program. By holding the token, our investors receive payouts ranging from 5-15% per month, independent of the token's price. All returns come from the trading pool of our AI-driven trading system.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <Card className="bg-black/50 p-8 backdrop-blur-xl">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">1</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Buy Token:</h3>
          <p className="text-gray-400">Buy $ucc Token</p>
          <Button variant="link" className="text-orange-500 p-0 mt-2">
            How to buy?
          </Button>
        </Card>

        <Card className="bg-black/50 p-8 backdrop-blur-xl">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Hold Token:</h3>
          <p className="text-gray-400">Stay an $ucc investor tokens for a month</p>
        </Card>

        <Card className="bg-black/50 p-8 backdrop-blur-xl">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Receive dividends:</h3>
          <p className="text-gray-400">Get $USDT dividends every month</p>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">90% of holders are buying more!</h2>
        <p className="text-xl text-gray-400 mb-6">
          9/10 investors are buying more $ucc before and after the Dividend payouts!
        </p>
        <Button variant="link" className="text-orange-500">
          Join our community
        </Button>
      </div>
    </section>
  );
}