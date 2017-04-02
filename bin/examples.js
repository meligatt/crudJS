// // Customer has many PricingRules
// // PricingRule belongs to Customer
// // PricingRule has one Product
// // Product has many PricingRules
//
// CUSTOMERS_TABLE = [
//   {
//     name: 'Nike',
//     pricingRules: {
//       {
//         name: 'classic',
//         discount: 'xy',
//         x: 3,
//         y: 2,
//         price: 200,
//         discountPrice: null,
//       },
//       {
//         name: 'standout',
//         x: null,
//         y: null,
//         price: 350,
//         discountPrice: null,
//       }
//     }
//   }
// ];
//
// CUSTOMER_PRICING_RULES_TABLE = [
//   {
//
//   }
// ]
//
//
// PRDOUCTS_DB = [
//   { id: classic
//     name: classic ad
//     price: 200,
//   },
//   { id: classic
//     name: classic ad
//     price: 200,
//   },
//   { id: classic
//     name: classic ad
//     price: 200,
//   }
// ];
//
// let customer = Customer.new('Nike')
//
// co = Checkout.new(customer.pricingRules)
// co.addItem(item1)
// co.addItem(item2)
// co.getTotal()
//
// class Checkout {
//   constructor(pricingRules) {
//     this.products = [];
//   }
//
//
//   addItem (item) => {
//     this.products.push(item);
//   }
//
//   getTotal () => {
//     const classicPrice = pricingRules.classic && pricingRules.classic.discountPrice || standard.classic.price;
//   }
// }
//
// // const pricingRules = [
// //   PricingRule.new({ type: 'xy', x: 3, y: 2, ),
// //   PricingRule.new('super awesome dsicoudsjlkfadsdfls;d'),
// //   PricingRule.new('qty')
// // ]
// //
// // class PricingRule {
// //   constructor (priceType) {
// //     this.type = priceType;
// //   }
// //
// //
// // }
//
// customer.pricingRules = {
//   premium: {
//     discount: 'qty',
//     x: 4,
//     y: null,
//     price: 400,
//     discountPrice: 300,
//   }
// };
//
// class Customer {
//   constructor(nameArg) {
//     // const { classic, standout, premium } = arguments;
//
//     this.name = nameArg;
//     this.pricingRules = CUSTOMER_DB.filter(customer => {
//       return customer.name === nameArg;
//     });
//
//     // (type, itemQty) => {
//     //
//       // switch () {
//       //   case 'xy':
//       //     return classic.price if itemQty < classic.y;
//       //     return classic.price * (y / x);
//       //   case 'standard':
//       //     return classic.price;
//       //   case 'qty':
//       //     return classic.price if itemQty < classic.x;
//       //     return classic.discountPrice;
//       // }
//     }
//   }
// }
//
// productArgs = {
//   type: 'classic',
//   name: 'classic ad',
//   basePrice: 200,
// }
//
// class Product (productArgs) {}
