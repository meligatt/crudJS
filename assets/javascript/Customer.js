class Customer {
  constructor(customerName, customerType, customerPricingRules) {
    this.customerName = customerName;
    this.customerType = customerType
    this.customerPricingRules = customerPricingRules;
  }

  getPrincingRules() {
    console.log('returning the pricingRules for the customer');
    return (this.customerPricingRules);
  }

  setPricingRules(){
      console.log('set pricing rules');
  }
  getInfo () {
    this.console.log(this.customerName, this.customerType, this.customerPricingRules );
  }

}
