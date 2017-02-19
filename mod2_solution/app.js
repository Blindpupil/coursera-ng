(function () {
'use strict';

var toBuyItems = [
    { item_name: "Jar", item_quantity: 1 },
    { item_name: "Cookies", item_quantity: 8 },
    { item_name: "Monsters", item_quantity: 6 },
    { item_name: "Sodlid", item_quantity: 5 },
    { item_name: "Stuffs", item_quantity: 3 }
  ];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    showList.isItDone = ShoppingListCheckOffService.getDone(); //note that in order for the errorDone value to be thrown correctly, it needs to be called INSIDE the .removeItem function
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.boughtItemsList = ShoppingListCheckOffService.getBoughtItems();

}

//Business logic start

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = toBuyItems;

  //List of bought items
  var boughtItemsList = [];

  var errorDone = "";
  var nothingBought = "";

  service.removeItem = function (itemIndex) {
    var removedItem = items.splice(itemIndex, 1);
    boughtItemsList.push(removedItem.pop());

    if (items.length === 0){ errorDone = true; } else { errorDone = false; }
  };

  service.getDone = function () {
    return errorDone;
  };

  service.getItems = function () {
    return items;
  };

  service.getBought = function () {
    return nothingBought;
    console.log(nothingBought);
  };

  service.getBoughtItems = function () {
    return boughtItemsList;
  };
}

})();
