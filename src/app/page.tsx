import { CtaBlock } from "@/components/sections/CtaBlock";
import { Fleet } from "@/components/sections/Fleet";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Fleet />
      <HowItWorks />
      <CtaBlock />
    </>
  );
}
