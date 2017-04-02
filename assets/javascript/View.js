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


  }

  validate() {
    console.log('frontend validation here');
    // empty
    // string
    // trim
  }

  bindLogin(handler) {
    this.$signinForm.addEventListener('submit', (oEvent) => {
      oEvent.preventDefault();
      const { $username, $password } = this;
      handler({ $username, $password });
    });
  }

  setCheckoutVisibility(data, visible) {
     if (visible) {
      this.$signinSection.style.display = `none`;
      this.$checkoutSection.style.display = `block`;
      this.$customerNameSpan.textContent = data.name;
    }
     return false;
  }

  clearSigninForm(msg) {
    this.$username.value='';
    this.$password.value='';
    console.log("msg: ",msg);
  }

  addItem(){

  }

  removeItem(){

  }

  getTotal(){
    
  }


}
