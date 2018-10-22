bunbun
.service("items", itemsService);

function itemsService(){
    var items = {
        bunList: [
            {
                name: "Original",
                price: "0.90",
                desc: "Created in 1990, this cinammon roll is considered a classic and favorite of our loyal customers.",
                imgUrl: "assets/bunbuns/Original.jpg"
            },
            {
                name: "Blackberry",
                price: "1.20",
                desc: "One of our best fruity rolls.",
                imgUrl: "assets/bunbuns/Berry.jpg"
            },
            {
                name: "Walnut",
                price: "1.20",
                desc: "Go nutty with this roll.",
                imgUrl: "assets/bunbuns/Walnut.jpg"
            },
            {
                name: "Original (Gluten-Free)",
                price: "1.00",
                desc: "Allergic to gluten? We got you.",
                imgUrl: "assets/bunbuns/GlutenFree.jpg"
            },
            {
                name: "Pumpkin Spice",
                price: "1.20",
                desc: "You'll love this autumn classic. Limited Edition.",
                imgUrl: "assets/bunbuns/PumpkinSpice.jpg"
            },
            {
                name: "Caramel Pecan",
                price: "1.20",
                desc: "Created in 1990, this cinammon roll is considered a classic and favorite of our loyal customers.",
                imgUrl: "assets/bunbuns/CaramelPecan.jpg"
            }
        ],
        qtyList: [
            1,
            3,
            6,
            12
        ],
        glazeList: [
            {
                name: "None", 
                price: "0"
            }, 
            {
                name: "Sugar-milk", 
                price: "0.10"
            }, 
            {
                name: "Vanilla-milk", 
                price: "0.10"
            }, 
            {
                name: "Double-chocolate", 
                price: "0.10"
            }
        ]
    };
    
    /* Bun related functions */
    this.getBunList = function() {
        return items.bunList;
    }

    this.getBun = function(idx) {
        return items.bunList[idx]
    }

    /* Glaze related functions */
    this.getGlazeList = function() {
        return items.glazeList;
    }

    this.getGlaze = function(idx) {
        return items.glazeList[idx];
    }

    /* Qty related functions */
    this.getQtyList = function() {
        return items.qtyList;
    }

    /* create the cart item */
    this.createCartItem = function (productIndex, glazeIndex, qtyIndex){
        var bun = this.getBun(productIndex);
        var glaze = this.getGlaze(glazeIndex);
        var qty = this.getQtyList()[qtyIndex];

        var cartItem = {
            name: bun.name,
            glazeName: glaze.name,
            qty: qty,
            price: qty * (parseFloat(bun.price) + parseFloat(glaze.price))
        }

        return cartItem;
    }
}