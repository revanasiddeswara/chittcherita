import { Product } from '@/data/product';

const API_URL = 'https://script.google.com/macros/s/AKfycbz69OnAo_ljTPcS2nILIefO3jDV7Ck9hlVKxAQqu50tPyVXNeCABWTsaPRjKmyl3RA9Dw/exec';

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
