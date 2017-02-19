(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingListService', ShoppingListServiceProvider)
.config(Config);

//Defining the config function
Config.$inject = ['ShoppingListServiceProvider'];  //this is ShoppingListService + Provider
function Config(ShoppingListServiceProvider) {     //ShoppingListService + Provider
  ShoppingListServiceProvider.defaults.maxItems = 2;  //getting the provider properties
}

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }
  }

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


//Business logic starts here

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {   //defaults object with 10 maxItems
    maxItems: 10
  };

  provider.$get = function () {  //we assign the $get property to the instance of our ShoppingListServiceProvider
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);   //the function creates a ShoppingListService. By passing it the provider.defaults.maxItems, its going to have the max 10 items property.

    return shoppingList;
  };
}

})();
