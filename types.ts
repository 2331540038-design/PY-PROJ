
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
