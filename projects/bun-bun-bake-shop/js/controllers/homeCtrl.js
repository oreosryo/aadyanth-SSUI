bunbun
.controller("HomeCtrl", HomeCtrl);

HomeCtrl.$inject = ["$scope", "cart", "items"];

function HomeCtrl($scope, cart, items){
    var vm = this;
    vm.name="Bun Bun Bake Shop";

    vm.bunList = items.getBunList();
    
    // populate values
    vm.glazeList = items.getGlazeList();
    vm.qtyList = items.getQtyList();
    
    // set default selected values for ng-model
    var selectedItemIndex = 0;
    vm.selectedPrice = 0;
    vm.selectedGlazeIndex = 0;
    vm.selectedQtyIndex = 0;

    vm.openModal = function ($index) {
        var modal = document.getElementById('modal-' + $index);
        vm.selectedGlazeIndex = 0;
        vm.selectedQtyIndex = 0;
        selectedItemIndex = $index;

        // calculate the price
        calcPrice();
        modal.style.display = "block";

        var span = document.getElementsByClassName("close")[$index];
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        } 
    }

    vm.addItem = function(productIndex) {
        if (productIndex == null || vm.selectedGlazeIndex == null || vm.selectedQtyIndex == null)
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
            calcPrice();
    });

    function calcPrice() {
        vm.selectedPrice = 
            items.getQtyList()[vm.selectedQtyIndex] * 
            (parseFloat(items.getBun(selectedItemIndex).price) + parseFloat(items.getGlaze(vm.selectedGlazeIndex).price));
    }
}