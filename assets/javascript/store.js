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
    this.productsWithDeals =[];
    this.OrderTotal = 0;
    this.counter = {
      classic: 0,
      standout:0,
      premium: 0,
    }
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
    //  console.log("newItem ",newItem);
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
    this.productsWithDeals = this.newProducts.map( this.applyDealToItem.bind(this) );
    return this.productsWithDeals;
  }

  getProducts(currentUser, callback){
    const products = this.applyDeals();
     callback(products);
  }

  addItemToOrder(item, callback) {
    // push an item to this.ORDER array with the recent item added to the listener
    // return the whole array list to update the view.
    this.ORDER.push(item);

    const itemObject = this.getItemInfo(item);

    console.log("itemObject",itemObject);

    this.updateOrderTotal(itemObject);
    callback(this.ORDER);
  }

  getItemInfo(item){
    let itemInfo;
    let currentUser = this.getCurrentUser();
    currentUser.pricingRules.forEach( (pricingRule) => {
      if (pricingRule.id === item) {
         itemInfo = pricingRule;
       }
    });
    return itemInfo;
  }

  removeItemFromOrder(item, deletedItemPosition, callback){
    this.ORDER.splice(deletedItemPosition,1);
    callback(this.ORDER);
  }

  updateOrderTotal(itemObject){
    /*
     need: counter of how many of each ad types are added to order,
     so it can applies the rules
    */

    switch (itemObject.deal) {
      case 'xy':
      if (this.counter.classic === itemObject.deal.x) {
        this.counter.classic -= 1;
      } else {
        this.counter.classic += 1;
      }
      // apply the order total calculation here 

        break;

      case 'discount':
      console.log('applying a discount rule');
        break;

      case 'conditionalDiscount':
      console.log('applying a conditionalDiscount rule');
        break;
      default:

    }
  }
}
