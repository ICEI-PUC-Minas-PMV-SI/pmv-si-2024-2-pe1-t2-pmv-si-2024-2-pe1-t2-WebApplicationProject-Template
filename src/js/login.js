// Simulação de um banco de dados com JSON
const users = [
  { username: "usuario1", password: "senha123" },
  { username: "usuario2", password: "senha456" }
];

// Função para validar o login
function validateLogin() {
  const username = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;
  const messageElement = document.getElementById("message");

  // Verifica se as credenciais estão corretas
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      messageElement.textContent = "Login bem-sucedido!";
      messageElement.style.color = "green";
      // Aqui você pode redirecionar para outra página ou realizar outra ação
  } else {
      messageElement.textContent = "Credenciais inválidas. Tente novamente.";
      messageElement.style.color = "red";
  }
}

// Adiciona o evento de clique ao botão de login
document.getElementById("loginButton").addEventListener("click", validateLogin);