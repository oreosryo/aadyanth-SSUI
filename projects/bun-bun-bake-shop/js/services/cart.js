bunbun
.service("cart", cartService);

cartService.$inject = ["items"];

function cartService(items){
    var cart = {
        items: [],
        totalPrice: 0
    }

    this.getCount = function() {
        return cart.items.length;
    }

    this.addItem = function (productIndex, glazeIndex, qtyIndex) {
        var item = items.createCartItem(productIndex, glazeIndex, qtyIndex);
        cart.totalPrice += item.price;
        console.log("Cart Total: " + cart.totalPrice);
        cart.items.push(item);
    }

    this.removeItem = function (idx) {
        if (idx > -1)
        {
            cart.totalPrice -= cart.items[idx].price;
            cart.items.splice(idx, 1);
        }
    }

    this.getItems = function () {
        return cart.items;
    }

    this.clearCart = function () {
        cart.items = [];
    }

    this.getTotal = function () {
        return cart.totalPrice;
    }
}