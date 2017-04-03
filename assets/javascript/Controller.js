class Controller {
  constructor(store, view){
    this.store= store;
    this.view = view;

    view.bindLogin(this.login.bind(this));
    view.bindLoadProducts(this.loadProducts.bind(this));
  }

  login({ $username , $password }) {
    const userCredentials = { username: $username.value, password: $password.value };
    this.store.findUser(userCredentials, (data) => {
      if (data.hasOwnProperty('name')) {
        this.view.setLoggedInStatus(data, true);
        this.view.setCheckoutVisibility(true);
      } else {
        this.view.clearSigninForm(data);
      }
    });
  }

  loadProducts(loggedIn) {
    this.store.getProducts((data) => {
      
    });
  }


}
