"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Lock, Percent } from "lucide-react";

const STAKING_TIERS = [
  { tier: 1, apy: "2.5%", period: "30 days", balance: "100 $ucc" },
  { tier: 2, apy: "10%", period: "90 days", balance: "1000 $ucc" },
  { tier: 3, apy: "27%", period: "180 days", balance: "10000 $ucc" },
  { tier: 4, apy: "65.4%", period: "360 days", balance: "100000 $ucc" },
];

export default function StakingSection() {
  return (
    <section className="relative py-20">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">$USDT Staking with up to 64.5% APY</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stake your USDT on the ucc platform and watch your earnings grow. Contribute to the stability of the ecosystem while enjoying high returns and complete security.
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-16">
        <Card className="bg-black/50 backdrop-blur p-6 flex items-center gap-4">
          <DollarSign className="w-8 h-8" />
          <div className="text-xl">Deposit Your $USDT</div>
        </Card>
        <div className="flex items-center">
          <div className="text-2xl">→</div>
        </div>
        <Card className="bg-black/50 backdrop-blur p-6 flex items-center gap-4">
          <Lock className="w-8 h-8" />
          <div className="text-xl">Funds Locked</div>
        </Card>
        <div className="flex items-center">
          <div className="text-2xl">→</div>
        </div>
        <Card className="bg-black/50 backdrop-blur p-6 flex items-center gap-4">
          <Percent className="w-8 h-8" />
          <div className="text-xl">Earn Staking Rewards</div>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl mb-4">To participate in staking you must be an $ucc holder</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {STAKING_TIERS.map((tier) => (
          <Card key={tier.tier} className="bg-black/50 backdrop-blur p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl">Tier {tier.tier}</div>
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full">
                {tier.apy}
              </div>
            </div>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Period</span>
                <span>{tier.period}</span>
              </div>
              <div className="flex justify-between">
                <span>Balance</span>
                <span>{tier.balance}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
          Stake Now
        </Button>
      </div>
    </section>
  );
}