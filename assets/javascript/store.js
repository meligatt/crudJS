class Store {
  constructor(name){
    const localStorage = window.localStorage;

    //TODO add this data to the db json file
    this.CUSTOMERS = [
      {
        name: 'Ford',
        pricingRules:
        [  {
            id: 'classic',
            name: 'classic Ad',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
            id: 'standout',
            name: 'standout',
            x: null,
            y: null,
            price: 350,
            discountPrice: null,
          }
         ]
      },
      {
        name: 'Nike',
        pricingRules:
        [  {
            id: 'classic',
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
            id: 'standout',
            name: 'standout',
            x: null,
            y: null,
            price: 350,
            discountPrice: null,
          }]
      },
      {
        name: 'Apple',
        pricingRules:
        [  {
            id: 'classic',
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
            id: 'standout',
            name: 'standout',
            x: null,
            y: null,
            price: 350,
            discountPrice: null,
          }
         ]
      },
      {
        name: 'Unilever',
        pricingRules:
        [  {
            id: 'classic',
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
            id: 'standout',
            name: 'standout',
            x: null,
            y: null,
            price: 350,
            discountPrice: null,
          }
         ]
      },
    ];

    this.PRODUCTS =
    [
      {
        id: 'classic',
        name: 'Classic Ad',
        price:'269.99'
      },
      {
        id: 'standout',
        name: 'Standout Ad',
        price:'322.99'
      },
      {
        id: 'premium',
        name: 'Premium Ad',
        price:'304.99'
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
     callback(products);
  }

  addItemToOrder(item, callback) {
    // push an item to this.ORDER array with the recent item added to the listener
    // return the whole array list to update the view.
    this.ORDER.push(item);
    callback(this.ORDER);
  }


}
