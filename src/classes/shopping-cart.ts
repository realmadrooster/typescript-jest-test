// type CartItem = { name: string, price: numb
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
// type OrderStatus = 'open' | 'closed';
// import { OrderStatus } from './interfaces/order-status';


export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];
  // private _orderStatus: OrderStatus = 'open'; //

  constructor(private readonly discount: Discount) {}

  additem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem( index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // //
  // get orderStatus(): OrderStatus {
  //   return this._orderStatus;
  // }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);// o sinal de + junto ao this permite que eu use a funçao tofixed que retorna uma string retornar um number
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }
  // //
  // checkout(): void {
  //   if (this.isEmpty()) {
  //     console.log('Seu carrinho esta vazio');
  //     return;
  //   }

  //   this._orderStatus = 'closed';
  //   this.sendMessage('seu pedido foi recebido');
  //   this.saveOrder();
  //   this.clear();
  // }
// so tem uma validaçao entao ficara no codigo
  isEmpty(): Boolean {
    return this._items.length === 0;
  }

  // //
  // sendMessage(msg: string): void {
  //   console.log(`seu pedido com total de ${this.total()} foi recebido`);
  // }

  // //
  // saveOrder(): void {
  //   console.log('Pedido salvo com sucesso...');
  // }

  clear(): void {
    console.log('carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
