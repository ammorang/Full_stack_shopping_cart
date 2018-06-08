"use strict";

function CartService($http) {
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-route"
    });
  };
  const addItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/portal/cart-route",
      data: newItem
    });
  };
  const removeItem = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/cart-route/" + id
    });
  };
  const updateItem = (item) => {
    return $http({
      method: "PUT",
      url: "/portal/cart-route/" + item.id,
      data: item
    });
  };
  return {
    getAllItems,
    addItem,
    removeItem,
    updateItem
  };
}

angular
  .module("SCApp")
  .factory("CartService", CartService);