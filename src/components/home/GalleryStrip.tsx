import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryItems = [
  { id: 1, image: gallery1, alt: 'Handcrafted materials and macramé' },
  { id: 2, image: gallery2, alt: 'Artisan hands weaving macramé' },
  { id: 3, image: gallery3, alt: 'Traditional Lippan mirror art' },
  { id: 4, image: gallery4, alt: 'Premium embroidery threads' },
  { id: 5, image: gallery5, alt: 'Handmade festival diyas' },
  { id: 6, image: gallery6, alt: 'Handcrafted fabric flowers' },
];

const GalleryStrip = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <span className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Glimpses of <span className="text-primary">Our Craft</span>
          </h2>
        </div>
      </div>

      {/* Gallery Strip - Horizontal Scroll on Mobile, Grid on Desktop */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex md:grid md:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible px-6 md:px-12 scrollbar-hide">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-64 md:w-auto aspect-square overflow-hidden bg-card border border-border group opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="container mx-auto px-6 mt-12 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span>Follow our journey on Instagram</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default GalleryStrip;
