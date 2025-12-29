import { Link } from 'react-router-dom';
import { generateArtisanWhatsAppLink } from '@/lib/whatsapp';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo Text */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary mb-6 tracking-wider animate-fade-up glow-text">
          Chitta Cherita
        </h1>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 animate-fade-up delay-200 italic">
          From Soul to Space — Crafted Stories
        </p>

        {/* Decorative divider */}
        <div className="divider-gold my-8 animate-fade-up delay-300" />

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-400">
          Where every piece whispers a story of hands that care, 
          hearts that create, and souls that pour love into craft.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
          <Link
            to="/category/wall-hangings"
            className="px-10 py-4 bg-primary text-primary-foreground font-body text-lg tracking-wide hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
          >
            Explore Collections
          </Link>
          <a
            href={generateArtisanWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-primary/50 text-primary font-body text-lg tracking-wide hover:border-primary hover:bg-primary/10 transition-all duration-500"
          >
            Talk to the Artisan
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-700">
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
