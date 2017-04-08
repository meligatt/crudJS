class Store {
  constructor(name){
    const localStorage = window.localStorage;

    //TODO add this data to the db json file
    // deal: xy | discount | conditionalDiscount
    this.CUSTOMERS = [
      {
        name: 'Ford',
        pricingRules:
        [  {
            id: 'classic',
            name: 'Classic Ad',
            deal: 'xy',
            dealDescription: 'Lorem ipsum xy',
            x: 5,
            y: 4,
            discountPrice: null,
          },
          {
            id: 'standout',
            name: 'Standout Add',
            deal: 'discount',
            dealDescription: 'Lorem ipsum discount',
            x: null,
            y: null,
            discountPrice: 309.99,
          },
          {
            id: 'premium',
            name: 'Premium Add',
            deal: 'conditionalDiscount',
            dealDescription: 'Lorem ipsum conditional Discount',
            x: 3,
            y: null,
            discountPrice: 389.99,
          },
         ]
      },
    ];

    this.PRODUCTS =
    [
      {
        id: 'classic',
        name: 'Classic Ad',
        price:269.99
      },
      {
        id: 'standout',
        name: 'Standout Ad',
        price: 322.99
      },
      {
        id: 'premium',
        name: 'Premium Ad',
        price: 304.99
      },
    ];
    this.ORDER = [];

    let liveJobads;

    this.getLocalStorage = () => {
      return liveJobads || JSON.stringify(localStorage.getItem(name) || '[]');
    };

    this.setLocalStorage = (jobads) => {
      localStorage.setItem(name, JSON.stringify(liveJobads = jobads));
    }
  }

  // insert(item, callback){
  //    const jobads = this.getLocalStorage();
  //
  //    jobads.push(item);
  //
  //    this.setLocalStorage(jobads);
  //
  //    if (callback) {
  //      callback();
  //    }
  // }

  findUser({username, password}, callback){
    const user = this.CUSTOMERS.filter(customer => {
       if (!(customer.name === username)) {
        return false;
       }
       return true;
     });

    if (user.length > 0) {
      this.setCurrentUser(user[0]);
      callback(user[0]);
    } else {
      callback('credentials not found');
    }
  }

  setCurrentUser(currentUser){
    this.CURRENTUSER = currentUser;
  }

  getCurrentUser(){
    return this.CURRENTUSER;
  }

   applyDealToItem(item) {
     let newItem = item;
     let currentUser = this.getCurrentUser();
     currentUser.pricingRules.forEach( (pricingRule) => {
       if (pricingRule.id === item.id) {
         newItem.pricingRule = pricingRule;
        }
     });
     return newItem;
   }

  applyDeals(){
    this.newProducts = this.PRODUCTS;
    const productsWithDeals = this.newProducts.map( this.applyDealToItem.bind(this) );
    return productsWithDeals;
  }

  getProducts(currentUser, callback){
    const products = this.applyDeals();
    console.log(products);
     callback(products);
  }

  addItemToOrder(item, callback) {
    // push an item to this.ORDER array with the recent item added to the listener
    // return the whole array list to update the view.
    this.ORDER.push(item);
    callback(this.ORDER);
  }


}
