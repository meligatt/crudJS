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
    this.$productList= document.querySelector(`.product-list`);
    this.$checkoutList= document.querySelector(`.checkout-list`);

    this.delegate = (listener) => {
      return function(oEvent) {
        var el = oEvent.target;
        do {
         if (!(el.classList && el.classList.contains("btn"))) continue;
          oEvent.delegateTarget = el;
          listener(oEvent);
          // listener.apply(this, arguments);
          return;
        } while( (el = el.parentNode) );
      };
    };

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
          <span class="product__name">name:${product.name}</span>
          <span class="product__price">$${product.price}</span>
          <span class="product__priceRule"> ${product.pricingRule?  'special deal:'+product.pricingRule.price :  'price:'+product.price }</span>
          <span class="product__description">Awesome Ad is an lorem ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
        </span>
        <span class="actions">
          <button type="button" name="button" class="btn" data-item="${product.id}">Add item</button>
        </span>
      </li>`;
    }, '');

    this.$productList.innerHTML = productList;
  }

  updateOrderList(items){
    const itemList = items.reduce((a, item) => { return a +
      `<li>${item}</li>`;
      }, '');

    this.$checkoutList.innerHTML = itemList;
  }

  bindLogin(handler) {
    this.$signinForm.addEventListener('submit', (oEvent) => {
      oEvent.preventDefault();
      const { $username, $password } = this;
      handler({ $username, $password });
    });
  }

  bindLoadProducts(handler) {
    window.addEventListener("hashchange", (oEvent) => {
      handler(this.loggedIn);
    }, false);

  }

  bindAddItem(handler){
    const buttonHandler = (oEvent) => {
      var button = oEvent.delegateTarget;
      if(!button.classList.contains("added")) {
        button.classList.add("added");
      }
      else {
        button.classList.remove("added");
      }

      handler(button.getAttribute('data-item'));
    };

    this.$productList.addEventListener('click', this.delegate(buttonHandler));
  }

  bindRemoveItem(handler){

  }

  bindGetTotal(handler){

  }



}
