import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Product } from '@/data/product';
import { fetchProductBySlug } from '@/lib/productsApi';
import { generateWhatsAppLinkWithImage } from '@/lib/whatsapp';
import { Heart, Share2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import CraftLoader from '@/components/ui/CraftLoader';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetchProductBySlug(slug)
      .then(p => {
        setProduct(p ?? null);
        if (p?.images?.length) setActiveImage(p.images[0]);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <CraftLoader />
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="p-20 text-center">Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <Link
          to={`/category/${product.category}`}
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to collection
        </Link>

        <div className="grid lg:grid-cols-[520px_1fr] gap-20 mt-10">
          {/* IMAGE COLUMN */}
          <div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card shadow-soft">
              <img
                src={activeImage ?? product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-4 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border transition-all ${
                      img === activeImage
                        ? 'border-primary scale-105'
                        : 'border-border opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CONTENT COLUMN */}
          <div>
            <h1 className="font-display text-5xl text-primary mb-4">
              {product.name}
            </h1>

            <div className="relative mb-8 px-6 py-5 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
              <span className="absolute -top-3 left-4 text-6xl text-primary/30 font-display">
                “
              </span>
              <p className="text-xl italic text-foreground/90 leading-relaxed pl-4">
                {product.hook}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold">
                Starting from ₹{product.startingPrice.toLocaleString('en-IN')}
              </span>
              {product.customizable && (
                <span className="text-xs px-3 py-1 rounded-full border border-primary text-primary">
                  Fully Customizable
                </span>
              )}
            </div>

            <div className="border border-border rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-3 text-primary">
                Customization Available
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Choose your preferred colors and materials</li>
                <li>• Custom sizing and measurements</li>
                <li>• Personalized design elements</li>
                <li>• Names, messages, or motifs</li>
              </ul>
            </div>

            <a
              href={generateWhatsAppLinkWithImage(product)}
              target="_blank"
              className="
                group block w-full text-center
                rounded-full px-10 py-5
                border border-[#d4af37]
                bg-[#111]
                text-[#d4af37]
                shadow-[0_0_0_0_rgba(212,175,55,0.4)]
                hover:shadow-[0_0_30px_2px_rgba(212,175,55,0.35)]
                transition-all duration-300
                hover:scale-[1.03]
                mb-4
              "
            >
              <span className="flex items-center justify-center gap-3 text-lg font-semibold tracking-wide">
                <FaWhatsapp className="text-2xl" />
                Chat on WhatsApp
              </span>
              <span className="block text-xs mt-1 text-[#d4af37]/80">
                Personal consultation • No payment required
              </span>
            </a>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 border border-border rounded-full py-3">
                <Heart size={16} /> Save
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-border rounded-full py-3">
                <Share2 size={16} /> Share
              </button>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-primary">
                Crafted with Care
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Handcrafted by skilled artisans</li>
                <li>✓ Premium-quality materials</li>
                <li>✓ Every piece is unique</li>
                <li>✓ Direct artisan communication</li>
                <li>✓ Customization via WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
