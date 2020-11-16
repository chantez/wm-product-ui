export interface Product {
  name: string;
  username: string;
  email: string;
}

export interface FoundProduct {
  foundProducts: Product[];
  palindromo: boolean;
}
