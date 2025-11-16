
import React from 'react';
import { ShoppingCartIcon, ChartBarIcon, BuildingStorefrontIcon } from './icons';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentView: 'shop' | 'admin';
  onViewChange: (view: 'shop' | 'admin') => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, currentView, onViewChange }) => {
  return (
    <header className="bg-surface shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-primary font-bold text-2xl">
              TechSphere
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => onViewChange('shop')}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  currentView === 'shop' ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Shop View"
              >
                <BuildingStorefrontIcon />
              </button>
              <button
                onClick={() => onViewChange('admin')}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  currentView === 'admin' ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Admin Dashboard"
              >
                <ChartBarIcon />
              </button>
            </div>
            
            <button
              onClick={onCartClick}
              className="relative text-gray-500 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <ShoppingCartIcon />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
