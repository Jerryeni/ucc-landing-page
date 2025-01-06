"use client";

import { TECH_PARTNERS } from '@/lib/constants';

export default function TechPartners() {
  return (
    <section className="relative py-20 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/5 rounded-full blur-3xl" />
      <h2 className="text-2xl font-bold">
        Powered by most advanced AI technologies on market.
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        Our trading algorithms are powered by a state-of-Art AI-driven system.
      </p>

      {/* Marquee container */}
      <div className="overflow-hidden relative w-full">
        {/* Marquee content */}
        <div className="flex items-center justify-center animate-marquee">
          {/* Original logos */}
          {TECH_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={`https://logo.clearbit.com/${partner.domain}`}
                alt={partner.name}
                className="h-24 w-auto"
                width={120}
                height={48}
              />
            </div>
          ))}
          {/* Duplicate logos for seamless looping */}
          {TECH_PARTNERS.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-none mx-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={`https://logo.clearbit.com/${partner.domain}`}
                alt={partner.name}
                className="h-24 w-auto"
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 32px;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}