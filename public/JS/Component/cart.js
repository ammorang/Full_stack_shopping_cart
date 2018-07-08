"use strict";

const cart = {
  template: `
  <div class="form">
  <form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input class="finput" type="text" placeholder="Product Name" ng-model="$ctrl.newItem.product">
    <input class="finput" type="text" placeholder="Product Price" ng-model="$ctrl.newItem.price">
    <input class="finput" type="text" placeholder="Product Quantity" ng-model="$ctrl.newItem.quantity">
    <button id="addbtn">Add</button>
  </form>
  </div>

  <div class="container">
    <section class="categories">
      <h3 id="item">Item</h3>
      <h3 id="cost">Cost</h3>
      <h3 id="quantity">Quantity</h3>
    </section>
    
    <section class="cart" ng-repeat="item in $ctrl.items">
      <input class="cinputn" ng-blur="$ctrl.updateItem(item);" ng-model="item.product">
      <input class="cinputp" ng-blur="$ctrl.updateItem(item);" ng-model="item.price">
      <input class="cinputq" ng-blur="$ctrl.updateItem(item);" ng-model="item.quantity">
      <a href="" class="deletebtn" ng-click="$ctrl.removeItem(item.id);"><i class="material-icons md-36">highlight_off</i></a>
    </section>
  </div>

  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.items = response.data;
    });
    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then((response) => {
        vm.items = response.data;
      });
      vm.newItem = {};
    };
    vm.removeItem = (id) => {
      CartService.removeItem(id).then((response) => {
        vm.items = response.data;
      });
    };
    vm.updateItem = (item) => {
      CartService.updateItem(item).then((response) => {
        vm.items = response.data;
      });
    };
  }]
};

angular
  .module("SCApp")
  .component("cart", cart);