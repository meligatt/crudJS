class SigninView {
  constructor () {
    this.$username = document.querySelector(`.username`);
    this.$password = document.querySelector(`.password`);
    this.$signinButton = document.querySelector(`.button--signin`);
    // this.$signinForm = document.querySelector(`.signin-form`);
  }

  validate(){
    console.log('frontend validation here');
    // empty
    // string
    // trim
  }

  bindLogin(handler){
    this.$signinButton.addEventListener('click', (oEvent) => {
      // const userCredentials = { username: this.$username, password: this.$password };
      const { $username, $password } = this;
      handler({ $username, $password });

    });
  }

  goToCheckout(data){
    console.log('redirect to checkout view');
  }
}
