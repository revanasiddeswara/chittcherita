import { Link } from 'react-router-dom';
import { Product } from '@/data/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  if (!product.slug) {
    return (
      <div className="bg-card border border-border p-6 opacity-50 cursor-not-allowed">
        <p className="text-muted-foreground">
          Product unavailable
        </p>
      </div>
    );
  }

  const getPlaceholderGradient = (name: string) => {
    const gradients = [
      'from-amber-900/20 to-stone-900/40',
      'from-stone-800/30 to-amber-900/20',
      'from-yellow-900/20 to-stone-800/30',
      'from-orange-900/20 to-stone-900/30',
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <div
          className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(
            product.name
          )} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
        >
          <div className="text-center p-4">
            <span className="font-display text-5xl text-primary/30 block mb-2">
              {product.name.charAt(0)}
            </span>
            <span className="font-body text-xs text-muted-foreground/60 tracking-wider uppercase">
              {product.subcategory}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {product.subcategory}
        </span>

        <h3 className="font-display text-xl mt-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="font-body text-muted-foreground italic text-sm line-clamp-2">
          {product.hook}
        </p>

        <div className="mt-4 pt-4 border-t border-border/50">
          <span className="text-sm text-muted-foreground">
            Starting at
          </span>
          <span className="font-display text-lg text-primary ml-2">
            ₹{product.startingPrice.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
