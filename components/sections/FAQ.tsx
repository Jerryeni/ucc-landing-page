"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "How can I purchase UCCash tokens?",
    answer: "You can purchase UCCash tokens during our presale phases using USDT, USDC, BNB, BTC, or ETH. Simply connect your wallet, select your preferred payment method, enter the amount you wish to invest, and complete the transaction."
  },
  {
    question: "How much profit can I make and why will the token value increase?",
    answer: "UCCash token value is expected to increase due to our AI-driven trading system, limited token supply, and growing user base. The profit potential comes from both token appreciation and monthly USDT dividends from our trading pool."
  },
  {
    question: "How are dividends distributed?",
    answer: "Dividends are distributed monthly in USDT directly to holders' wallets. The amount depends on your UCCash holdings and the performance of our AI trading system, typically ranging from 5-15% monthly."
  },
  {
    question: "How can I start earning passive income?",
    answer: "Start earning passive income by purchasing and holding UCCash tokens. You'll automatically receive monthly USDT dividends from our trading pool, plus potential token value appreciation."
  },
  {
    question: "How does the referral program work?",
    answer: "Our referral program rewards you with 5% of the purchase amount when someone buys UCCash tokens using your referral link. The bonus is paid instantly in the same currency used for the purchase."
  },
  {
    question: "What are the main benefits of using the UCCash Network?",
    answer: "UCCash Network offers monthly USDT dividends, potential token value appreciation, access to advanced AI trading algorithms, staking rewards, and community governance rights."
  }
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-xl text-gray-400">Have any questions?</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 overflow-hidden border-[#F0B90B]/20"
              >
                <AccordionTrigger className="text-xl font-semibold hover:text-[#F0B90B] py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}