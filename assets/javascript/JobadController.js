class JobadController{
  constructor(store, view) {
     this.store = store;
    this.view = view;
    view.bindAddJobAd(this.addJobAd.bind(this));
  }

  addJobAd(title) {
     this.store.insert({
       id: Date.now(),
       title,
       complete: true
     }, () => {
       console.log("item added! yay");
     })
  }
}
