"use client";

import Link from "next/link";
import { CircleDollarSign, Twitter, UtilityPole, Youtube, Linkedin, MessageCircle, PenTool } from "lucide-react";
import Image from "next/image";

const FOOTER_LINKS = {
  "UCChain Network": [
    { label: "Presale", href: "/presale" },
    { label: "Dividends", href: "/dividends" },
    { label: "Staking", href: "/staking" },
    { label: "Console", href: "/console" },
    { label: "Support", href: "/support" }
  ],
  "Documents": [
    { label: "Wiki", href: "/wiki" },
    { label: "Whitepaper", href: "/whitepaper" },
    { label: "Audit", href: "/audit" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Term of use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ],
  "Socials": [
    { label: "X", href: "https://x.com", icon: Twitter },
    { label: "Telegram", href: "https://t.me", icon: UtilityPole },
    { label: "Chat", href: "/chat", icon: MessageCircle },
    { label: "Medium", href: "https://medium.com", icon: PenTool },
    { label: "YouTube", href: "https://youtube.com", icon: Youtube },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin }
  ]
};

export default function Footer() {
  return (
    <footer className="border-t border-[#F0B90B]/20 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Copyright */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/icon.png"
                alt="ucc-logo"
                width={24}
                height={24}
                priority
              />
              <span className="text-xl font-bold">UCChain</span>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2024 UCChain Network. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          {/* {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#F0B90B] flex items-center gap-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}


        </div>
      </div>
    </footer>
  );
}