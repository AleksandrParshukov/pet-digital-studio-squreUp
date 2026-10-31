import { FAQ } from "@/components/FAQ/FAQ";
import { ClientsSection } from "./sections/ClientsSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyUsSection } from "./sections/WhyUsSection";
import { ThanksSection } from "@/components/ThanksSection/ThanksSection";
import { CallbackSection } from "@/components/CallbackSection/CallbackSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQ />
      <ThanksSection />
      <CallbackSection />
    </>
  );
}
