"use strict";

const cart = {
  template: `
  <section ng-repeat="item in $ctrl.items">
    <input ng-blur="$ctrl.updateItem(item);" ng-model="item.product">
    <input ng-blur="$ctrl.updateItem(item);" ng-model="item.price">
    <input ng-blur="$ctrl.updateItem(item);" ng-model="item.quantity">
    <a href="" ng-click="$ctrl.deleteItem(item.id);">Delete</a>
  </section>

  <form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input type="text" placeholder="Product Name" ng-model="$ctrl.newItem.product">
    <input type="text" placeholder="Product Price" ng-model="$ctrl.newItem.price">
    <input type="text" placeholder="Product Quantity" ng-model="$ctrl.newItem.quantity">
    <button>Add Item</button>
  </form>
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
    vm.deleteItem = (id) => {
      CartService.deleteItem(id).then((response) => {
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