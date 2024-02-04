import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>
  additem(item: CartItem): void
  removeItem( index: number): void
  total(): number
  totalWithDiscount(): number
  isEmpty(): Boolean
  clear(): void
}
