import axios from 'axios';

async function fetchAndDisplayCartItems() {
    try {
        const { data: itemsInCart } = await axios.get("http://localhost:3000/items_in_cart");

        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";

        for (let i = 0; i < itemsInCart.length; i++) {
            
            const item = itemsInCart[i]
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}</td>
            `
            cartItemsContainer.appendChild(row);
        };
    } catch (error) {
        console.log("Error fetching cart items:", error);
    }

}

async function updateTotal() {
    const { data: itemsInCart } = await axios.get("http://localhost:3000/items_in_cart")
    let total = 0.0;

    for (let i = 0; i < itemsInCart.length; i++) {
        item = itemsInCart[i];
        total += item.price * item.quantity;
    }

    totalElement = document.getElementById("shopping-cart-total");
    totalElement.innerHTML = `Total - R\$ ${total}`
}

window.onload = function() {
    fetchAndDisplayCartItems();
    updateTotal();
};