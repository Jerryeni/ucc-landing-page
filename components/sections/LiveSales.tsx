"use client";

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { TokenSale } from '@/lib/types';

const MOCK_SALES: TokenSale[] = [
  { id: '1', fromAmount: '0.00355', fromCurrency: 'BNB', toAmount: '6.99', timeAgo: '3 hours ago' },
  { id: '2', fromAmount: '2.3', fromCurrency: 'BNB', toAmount: '4534.07', timeAgo: '3 hours ago' },
  { id: '3', fromAmount: '0.015', fromCurrency: 'BNB', toAmount: '29.57', timeAgo: '2 hours ago' },
  { id: '4', fromAmount: '12', fromCurrency: 'USDT', toAmount: '32.08', timeAgo: '1 hour ago' },
  { id: '5', fromAmount: '0.05', fromCurrency: 'BNB', toAmount: '98.56', timeAgo: '40 minutes ago' }
];

export default function LiveSales() {
  const [sales] = useState<TokenSale[]>(MOCK_SALES);

  return (
    <section className="p-6 bg-black/30 backdrop-blur-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">$ucc SALES LIFE STREAM</h2>
      <p className="text-gray-400 mb-6">All $ucc sales in real time. With links to BSCScan.</p>
      
      <div className="space-y-4">
        {sales.map((sale) => (
          <Card key={sale.id} className="bg-black/50 p-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span>{sale.fromAmount} {sale.fromCurrency}</span>
                <span className="text-orange-500">→</span>
                <span>{sale.toAmount} ucc</span>
              </div>
              <div className="text-sm text-gray-400">{sale.timeAgo}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-xs">↗</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}