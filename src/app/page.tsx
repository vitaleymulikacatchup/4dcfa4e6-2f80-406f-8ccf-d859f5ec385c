"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import RegularFAQ from '@/components/sections/layouts/faq/RegularFAQ';
import FooterLogoComponent from '@/components/sections/layouts/footer/FooterLogoComponent';
import { ArrowRight } from 'lucide-react';

const mockImages = [
  "/images/placeholder1.avif",
  "/images/placeholder2.avif",
  "/images/placeholder3.avif",
  "/images/placeholder4.avif",
  "/images/placeholder5.avif",
  "/images/placeholder6.avif",
];

const mockTestimonials = [
  { quote: "Stunning work! Truly immersive.", author: "Client A" },
  { quote: "An unforgettable experience!", author: "Client B" },
];

const Home = () => {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="py-24 bg-hero">
        <SimpleHero
          title="Welcome to PhotonForge Studio"
          description="Capturing moments that matter"
          primaryButtonText="Explore Portfolio"
          secondaryButtonText="Contact Us"
        />
      </section>
      <section id="portfolio" className="pb-24 bg-portfolio">
        <GalleryBento className="grid grid-cols-2 gap-4 p-8" items={mockImages.map(src => ({ title: "", image: src }))} />
      </section>
      <section id="about" className="py-24 bg-about">
        <MinimalAbout description="I am a passionate photographer with a unique vision, dedicated to capturing the essence of every moment, translating emotions into timeless imagery." />
      </section>
      <section id="approach" className="py-24 bg-approach">
        <SimpleStepsBento className="grid grid-cols-1 md:grid-cols-3 gap-4" items={[
          { title: 'Conceptualize', description: 'Every shoot starts with an idea.' },
          { title: 'Capture', description: 'Bring concepts to life through artful photography.' },
          { title: 'Deliver', description: 'Present the final images to clients with care.' },
        ]} />
      </section>
      <section id="testimonials" className="py-24 bg-testimonials">
        <RegularFAQ items={mockTestimonials.map(x => ({ title: x.quote, content: x.author }))} />
      </section>
      <section id="contact" className="py-24 bg-contact">
            <FooterLogoComponent
          logoSrc="/images/logo.svg"
          logoAlt="PhotonForge Logo"
          logoText="PhotonForge Studio"
          className="text-center"
          svgClassName="h-12"
        />
      </section>
    </SiteThemeProvider>
  );
};

export default Home;
