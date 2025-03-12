document.addEventListener("DOMContentLoaded", () => {
    const wishlistItemsContainer = document.querySelector(".wishlist-items");

    // Sample wishlist data (can be replaced with localStorage)
    let wishlist = [
        { id: 1, name: "Shutter Island", price: 14.99, img: "shutter.jpg" },
        { id: 2, name: "John Wick 4", price: 19.99, img: "johnwick.jpg" },
    ];

    let cart = []; // Cart array for moving items

    // Function to render wishlist items
    function renderWishlist() {
        wishlistItemsContainer.innerHTML = "";

        wishlist.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("wishlist-item");
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button class="move-to-cart" data-id="${item.id}">Move to Cart</button>
                <button class="remove" data-id="${item.id}">Remove</button>
            `;
            wishlistItemsContainer.appendChild(itemElement);
        });
    }

    // Remove item from wishlist
    wishlistItemsContainer.addEventListener("click", (e) => {
        const itemId = parseInt(e.target.dataset.id);

        if (e.target.classList.contains("remove")) {
            wishlist = wishlist.filter(item => item.id !== itemId);
            renderWishlist();
        }

        if (e.target.classList.contains("move-to-cart")) {
            const item = wishlist.find(item => item.id === itemId);
            if (item) {
                cart.push(item);
                wishlist = wishlist.filter(item => item.id !== itemId);
                renderWishlist();
                alert(`${item.name} moved to cart!`);
            }
        }
    });

    // Initial render
    renderWishlist();
});
