import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { categories } from '@/data/categories';
import { generateArtisanWhatsAppLink } from '@/lib/whatsapp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl md:text-3xl text-primary tracking-widest">
            Chitta Cherita
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-lg link-underline">
              Home
            </Link>
            <div className="relative group">
              <span className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-lg cursor-pointer">
                Collections
              </span>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-card border border-border rounded-sm p-4 min-w-[200px] shadow-soft">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block py-2 px-3 text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors duration-200 font-body"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-lg link-underline">
              Our Story
            </Link>
            <a
              href={generateArtisanWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-lg"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-xl py-2"
              >
                Home
              </Link>
              <div className="py-2">
                <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">Collections</span>
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 font-body text-lg"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-xl py-2"
              >
                Our Story
              </Link>
              <a
                href={generateArtisanWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 border border-primary text-primary text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-lg"
              >
                Connect with Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
