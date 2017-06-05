( function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList=this;
    toBuyList.items=ShoppingListCheckOffService.displayToBuyList();
    toBuyList.removeFromBuyList=function($index) {
      var elementToBeRemovedFromToBuyList=ShoppingListCheckOffService.displayToBuyListOnIndex($index);
      // console.log(elementToBeRemovedFromPurchaseList);
      ShoppingListCheckOffService.removeFromToBuyList($index);
      var elementToBeAddedToPurchaseList=elementToBeRemovedFromToBuyList;
      ShoppingListCheckOffService.addtoPurchaseList(elementToBeAddedToPurchaseList);
    }
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var purchasedList=this;
    purchasedList.items=ShoppingListCheckOffService.displayPurchaseList();
  }

  function ShoppingListCheckOffService(){
    var service=this;
    var toBuyList=[
      {
        name:"Cookies",
        quantity:'4'
      },
      {
        name:"Milk",
        quantity:'5'
      },
      {
        name:"Chapatis",
        quantity: '10'
      },
      {
        name: "Frooti",
        quantity: '10'
      },
      {
        name: "Kurkure",
        quantity: '6'
      }
    ];
    var purchasedList=[];

    service.displayToBuyList =function(){
      return toBuyList;
    }
    service.displayPurchaseList=function(){
      return purchasedList;
    }
    service.displayToBuyListOnIndex=function(index){
      var elementToBeRemovedFromList={
        name:toBuyList[index].name,
        quantity:toBuyList[index].quantity
      }
      return elementToBeRemovedFromList;
    }
    service.removeFromToBuyList=function(index){
      toBuyList.splice(index,1);
    }
    service.addtoPurchaseList=function(elementToBeAddedToPurchaseList) {
      purchasedList.push(elementToBeAddedToPurchaseList);
    }
  }


})();
