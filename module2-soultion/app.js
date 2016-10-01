(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.toBuysList = ShoppingListCheckOffService.getToBuyList();
        toBuy.remove = function($itemIndex) {
            ShoppingListCheckOffService.removeItem($itemIndex)
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.boughtList = ShoppingListCheckOffService.getBoughtList();
    };

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [{
            name: "banana",
            quantity: "10"
        }, {
            name: "apple",
            quantity: "5"
        }, {
            name: "mangoes",
            quantity: "12"
        }, {
            name: "watermelon",
            quantity: "1"
        }, {
            name: "orange",
            quantity: "10"
        }];
        var bought = [];

        service.getToBuyList = function() {
            return toBuy;
        };

        service.getBoughtList = function() {
            return bought;
        };

        service.removeItem = function(itemIndex) {
            var i = toBuy.splice(itemIndex, 1);
            bought.push(i[0]);
        };
    };

})();
