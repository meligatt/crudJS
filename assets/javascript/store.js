class Store {
  constructor(name){
    const localStorage = window.localStorage;

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
      }
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
}
