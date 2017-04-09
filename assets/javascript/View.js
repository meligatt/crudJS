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
    this.$totalSpan = document.querySelector(`.cart-total`);

    this.delegate = (criteria, listener) => {
      return function(oEvent) {
        var el = oEvent.target;
        do {
         if (!criteria(el)) continue;
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
          <span class="product__price">price:${product.price}</span>
          <span class="product__priceRule"> ${product.pricingRule ? 'Deal description: '+ product.pricingRule.dealDescription : 'no deal in this type of ad'}</span>
          <span class="product__description">${product.name} is an lorem ipsum dolor sit amet.</span>
        </span>
        <span class="actions">
          <button type="button" name="button" class="btn button button--additem" data-item="${product.id}">Add item</button>
        </span>
      </li>`;
    }, '');

    this.$productList.innerHTML = productList;
  }

  updateOrderList(items){
    // console.log(items);
    const itemList = items.reduce((a, item) => {
      return a +
      `<li class="checkout-list--item">
        <span class="actions">
          <button type="button" name="button" class="btn button--remove" data-item="${item}">remove</button>
        </span>
        ${item}
      </li>`;
      }, '');

    this.$checkoutList.innerHTML = itemList;

  }
  updateOrderTotal(total) {
    this.$totalSpan.textContent = total;
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
    var buttonsFilter = (elem) => {
       return elem.classList && elem.classList.contains("btn");
     };

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
    this.$productList.addEventListener('click', this.delegate(buttonsFilter, buttonHandler));
  }

  bindRemoveItem(handler){
    var removeButtonsFilter = (elem) => {
      return elem.classList && elem.classList.contains("button--remove");
    };
    const removeButtonHandler = (oEvent) => {
      const button = oEvent.delegateTarget;
      // remove from the DOM
      // const li = button.parentElement.parentElement;
      const li = button.closest('li');
      const deletedItemPosition = Array.prototype.indexOf.call(this.$checkoutList.childNodes, li);
      this.$checkoutList.removeChild(li);
      // invoke handler defined in controller: this will remove the item from the store
      handler(button.getAttribute('data-item'),deletedItemPosition);
    };
    this.$checkoutList.addEventListener('click', this.delegate(removeButtonsFilter, removeButtonHandler));
  }

}
