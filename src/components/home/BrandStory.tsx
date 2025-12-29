const BrandStory = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6 block opacity-0 animate-fade-up">
            Our Story
          </span>

          {/* Poetic Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-8 opacity-0 animate-fade-up delay-200">
            In a world of mass production,
            <br />
            <span className="text-primary">we choose to create with soul.</span>
          </h2>

          <div className="divider-gold my-10 opacity-0 animate-fade-up delay-300" />

          <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-up delay-400">
            Chitta Cherita was born from a simple belief — that the objects 
            we surround ourselves with should carry meaning. Each thread we weave, 
            each brushstroke we lay, each stitch we place holds the warmth of 
            hands that care deeply about their craft.
          </p>

          <p className="font-body text-lg text-foreground/60 leading-relaxed opacity-0 animate-fade-up delay-500">
            We don't create products. We create companions for your spaces, 
            your celebrations, your precious ones. Stories that you take home, 
            that become part of your own narrative.
          </p>

          {/* Signature */}
          <div className="mt-12 opacity-0 animate-fade-up delay-600">
            <p className="font-display text-primary text-xl italic">
              — with love, the hands behind Chitta Cherita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
