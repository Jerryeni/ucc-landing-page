"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TradingStats() {
  return (
    <section className="p-6 bg-black/30 glass-card backdrop-blur-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">BTC PREDICTION MODEL</h2>
      <p className="text-gray-400 mb-6">
        Explore one of the 120+ models from our "Zoo" strategy. This chart is for demo purposes only.
      </p>
      
      <div className="relative mb-8">
        <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
          {/* Placeholder for chart */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-50" />
        </div>
        <Button variant="outline" className="absolute top-4 right-4">
          BTC Predict Model ↗
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-black/50 p-4 text-center">
          <div className="text-2xl font-bold">20</div>
          <div className="text-gray-400">months in development</div>
        </Card>
        <Card className="bg-black/50 p-4 text-center">
          <div className="text-2xl font-bold">120+</div>
          <div className="text-gray-400">ML models running</div>
        </Card>
      </div>
    </section>
  );
}