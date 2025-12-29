import { generateArtisanWhatsAppLink } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-6 opacity-0 animate-fade-up">
            Ready to bring a piece of
            <br />
            <span className="text-primary glow-text">soul-crafted art</span> home?
          </h2>

          <div className="divider-gold my-8 opacity-0 animate-fade-up delay-200" />

          <p className="font-body text-xl text-muted-foreground mb-12 opacity-0 animate-fade-up delay-300">
            Every conversation is personal. Every creation is custom. 
            Let's craft something beautiful together.
          </p>

          {/* WhatsApp Button */}
          <a
            href={generateArtisanWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-body text-lg tracking-wide hover:shadow-gold transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-up delay-400"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start a Conversation</span>
          </a>

          {/* WhatsApp number display */}
          <p className="mt-8 font-body text-muted-foreground opacity-0 animate-fade-up delay-500">
            Or message us directly at{' '}
            <a
              href={generateArtisanWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +91 89516 82834
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
