import axios from 'axios';

async function getCurrentCart() {
    try {
      const { data: itemsInCart } = await axios.get("http://localhost:3000/items_in_cart");
      console.log("items_in_cart", itemsInCart);
    } catch (error) {
      console.log("error", error);
    }
}

async function addItemToCart(newItem) {
    const { data: itemsInCart } = await axios.get("http://localhost:3000/items_in_cart");
    console.log("items_in_cart", itemsInCart);

    foundItem = itemsInCart.find(item => item.id === newItem.id);

    try {

        if (foundItem) {
          foundItem.quantity += newItem.quantity;
          await axios.put(`http://localhost:3000/items_in_cart/${foundItem.id}`, foundItem);
        } else {
          await axios.post("http://localhost:3000/items_in_cart", newItem);
        }
      // try {
      //   await axios.post("http://localhost:3000/items_in_cart", item)
      // } catch (error) {
      //   console.log("error", error);
      // }
  } catch (error) {
    console.log("error", error);
  }
}

// include functions on global scope of the window
window.addItemToCart = addItemToCart;
window.getCurrentCart = getCurrentCart;