/* ==========================================================
   CHECKOUT
========================================================== */

const checkoutModal = document.getElementById("checkoutModal");

const checkoutButton = document.getElementById("checkoutButton");

const closeCheckout = document.getElementById("closeCheckout");

const checkoutTotal = document.getElementById("checkoutTotal");

const sendOrder = document.getElementById("sendOrder");
checkoutButton.addEventListener("click",()=>{

    const cart=getCart();

    if(cart.length===0){

        showToast(

            "Корзина",

            "Добавьте хотя бы один товар"

        );

        return;

    }

    let total=0;

    cart.forEach(item=>{

        total+=item.price*item.quantity;

    });

    checkoutTotal.textContent=

        total.toLocaleString("ru-RU")+" ₽";

    checkoutModal.classList.add("active");

    document.body.style.overflow="hidden";

});
function closeCheckoutModal(){

    checkoutModal.classList.remove("active");

    document.body.style.overflow="";

}
closeCheckout.onclick=closeCheckoutModal;

checkoutModal.onclick=(e)=>{

    if(e.target===checkoutModal){

        closeCheckoutModal();

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeCheckoutModal();

    }

});
sendOrder.onclick=()=>{

    const name=

        document.getElementById("customerName").value.trim();

    const phone=

        document.getElementById("customerPhone").value.trim();

    if(name==="" || phone===""){

        showToast(

    "Ошибка",

    "Заполните имя и телефон",

    "error"

);

        return;

    }

    showToast(

    "Спасибо!",

    "Ваша заявка успешно отправлена",

    "success"

);

cart = [];

localStorage.removeItem("cart");

updateCartCounter();

setTimeout(()=>{

    location.href="collections.html";

},1800);

};