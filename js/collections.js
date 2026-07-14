const grid = document.getElementById("products-grid");

const availableBtn = document.getElementById("availableBtn");
const conceptBtn = document.getElementById("conceptBtn");
const conceptDescription = document.getElementById("conceptDescription");

let currentCategory = "available";

// Теперь товары будут приходить с сервера
let products = [];

loadProducts();

async function loadProducts(){

    try{

        const response = await fetch("/api/products");

        products = await response.json();

        renderProducts();

    }

    catch(error){

        console.error("Ошибка загрузки товаров:", error);

    }

}

/* ===========================================
   CATEGORY BUTTONS
=========================================== */

availableBtn.addEventListener("click", () => {

    currentCategory = "available";

    availableBtn.classList.add("active");
    conceptBtn.classList.remove("active");

    conceptDescription.style.display = "none";

    renderProducts();

});

conceptBtn.addEventListener("click", () => {

    currentCategory = "concept";

    conceptBtn.classList.add("active");
    availableBtn.classList.remove("active");

    conceptDescription.style.display = "block";

    renderProducts();

});

/* ===========================================
   RENDER PRODUCTS
=========================================== */

function renderProducts(){

    grid.innerHTML = "";

    const filteredProducts = products.filter(product => {

        return product.category === currentCategory;

    });

    if(filteredProducts.length === 0){

        grid.innerHTML = `

        <div class="empty-products">

            <h2>

                Скоро здесь появятся новые изделия

            </h2>

        </div>

        `;

        return;

    }

    filteredProducts.forEach(product => {

        grid.innerHTML += `

        <div
            class="product-card"
            data-id="${product.id}"
        >

            <img
                src="${product.images[0]}"
                alt="${product.name}"
            >

            <div class="product-overlay">

                <h3>

                    ${product.name}

                </h3>

                <p>

                    ${product.subtitle}

                </p>

                <span class="price">

                    ${product.price.toLocaleString("ru-RU")} ₽

                </span>

            </div>

        </div>

        `;

    });

    initCards();

}

/* ===========================================
   CARD EVENTS
=========================================== */

function initCards(){

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.id;

            const product = products.find(item => {

                return item.id === id;

            });

            openModal(product);

        });

    });

}