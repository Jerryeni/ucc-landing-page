import { Suspense } from 'react';
// import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TokenSaleSection from '@/components/sections/TokenSale';
import TechPartners from '@/components/sections/TechPartners';
import LiveSales from '@/components/sections/LiveSales';
import TradingStats from '@/components/sections/TradingStats';
import EventBanner from '@/components/sections/EventBanner';
import DividendInfo from '@/components/sections/DividendInfo';
import StakingSection from '@/components/sections/StakingSection';
import TeamSection from '@/components/sections/TeamSection';
import CommunitySection from '@/components/sections/CommunitySection';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 space-y-20x">
        <Hero />
        <TechPartners />
        <div className="grid md:grid-cols-2 gap-8">
          <TradingStats />
          <LiveSales />
        </div>
        <EventBanner />
        <DividendInfo />
        <StakingSection />
        <TeamSection />
        <CommunitySection />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}