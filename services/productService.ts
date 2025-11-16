
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'ZenBook Pro Duo 15',
    category: 'Laptops',
    price: 2499.99,
    description: 'A revolutionary laptop with a 4K OLED display and a secondary 4K touchscreen for ultimate multitasking.',
    imageUrl: 'https://picsum.photos/seed/laptop1/600/400',
  },
  {
    id: 2,
    name: 'Galaxy S24 Ultra',
    category: 'Phones',
    price: 1299.99,
    description: 'The ultimate smartphone with a pro-grade camera, stunning display, and powerful performance.',
    imageUrl: 'https://picsum.photos/seed/phone1/600/400',
  },
  {
    id: 3,
    name: 'AcousticPro Wireless Headphones',
    category: 'Headphones',
    price: 349.00,
    description: 'Experience industry-leading noise cancellation and superior sound quality in a comfortable design.',
    imageUrl: 'https://picsum.photos/seed/headphones1/600/400',
  },
  {
    id: 4,
    name: 'AeroBook Air',
    category: 'Laptops',
    price: 1199.00,
    description: 'Incredibly thin and light, the AeroBook Air features a brilliant display and all-day battery life.',
    imageUrl: 'https://picsum.photos/seed/laptop2/600/400',
  },
  {
    id: 5,
    name: 'Pixel 9 Pro',
    category: 'Phones',
    price: 999.00,
    description: 'The smart choice. An amazing camera system powered by AI and the best of Google.',
    imageUrl: 'https://picsum.photos/seed/phone2/600/400',
  },
  {
    id: 6,
    name: 'Quantum Gaming Rig',
    category: 'Desktops',
    price: 3200.50,
    description: 'Unleash peak gaming performance with the latest CPU and GPU, liquid-cooled for stability.',
    imageUrl: 'https://picsum.photos/seed/desktop1/600/400',
  },
  {
    id: 7,
    name: 'EchoBuds Pro',
    category: 'Headphones',
    price: 129.99,
    description: 'Compact and comfortable true wireless earbuds with crisp, balanced sound and hands-free assistant.',
    imageUrl: 'https://picsum.photos/seed/headphones2/600/400',
  },
  {
    id: 8,
    name: 'ChronoWatch Series 9',
    category: 'Wearables',
    price: 429.00,
    description: 'The future of health on your wrist. Track your vitals, workouts, and stay connected on the go.',
    imageUrl: 'https://picsum.photos/seed/watch1/600/400',
  },
];

export const getProducts = (): Product[] => {
  return products;
};
