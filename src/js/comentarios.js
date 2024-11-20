// Array para armazenar os comentários
const comments = [];

// Função para adicionar um comentário
function addComment() {
    const username = document.getElementById("username").value.trim();
    const commentText = document.getElementById("commentText").value.trim();
    
    if (username && commentText) {
        // Adiciona o comentário ao array
        comments.push({ username, text: commentText });
        
        // Limpa os campos
        document.getElementById("username").value = '';
        document.getElementById("commentText").value = '';

        // Atualiza a seção de comentários
        displayComments();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para exibir os comentários
function displayComments() {
    const commentsSection = document.getElementById("commentsSection");
    
    // Limpa a seção antes de exibir os comentários
    commentsSection.innerHTML = '<h3>Comentários:</h3>';

    // Adiciona cada comentário à seção
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<strong>${comment.username}</strong><p>${comment.text}</p>`;
        commentsSection.appendChild(commentDiv);
    });
}

// Adiciona o evento de clique ao botão de enviar
document.getElementById("submitComment").addEventListener("click", addComment);