bunbun
.controller("ProductCtrl", ProductCtrl);

ProductCtrl.$inject = ["$scope", "cart", "items"];

function ProductCtrl($scope, cart, items){
    var vm = this;

    // initalize the page
    var url = new URL(window.location.href);
    var productIndex = url.searchParams.get("id");

    vm.productObj = items.getBun(parseInt(productIndex));
    
    // populate values
    vm.glazeList = items.getGlazeList();
    vm.qtyList = items.getQtyList();
    
    // set default selected values for ng-model
    vm.selectedGlazeIndex = 0;
    vm.selectedQtyIndex = 0;
    vm.selectedPrice = 0; 

    vm.addItem = function() {
        if (vm.selectedGlazeIndex == null || vm.selectedQtyIndex == null)
            return; 

        cart.addItem(parseInt(productIndex), vm.selectedGlazeIndex, vm.selectedQtyIndex);
        console.log(cart.getItems());
    }

    $scope.$watchGroup(
        [
            function() {return vm.selectedGlazeIndex}, 
            function() {return vm.selectedQtyIndex}
        ], 
        function() {
            vm.selectedPrice = 
            items.getQtyList()[vm.selectedQtyIndex] * 
            (parseFloat(vm.productObj.price) + parseFloat(items.getGlaze(vm.selectedGlazeIndex).price));
    });
}