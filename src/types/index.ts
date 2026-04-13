export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
  token: string;
}

export type LoginPayload = Pick<SignupPayload, 'email' | 'password'>;

export interface SignupPayload {
  email: string;
  name: string;
  password?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
