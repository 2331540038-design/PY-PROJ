import React from 'react';
import { CartItem } from '../types';
import { XMarkIcon, TrashIcon } from './icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <XMarkIcon />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <p className="text-lg text-text-muted">Your cart is empty.</p>
              <button onClick={onClose} className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6">
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      {/* FIX: Corrected a typo in the closing paragraph tag. */}
                      <p className="text-text-muted">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                          className="w-16 p-1 border rounded-md text-center"
                          min="1"
                        />
                      </div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-gray-100">
                      <TrashIcon />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {items.length > 0 && (
            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between items-center font-semibold text-lg mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;