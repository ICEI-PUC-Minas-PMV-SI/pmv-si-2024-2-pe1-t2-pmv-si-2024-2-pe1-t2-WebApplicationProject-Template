import axios from 'axios';

async function getCurrentCart() {
    try {
      const { data } = await axios.get("http://localhost:3000/items_in_cart");
      console.log("items_in_cart", data);
    } catch (error) {
      console.log("error", error);
    }
}

async function addItemToCart(item) {
    try {
      await axios.post("http://localhost:3000/items_in_cart", item)
    } catch (error) {
      console.log("error", error);
    }
}

// include functions on global scope of the window
window.addItemToCart = addItemToCart;
window.getCurrentCart = getCurrentCart;