/* ==========================================================
   TOAST
========================================================== */

function showToast(title, message, type = "success") {

    const oldToast = document.querySelector(".toast");

    if (oldToast) {

        oldToast.remove();

    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    let icon = "✓";

    if (type === "error") icon = "⚠";

    if (type === "info") icon = "🛒";

    toast.innerHTML = `

        <div class="toast-icon">

            ${icon}

        </div>

        <div class="toast-text">

            <h3>${title}</h3>

            <p>${message}</p>

        </div>

    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },300);

    },2500);

}