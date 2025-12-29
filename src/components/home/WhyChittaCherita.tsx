import { Hand, Palette, Heart, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Handcrafted',
    description: 'Every piece is made entirely by hand, carrying the warmth of human touch and attention to detail that machines cannot replicate.'
  },
  {
    icon: Palette,
    title: 'Customised',
    description: 'Your vision becomes our creation. We work with you to craft pieces that are uniquely yours, reflecting your taste and story.'
  },
  {
    icon: Heart,
    title: 'Made with Soul',
    description: 'More than products — these are expressions of creativity and care. Each creation is infused with intention and love.'
  },
  {
    icon: MessageCircle,
    title: 'Direct Connection',
    description: 'No middlemen, no complicated processes. Connect directly with the artisan through WhatsApp for a personal experience.'
  }
];

const WhyChittaCherita = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            The Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Why <span className="text-primary">Chitta Cherita</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-gold transition-all duration-500">
                <feature.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChittaCherita;
