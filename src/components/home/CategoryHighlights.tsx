import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import categoryWallHangings from '@/assets/category-wall-hangings.jpg';
import categoryKidsWear from '@/assets/category-kids-wear.jpg';
import categoryDresses from '@/assets/category-dresses.jpg';
import categoryGifting from '@/assets/category-gifting.jpg';

const categoryImages: Record<string, string> = {
  'wall-hangings': categoryWallHangings,
  'kids-wear': categoryKidsWear,
  'customised-dresses': categoryDresses,
  'gifting-articles': categoryGifting,
};

const CategoryHighlights = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Collections
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Explore Our <span className="text-primary">Crafted Worlds</span>
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-700 opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={categoryImages[category.slug]} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="font-body text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {category.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="font-body text-sm tracking-wider">Explore</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 shadow-glow" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
