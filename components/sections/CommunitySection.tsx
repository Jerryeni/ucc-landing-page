"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const YOUTUBE_REVIEWS = [
  {
    id: "1",
    thumbnail: "/reviews/review1.jpg",
    title: "ucc NETWORK BIG LAUNCH"
  },
  {
    id: "2",
    thumbnail: "/reviews/review2.jpg",
    title: "THIS PROJECT WILL MAKE YOU RICH"
  },
  {
    id: "3",
    thumbnail: "/reviews/review3.jpg",
    title: "RECEIVE USDT DIVIDENDS MONTHLY!"
  }
];

export default function CommunitySection() {
  return (
    <section className="relative py-20">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/2 rounded-full blur-3xl" />
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Community review and project updates</h2>
        <p className="text-xl text-gray-400">
          We value our community and always transparent of what happens in ucc.
        </p>
        <Button variant="outline" size="lg" className="mt-6">
          Join community →
        </Button>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Youtube reviews
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YOUTUBE_REVIEWS.map((review) => (
            <Card key={review.id} className="bg-black/50 backdrop-blur relative group">
              <img
                src={review.thumbnail}
                alt={review.title}
                className="w-full aspect-video object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="p-4">
                <h4 className="font-bold">{review.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}