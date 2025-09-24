export type OrderItem = {
  id: number;
  store: string;
  image: string;
  title: string;
  region: string;
  type: string;
  price: number;
  quantity: number;
};

export const orderItemsData: OrderItem[] = [
  {
    id: 1,
    store: 'Gaming empire',
    image: '/cart/2.webp',
    title: 'V Rising (Global) (PC) - Steam - Digital Key',
    region: 'GLOBAL',
    type: 'GAME',
    price: 1523.13,
    quantity: 1,
  },
  {
    id: 2,
    store: 'Gaming empire',
    image: '/cart/1.webp',
    title: 'Palworld (Global) (PC) - Steam - Digital Key',
    region: 'GLOBAL',
    type: 'GAME',
    price: 4254.32,
    quantity: 1,
  },
];