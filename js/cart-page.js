/* ==========================================================
   CART PAGE
========================================================== */

const cartItemsContainer = document.getElementById("cartItems");

const cartTotalElement = document.getElementById("cartTotal");

renderCart();
function renderCart(){

    const cart = getCart();

    cartItemsContainer.innerHTML = "";

    if(cart.length===0){

        cartItemsContainer.innerHTML=`

            <div class="cart-empty">

                Корзина пока пуста

            </div>

        `;

        cartTotalElement.textContent="0 ₽";

        return;

    }

    let total=0;

    cart.forEach(item=>{

        total+=item.price*item.quantity;

        createCartItem(item);

    });

    cartTotalElement.textContent=

        total.toLocaleString("ru-RU")+" ₽";

}
function createCartItem(item){

    const card=document.createElement("div");

    card.className="cart-item";

    card.innerHTML=`

        <img src="${item.image}" alt="${item.name}">

        <div class="cart-info">

            <h3>${item.name}</h3>

            <p>${item.subtitle}</p>

            <div class="cart-controls">

                <button class="minus">−</button>

                <span>${item.quantity}</span>

                <button class="plus">+</button>

                <span class="cart-remove">

                    Удалить

                </span>

            </div>

            <div class="cart-price">

                ${(item.price*item.quantity).toLocaleString("ru-RU")} ₽

            </div>

        </div>

    `;

    card.querySelector(".plus").onclick=()=>{

        increaseQuantity(item.id);

        renderCart();

    };

    card.querySelector(".minus").onclick=()=>{

        decreaseQuantity(item.id);

        renderCart();

    };

    card.querySelector(".cart-remove").onclick=()=>{

        removeItem(item.id);

        renderCart();

    };

    cartItemsContainer.appendChild(card);

}