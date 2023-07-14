export interface Order {
  product: string;
  quantity: number;
}

export async function getOrders(): Promise<Order[]> {
  return Promise.resolve([
    { product: 'Pizza', quantity: 1 },
    { product: 'Salad', quantity: 3 },
  ]);
}
