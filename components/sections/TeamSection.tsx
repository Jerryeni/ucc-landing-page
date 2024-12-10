"use client";

import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Daniil Parker",
    role: "CEO, FOUNDER",
    image: "/team/daniil.jpg",
    linkedin: "https://linkedin.com/in/daniil-parker",
    description: "Expertise in optimizing sales processes, integrating new technologies, and fostering strong client relationships has significantly contributed to enhancing customer satisfaction and reinforcing brand Apple leadership in the global market."
  },
  {
    name: "Egor Donde",
    role: "CMO",
    image: "/team/egor.jpg",
    linkedin: "https://linkedin.com/in/egor-donde",
    description: "12 years as CMO and Head of Digital MarketingFounding Team member: MVP --> $20M valuation. Two startupsSCALING Fintech, DeFi, and Gaming Heavy-tech startups from idea to launch"
  },
  {
    name: "Anton Goldshtein",
    role: "HEAD OF ADS",
    image: "/team/anton.jpg",
    linkedin: "https://linkedin.com/in/anton-goldshtein",
    description: "Marketer and consultant with 5+ years of experience in crypto projects Expert in blockchain and digital assets, specializing in marketing strategies for crypto startups."
  }
];

export default function TeamSection() {
  return (
    <section className="relative py-20">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-2/3 right-3 -translate-x-1/3 -translate-y-1/4 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />
      <h2 className="text-5xl font-bold text-center mb-6">Team of experts</h2>
      <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
        At ucc Network we believe in sustainable growth, mid- and long-term investments and building
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.name} className="bg-black/50 backdrop-blur p-6">
            <div className="relative mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 bg-[#0077b5] p-2 rounded-full"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="text-center mb-4">
              <div className="text-gray-400 text-sm mb-1">{member.role}</div>
              <h3 className="text-xl font-bold">{member.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{member.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}