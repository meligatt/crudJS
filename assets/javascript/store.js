class Store {
  constructor(name){
    const localStorage = window.localStorage;

    //TODO add this data to the db json file
    this.CUSTOMERS = [
      {
        name: 'Ford',
        pricingRules:
        [  {
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
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
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
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
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
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
            name: 'classic',
            discount: 'xy',
            x: 3,
            y: 2,
            price: 200,
            discountPrice: null,
          },
          {
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
      callback(user[0]);
    } else {
      callback('credentials not found');
    }
  }

  getProducts(callback){
    callback(this.PRODUCTS);
  }
}
