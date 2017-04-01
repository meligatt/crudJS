class SigninController {
  constructor(store, view){
    this.store= store;
    this.view = view;

    view.bindLogin(this.login.bind(this));
  }

  login( {$username , $password} ){
    const userCredentials = { username: $username.value, password: $password.value };

    this.store.findUser(userCredentials, (data) => {
      this.view.goToCheckout(data);
    });
  }


}
