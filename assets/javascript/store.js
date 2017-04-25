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

    // this.CUSTOMERS = [
    //   {
    //     name: 'Ford',
    //     pricingRules:
    //     [  {
    //         id: 'classic',
    //         name: 'Classic Ad',
    //         deal: 'xy',
    //         dealDescription: 'Lorem ipsum xy',
    //         x: 5,
    //         y: 4,
    //         discountPrice: null,
    //       },
    //       {
    //         id: 'standout',
    //         name: 'Standout Add',
    //         deal: 'xy',
    //         dealDescription: 'Lorem ipsum xy',
    //         x: 4,
    //         y: 2,
    //         discountPrice: null,
    //       },
    //       {
    //         id: 'premium',
    //         name: 'Premium Add',
    //         deal: 'conditionalDiscount',
    //         dealDescription: 'Lorem ipsum conditional Discount',
    //         x: 3,
    //         y: null,
    //         discountPrice: 389.99,
    //       },
    //      ]
    //   },
    // ];

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
      classic: {
        paid: 0,
        free:0,
      },
      standout: {
        paid: 0,
        free: 0,
      },
      premium: {
        paid: 0,
        free:0,
      },
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
    const counter = this.itemCounter(item);
    this.updateOrderTotal(itemObject, counter);
    callback(this.ORDER, this.counter);

  }

  getItemInfo(item){
    let itemInfo;
    let currentUser = this.getCurrentUser();
    currentUser.pricingRules.forEach( (pricingRule) => {
      if (pricingRule.id === item) {
         itemInfo = pricingRule;
       }
    });
     const product = this.PRODUCTS.filter( (product) => {
        if (product.id === item) {
          return  true;
        }
     });

     itemInfo.price = product[0].price;
    return itemInfo;
  }

  removeItemFromOrder(item, deletedItemPosition, callback){
    this.ORDER.splice(deletedItemPosition,1);
    callback(this.ORDER);
  }

  updateOrderTotal(itemObject, counter){
    switch (itemObject.deal) {
      case 'xy':
      // console.log("itemObject",itemObject);
        const remainder = counter[itemObject.id]['paid'] % itemObject.y;
        if ( remainder === 0 ) {
         this.counter[itemObject.id]['free']++;
        }
        // const totalItems = this.counter[itemObject.id]['paid'] - this.counter[itemObject.id]['free'];
        // totalToPay += totalItems * 
        break;

      case 'discount':

        break;

      case 'conditionalDiscount':

        break;
      default:
    }
   }

  itemCounter(itemId){
    this.counter[itemId]['paid']++;
    return this.counter;
  }
}
