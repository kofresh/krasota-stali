/* ==========================================================
   CART
========================================================== */

let cart = JSON.parse(

    localStorage.getItem("cart")

) || [];

saveCart();

/* ==========================================================
   SAVE
========================================================== */

function saveCart(){

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

}
/* ==========================================================
   ADD PRODUCT
========================================================== */

function addToCart(product, quantity){

    const existing = cart.find(item=>{

        return item.id===product.id;

    });

    if(existing){

        existing.quantity += quantity;

    }

    else{

        cart.push({

            id:product.id,

            name:product.name,

            subtitle:product.subtitle,

            price:product.price,

            image:product.images[0],

            quantity:quantity

        });

    }

    saveCart();

    updateCartCounter();

    showToast(

        product.name,

        "Добавлен в корзину"

    );

}
/* ==========================================================
   CART COUNTER
========================================================== */

function updateCartCounter(){

    const counter = document.getElementById(

        "cartCounter"

    );

    if(!counter){

        return;

    }

    const total = cart.reduce(

        (sum,item)=>sum+item.quantity,

        0

    );

    counter.textContent = total;

}
/* ==========================================================
   GET CART
========================================================== */

function getCart(){

    return cart;

}
/* ==========================================================
   INCREASE
========================================================== */

function increaseQuantity(id){

    const item = cart.find(item=>item.id===id);

    if(!item) return;

    item.quantity++;

    saveCart();

    updateCartCounter();

}

/* ==========================================================
   DECREASE
========================================================== */

function decreaseQuantity(id){

    const item = cart.find(item=>item.id===id);

    if(!item) return;

    item.quantity--;

    if(item.quantity<=0){

        removeItem(id);

        return;

    }

    saveCart();

    updateCartCounter();

}

/* ==========================================================
   REMOVE
========================================================== */

function removeItem(id){

    cart = cart.filter(item=>item.id!==id);

    saveCart();

    updateCartCounter();

}
updateCartCounter();