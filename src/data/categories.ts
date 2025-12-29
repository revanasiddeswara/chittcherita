import { Category } from './category';

export const categories: Category[] = [
  {
    id: 'wall-hangings',
    name: 'Wall Hangings',
    slug: 'wall-hangings',
    description: 'Transform your walls into galleries of handcrafted art',
    subcategories: ['Macramé', 'Wooden/Lippan', 'Hand-painted'],
    image: '/placeholder.svg',
  },
  {
    id: 'kids-wear',
    name: 'Kids Wear',
    slug: 'kids-wear',
    description: 'Little stories woven into every stitch',
    subcategories: ['Ready-made', 'Customised'],
    image: '/placeholder.svg',
  },
  {
    id: 'customised-dresses',
    name: 'Customised Dresses',
    slug: 'customised-dresses',
    description: 'Made-to-order elegance for girls and women',
    subcategories: ['Girls', 'Women'],
    image: '/placeholder.svg',
  },
  {
    id: 'gifting-articles',
    name: 'Gifting Articles',
    slug: 'gifting-articles',
    description: 'Gifts that carry pieces of your heart',
    subcategories: ['Handmade', 'Personalised', 'Festival Gifts'],
    image: '/placeholder.svg',
  },
];
