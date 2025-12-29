import Layout from '@/components/layout/Layout';
import { generateArtisanWhatsAppLink } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6 block opacity-0 animate-fade-up">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8 opacity-0 animate-fade-up delay-200">
              Where Hands Meet Heart,
              <br />
              <span className="text-primary">Stories Are Born</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Opening */}
            <div className="mb-16 opacity-0 animate-fade-up delay-300">
              <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                Chitta Cherita began as a whisper of an idea — that the things we create 
                with our hands carry something that factory lines cannot replicate: soul.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                In a world that moves faster every day, we chose to slow down. To tie each 
                knot with intention. To paint each stroke with purpose. To stitch each thread 
                with love.
              </p>
            </div>

            <div className="divider-gold my-16 opacity-0 animate-fade-up delay-400" />

            {/* The Name */}
            <div className="mb-16 opacity-0 animate-fade-up delay-500">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                The Name
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="text-primary italic">"Chitta Cherita"</span> — a name that 
                dances between languages, carrying meanings close to our heart. "Chitta" speaks 
                of the mind, the soul, the consciousness. "Cherita" whispers of stories, of 
                tales waiting to be told.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Together, they become what we do: we create stories that speak to the soul.
              </p>
            </div>

            {/* The Craft */}
            <div className="mb-16 opacity-0 animate-fade-up delay-600">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                The Craft
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Every creation that leaves our hands is a collaboration. A conversation between 
                ancient techniques and contemporary needs. Between what the material wants to 
                become and what you dream of having.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We don't believe in mass production. We believe in meaningful creation. Whether 
                it's a macramé piece that transforms your wall, a dress that makes your little 
                one feel special, or a gift that carries pieces of your heart — each one is 
                crafted as if it's the only one that matters. Because to us, it is.
              </p>
            </div>

            {/* The Promise */}
            <div className="mb-16 opacity-0 animate-fade-up delay-700">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                The Promise
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When you choose Chitta Cherita, you're not just buying a product. You're 
                welcoming a piece of someone's time, creativity, and care into your life. 
                You're supporting a way of creating that values quality over quantity, 
                connection over transaction, and soul over speed.
              </p>
            </div>

            <div className="divider-gold my-16 opacity-0 animate-fade-up delay-800" />

            {/* CTA */}
            <div className="text-center opacity-0 animate-fade-up delay-800">
              <p className="font-body text-xl text-foreground mb-8 italic">
                "Every piece is a conversation waiting to happen."
              </p>
              <a
                href={generateArtisanWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-body text-lg tracking-wide hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Let's Start Our Story</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
