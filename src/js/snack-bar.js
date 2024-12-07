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
    foundItem = itemsInCart.find(item => item.id === newItem.id);
    try {
        if (foundItem) {
          foundItem.quantity += newItem.quantity;
          await axios.put(`http://localhost:3000/items_in_cart/${foundItem.id}`, foundItem);
        } else {
          await axios.post("http://localhost:3000/items_in_cart", newItem);
        }
        alert(`${newItem.name} agora está no seu carrinho!`);
    } catch (error) {
      console.log("error", error);
    }
}

async function addMovieToCart() {
  try {
      const horario_filme = document.getElementsByClassName('selecionado');
      
      if (horario_filme.length > 1) {
          alert("Por favor, selecione apenas um horário");
          throw new Error("Mais de um horário selecionado");
      }
      if (horario_filme.length === 0) {
          alert("Por favor, selecione um horário");
          throw new Error("Nenhum horário selecionado");
      }

      const id_filme = localStorage.getItem('filmeSelecionado');
      if (!id_filme) {
          throw new Error("Filme não selecionado");
      }

      const filmes = await fetch('http://localhost:3000/films').then(response => response.json());
      const filme = filmes.find(filme => filme.id == id_filme);
      if (!filme) {
          throw new Error("Filme não encontrado");
      }

      const horario = horario_filme[0].textContent || horario_filme[0].value || "Horário desconhecido";

      const ingresso = {
          name: `${filme.titulo} - ${horario}`,
          quantity: 1,
          price: 31.99
      };

      addItemToCart(ingresso);
      console.log("Ingresso adicionado ao carrinho:", ingresso);

  } catch (error) {
      console.error(error.message);
  }
}

// include functions on global scope of the window
window.addItemToCart = addItemToCart;
window.getCurrentCart = getCurrentCart;
window.addMovieToCart = addMovieToCart;