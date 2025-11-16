
import React from 'react';
import { Product } from '../types';
import { PlusIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <div className="relative pb-[75%]"> {/* 4:3 Aspect Ratio */}
        <img
          className="absolute h-full w-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-text mb-1">{product.name}</h3>
        <p className="text-sm text-text-muted mb-4">{product.category}</p>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-primary text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label={`Add ${product.name} to cart`}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
