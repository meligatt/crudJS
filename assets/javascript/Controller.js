class Controller {
  constructor(store, view){
    this.store= store;
    this.view = view;

    view.bindLogin(this.login.bind(this));
    view.bindLoadProducts(this.loadProducts.bind(this));
    view.bindAddItem(this.addItem.bind(this));

  }

  login({ $username , $password }) {
    const userCredentials = { username: $username.value, password: $password.value };
    this.store.findUser(userCredentials, (data) => {
      if (data.hasOwnProperty('name')) {
        this.view.setLoggedInStatus(data, true);
        window.location.hash = '#/checkout';
        this.view.setCheckoutVisibility(true);
      } else {
        this.view.clearSigninForm(data);
      }
    });
  }

  loadProducts(loggedIn) {
    const currentUser = this.store.getCurrentUser();
    if (loggedIn) {
      this.store.getProducts(currentUser , (data) => {
        this.view.showProducts(data);
      });
    }
  }

  addItem(item) {
    // get the item id that was added through clicking the add item button
    // add the element to the store ORDER structure
    // show otems in Your order section
    this.store.addItemToOrder(item, (data) => {
      this.view.updateOrderList(data);
    });
  }


}
