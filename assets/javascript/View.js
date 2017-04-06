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

    // this.$producstAvailable= document.querySelector(`#products-available`);
    this.$productList= document.querySelector(`.product-list`);

    console.log("document.location.hash ", document.location);
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

  showProducts(products){
    const productList = products.reduce((a, product) => {
      return a +
      `<li class="product" id="item-${product.id}">
        <span class="product__information">
          <span class="product__name">${product.name}</span>
          <span class="product__price">$${product.price}</span>
          <span class="product__description">Awesome Ad is an lorem ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
        </span>
        <span class="actions">
          <button type="button" name="button">Add item</button>
        </span>
      </li>`;
    }, '');

    this.$productList.innerHTML = productList;
  }

  bindLogin(handler) {
    this.$signinForm.addEventListener('submit', (oEvent) => {
      oEvent.preventDefault();
      const { $username, $password } = this;
      window.location.hash = '#/checkout';
      handler({ $username, $password });
    });
  }

  bindLoadProducts(handler) {
    window.addEventListener("hashchange", (oEvent) => {
      handler(this.loggedIn);
    } , false);

  }

  bindAddItem(handler){

  }

  bindRemoveItem(handler){

  }

  bindGetTotal(handler){

  }


}
