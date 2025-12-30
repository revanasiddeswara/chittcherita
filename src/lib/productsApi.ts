import { Product } from '@/data/product';

const API_URL = 'https://script.google.com/macros/s/AKfycbzmwsCkguDsHyCg8p6suyqCkie1AwxrXhbtFQQ5h3ML-6Nyjc7LNUabTL5cfE2AvZt8fg/exec';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find(p => p.slug === slug);
}

export async function fetchProductsByCategory(
  category: string
): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter(p => p.category === category);
}
