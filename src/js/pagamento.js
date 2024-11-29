// Selecionar o formulário e os campos
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const cardNumberInput = document.getElementById('card-number');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obter os valores dos campos
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const cardNumber = cardNumberInput.value.trim();
  const expiry = expiryInput.value.trim();
  const cvv = cvvInput.value.trim();

  // Validações básicas
  if (name === "") {
    alert("Por favor, preencha seu nome.");
    return;
  }

  if (email === "" || !email.includes("@")) {
    alert("Por favor, insira um email válido.");
    return;
  }

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert("O número do cartão deve conter 16 dígitos.");
    return;
  }

  if (!/^\d{2}\/\d{2}$/.test(expiry)) {
    alert("A data de validade deve estar no formato MM/AA.");
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("O CVV deve conter 3 números.");
    return;
  }

  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  // Exibir uma mensagem de confirmação
  alert(`Pagamento realizado com sucesso!`);


});
