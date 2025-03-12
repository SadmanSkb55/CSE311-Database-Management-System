document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Sample cart data (can be replaced with localStorage)
    let cart = [
        { id: 1, name: "Shutter Island", price: 14.99, img: "shutter.jpg", quantity: 1 },
        { id: 2, name: "John Wick 4", price: 19.99, img: "johnwick.jpg", quantity: 1 },
    ];

    // Function to render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <input type="number" class="quantity" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="remove" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalPriceElement.innerText = total.toFixed(2);
    }

    // Update quantity event
    cartItemsContainer.addEventListener("input", (e) => {
        if (e.target.classList.contains("quantity")) {
            const itemId = parseInt(e.target.dataset.id);
            const newQuantity = parseInt(e.target.value);
            const item = cart.find(item => item.id === itemId);
            if (item) {
                item.quantity = newQuantity;
                renderCart();
            }
        }
    });

    // Remove item event
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")) {
            const itemId = parseInt(e.target.dataset.id);
            cart = cart.filter(item => item.id !== itemId);
            renderCart();
        }
    });

    // Checkout button
    document.getElementById("checkout").addEventListener("click", () => {
        alert("Proceeding to Checkout!");
    });

    // Initial render
    renderCart();
});
