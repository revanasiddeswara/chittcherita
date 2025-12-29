import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { categories } from '@/data/categories';
import { fetchProductsByCategory } from '@/lib/productsApi';
import { Product } from '@/data/product';
import { ArrowLeft } from 'lucide-react';
import CraftLoader from '@/components/ui/CraftLoader';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const category = categories.find(c => c.slug === slug);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    fetchProductsByCategory(slug)
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-4">
              Category Not Found
            </h1>
            <Link to="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

 if (loading) {
     return (
       <Layout>
         <CraftLoader />
       </Layout>
     );
   }

  // Group products by subcategory
  const productsBySubcategory = category.subcategories.reduce(
    (acc, subcategory) => {
      acc[subcategory] = products.filter(
        p => p.subcategory === subcategory
      );
      return acc;
    },
    {} as Record<string, Product[]>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Collection
            </span>
            <h1 className="font-display text-5xl mt-4">
              {category.name}
            </h1>
            <p className="italic text-muted-foreground mt-6">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex gap-6 overflow-x-auto">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className={
                cat.slug === slug
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {category.subcategories.map(subcategory => {
            const list = productsBySubcategory[subcategory];
            if (!list || list.length === 0) return null;

            return (
              <div key={subcategory} className="mb-20">
                <h2 className="font-display text-3xl mb-8">
                  {subcategory}
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {list.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {products.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              New creations coming soon…
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
