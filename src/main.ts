// modulos de alto nivel nao devem depender de modulos de baixo nivel . Ambos devem depender de abstraçoes.
// Dependa de abstraçoes, nao de implementaçoes
// Abstraçoes nao devem depender de detalhes. Detalhes devem depender de abstraçoes
// Classes de baixo nivel sao classes que executam tarefas (ou detalhes)
// Classes de alto nivel sao classes que gerenciam as classes de baixo nivel

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from './services/persistency';
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";


// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount); // injeçao de dependencia
const messaging = new Messaging();
const persistency = new Persistency;
// const individualCustomer = new IndividualCustomer('Luiz', ' Carlos', '111.111.111-11');
const enterpriseCustomer = new EnterpriseCustomer('Luiz Enterprise', '44444444444');

const order = new Order(shoppingCart, messaging, persistency,enterpriseCustomer);
shoppingCart.additem(new Product('camiseta', 49.9));
shoppingCart.additem(new Product('caderno', 9.96));
shoppingCart.additem(new Product('lapis', 1.59));

// shoppingCart.clear();

console.log(shoppingCart.items);
console.log
(shoppingCart.total());
console.log
(shoppingCart.totalWithDiscount());

console.log(order.orderStatus);


order.checkout();

console.log(order.orderStatus);
