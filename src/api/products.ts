import type { Product } from '../types';


const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luxury Egyptian Cotton Set',
    price: 189.99,
    description: 'Experience 5-star hotel luxury at home with our 1000 thread count Egyptian cotton duvet set. Breathable, durable, and incredibly soft.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    category: 'Bedding',
    rating: 4.9,
    stock: 25,
  },
  {
    id: '2',
    name: 'Velvet Dream Accent Cushion',
    price: 34.99,
    description: 'Add a touch of elegance to your sanctuary with our plush velvet cushions. Available in a variety of soothing pastel tones.',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    category: 'Decor',
    rating: 4.7,
    stock: 50,
  },
  {
    id: '3',
    name: 'Organic Cotton Baby Romper',
    price: 29.99,
    description: 'Ultra-soft, GOTS certified organic cotton romper for your little ones. Designed with delicate skin in mind.',
    image: 'https://images.unsplash.com/photo-1522771917583-6dfba023cc1e?w=800&q=80',
    category: 'Kids Wear',
    rating: 4.8,
    stock: 12,
  },
  {
    id: '4',
    name: 'Chunky Woolen Throw',
    price: 110.00,
    description: 'Hand-knitted from 100% pure merino wool, this chunky throw blanket is the ultimate companion for cozy nights.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80',
    category: 'Blankets',
    rating: 4.9,
    stock: 15,
  },
  {
    id: '5',
    name: 'Silk Dream Pillowcase Pair',
    price: 55.00,
    description: 'Wake up with glowing skin and smooth hair. Our 22 momme mulberry silk pillowcases are a beauty sleep essential.',
    image: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&q=80',
    category: 'Bedding',
    rating: 4.9,
    stock: 30,
  },
  {
    id: '6',
    name: 'Cloud Print Pajama Set',
    price: 39.99,
    description: 'Make bedtime magical with our signature cloud print pajamas. Made from stretchy bamboo fabric for year-round comfort.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    category: 'Kids Wear',
    rating: 4.7,
    stock: 20,
  },
  {
    id: '7',
    name: 'Floral Linen Cushion',
    price: 24.99,
    description: 'Bring the outdoors in with our hand-printed floral linen cushions. A perfect blend of rustic charm and modern style.',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&q=80',
    category: 'Decor',
    rating: 4.5,
    stock: 40,
  },
  {
    id: '8',
    name: 'Woven Summer Blanket',
    price: 75.00,
    description: 'Lightweight and breathable, our honeycomb woven cotton blanket is perfect for warm summer nights.',
    image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=800&q=80',
    category: 'Blankets',
    rating: 4.6,
    stock: 18,
  },
];

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return MOCK_PRODUCTS;
  },
  getProductById: async (id: string): Promise<Product | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_PRODUCTS.find((p) => p.id === id);
  },
};
