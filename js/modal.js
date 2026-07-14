const modal = document.getElementById("productModal");

const modalMainImage = document.getElementById("modalMainImage");
const modalThumbs = document.getElementById("modalThumbnails");

const modalName = document.getElementById("modalName");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");

const modalMaterials = document.getElementById("modalMaterials");
const modalSize = document.getElementById("modalSize");
const modalPrice = document.getElementById("modalPrice");

const closeButton = document.getElementById("closeModal");

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

const countElement = document.getElementById("count");

const addCartButton = document.getElementById("addCart");

let currentProduct = null;

let quantity = 1;
function openModal(product){

    currentProduct = product;

    quantity = 1;

    countElement.textContent = quantity;

    modalName.textContent = product.name;

    modalSubtitle.textContent = product.subtitle;

    modalDescription.textContent = product.description;

    modalSize.textContent = product.size;

    modalPrice.textContent =
        product.price.toLocaleString("ru-RU") + " ₽";

    modalMaterials.innerHTML = "";

    product.materials.forEach(material=>{

        const li = document.createElement("li");

        li.textContent = material;

        modalMaterials.appendChild(li);

    });

    modalMainImage.src = product.images[0];

    modalThumbs.innerHTML = "";

    product.images.forEach((image,index)=>{

        const thumb = document.createElement("img");

        thumb.src = image;

        if(index===0){

            thumb.classList.add("active");

        }

        thumb.onclick=()=>{

            modalMainImage.src=image;

            document.querySelectorAll(".modal-thumbnails img")
            .forEach(img=>{

                img.classList.remove("active");

            });

            thumb.classList.add("active");

        };

        modalThumbs.appendChild(thumb);

    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

}
/* ===========================================
   CLOSE MODAL
=========================================== */

function closeModal(){

    modal.classList.remove("active");

    currentProduct = null;

    document.body.style.overflow = "";

}

/* ===========================================
   QUANTITY
=========================================== */

plusButton.addEventListener("click",()=>{

    quantity++;

    countElement.textContent=quantity;

});

minusButton.addEventListener("click",()=>{

    if(quantity>1){

        quantity--;

        countElement.textContent=quantity;

    }

});
/* ===========================================
   CLOSE EVENTS
=========================================== */

closeButton.addEventListener("click",closeModal);

modal.addEventListener("click",(event)=>{

    if(event.target===modal){

        closeModal();

    }

});

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeModal();

    }

});
/* ===========================================
   ADD TO CART
=========================================== */

addCartButton.addEventListener("click",()=>{

    if(!currentProduct){

        return;

    }

    addToCart(currentProduct,quantity);

    closeModal();

});