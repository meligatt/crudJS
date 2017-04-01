const store = new Store();
const signinView = new SigninView();
const signinController = new SigninController(store, signinView);
// const jobAdView = new JobadView();
// const store = new Store('jobadsStore');
// const jobadController = new JobadController(store, jobAdView);

// obj from db:
// const oPricingRules = {
//   premium: {
//     discount: 'qty',
//     x: 4,
//     y: null,
//     price: 400,
//     discountPrice: 300,
//   }
// };
//
// const customer = new Customer('Nike', 'privileged', oPricingRules );
// const pricingRules = customer.getPrincingRules();
// const checkout = new Checkout(pricingRules);
