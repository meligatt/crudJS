class View {
  constructor () {
    // signin section elements
    this.$signinSection = document.querySelector(`#signin`);
    this.$username = document.querySelector(`.username`);
    this.$password = document.querySelector(`.password`);
    this.$signinButton = document.querySelector(`.button--signin`);
    this.$signinForm = document.querySelector(`#signin-form`);

    // checkout section elements
    this.$checkoutSection = document.querySelector(`#checkout`);
    this.$customerNameSpan = document.querySelector(`.customer-name`);

    this.loggedIn = false;
  }

  validate() {
    console.log('frontend validation here');
    // empty
    // string
    // trim
  }

  setCheckoutVisibility(visible) {
    if (visible) {
      this.$signinSection.style.display = `none`;
      this.$checkoutSection.style.display = `block`;
    }
    return false;
  }

  setLoggedInStatus(data, status){
    this.loggedIn = status;
    if (this.loggedIn) {
      this.$customerNameSpan.textContent = data.name;
    }
  }

  clearSigninForm(msg) {
    this.$username.value='';
    this.$password.value='';
    console.log("msg: ",msg);
  }

  bindLogin(handler) {
    this.$signinForm.addEventListener('submit', (oEvent) => {
      oEvent.preventDefault();
      const { $username, $password } = this;
      handler({ $username, $password });
    });
  }

  bindLoadProducts(handler) {
    if (this.loggedIn) {
      handler(this.loggedIn);
    }
  }

  bindAddItem(handler){

  }

  bindRemoveItem(handler){

  }

  bindGetTotal(handler){

  }


}
