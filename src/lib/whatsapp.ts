import { Product } from '@/data/product';
import { WHATSAPP_NUMBER } from '@/data/product';

export const generateWhatsAppLinkWithImage = (
  product: Product
): string => {
  const baseUrl =
    typeof window !== 'undefined' ? window.location.origin : '';

  const productUrl = `${baseUrl}/product/${product.slug}`;
  const imageUrl = product.images[0];

  const message = `Hello Chitta Cherita ✨

I’m interested in *${product.name}*

💰 Starting Price: ₹${product.startingPrice.toLocaleString('en-IN')}
🖼️ Image: ${imageUrl}
🔗 Product Link: ${productUrl}

Please share availability, customization options, and delivery details.
`;

  return `https://wa.me/${WHATSAPP_NUMBER.replace(
    '+',
    ''
  )}?text=${encodeURIComponent(message)}`;
};

export const generateArtisanWhatsAppLink = (): string => {
  const message = `Hello Chitta Cherita ✨

I’d love to connect regarding a custom creation or to learn more about your handcrafted collections.

Please let me know how we can proceed.
`;

  return `https://wa.me/${WHATSAPP_NUMBER.replace(
    '+',
    ''
  )}?text=${encodeURIComponent(message)}`;
};
