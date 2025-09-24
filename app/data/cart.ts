// cart.ts
export type CartItem = {
  id: number;
  store: string;
  image: string;
  title: string;
  region: string;
  type: string;
  price: number;
  quantity: number;
};

export const cartItemsData: CartItem[] = [
  {
    id: 1,
    store: "Gaming empire",
    image: '/cart/2.webp',
    title: "V Rising (Global) (PC) - Steam - Digital Key",
    region: "GLOBAL",
    type: "GAME",
    price: 1528.75,
    quantity: 1
  },
];