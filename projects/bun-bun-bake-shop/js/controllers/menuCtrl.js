bunbun
.controller("MenuCtrl", MenuCtrl);

MenuCtrl.$inject = ["$scope", "cart"];

function MenuCtrl($scope, cart){
    var vm = this;

    vm.name = "Bun Bun Bake Shop";
    vm.cartCount = 0;

    $scope.$watch(cart.getCount, function(newValue, oldValue) {
        if (cart.getCount() > 0)
        {
            // update cart count
            vm.cartCount = cart.getCount();
        }
    });
}