import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messagin-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é :',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }

  //  sendMessage(msg: string): void {
  //   console.log(`mensagem enviada:`, msg);
  // }

  // saveOrder(): void {
  //   console.log('Pedido salvo com sucesso...');
  // }
}
