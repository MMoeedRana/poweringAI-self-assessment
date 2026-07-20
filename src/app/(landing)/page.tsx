import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Scale } from "@/components/landing/Scale";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { TalkToUs } from "@/components/landing/TalkToUs";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Scale />
        <WhatYouGet />
        <TalkToUs />
      </main>
    </div>
  );
}