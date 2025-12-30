import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { generateArtisanWhatsAppLink } from '@/lib/whatsapp';


const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl text-primary mb-4">Chitta Cherita</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
              From Soul to Space — Crafted Stories. Each creation carries a piece of our heart, 
              handmade with intention and delivered with love.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={generateArtisanWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/chittacherita?igsh=emZxZG9ldjY1c3B6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Collections</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <a
                  href={generateArtisanWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Chitta Cherita. Handcrafted with love in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
