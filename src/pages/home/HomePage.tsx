import { FAQ } from '@/components/FAQ/FAQ';
import { ClientsSection } from './sections/ClientsSection';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { PromoSection } from '@/components/PromoSection/PromoSection';
import { CallbackSection } from '@/components/CallbackSection/CallbackSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQ />
      <PromoSection
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
          different ways you can get in touch with us."
      />
      <CallbackSection />
    </>
  );
}
