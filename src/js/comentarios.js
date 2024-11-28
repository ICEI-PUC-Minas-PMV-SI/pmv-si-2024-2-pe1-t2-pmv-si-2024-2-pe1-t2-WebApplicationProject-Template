const comments = [];

function addComment() {
    const username = document.getElementById("username").value.trim();
    const commentText = document.getElementById("commentText").value.trim();
    
    if (username && commentText) {
        comments.push({ username, text: commentText });
        
        document.getElementById("username").value = '';
        document.getElementById("commentText").value = '';

        displayComments();
    } else {
        alert("Por favor, infome seu nome e seu comentário :)");
    }
}

function displayComments() {
    const commentsSection = document.getElementById("commentsSection");
    
    commentsSection.innerHTML = '<h3>Comentários:</h3>';

    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<strong>${comment.username}</strong><p>${comment.text}</p>`;
        commentsSection.appendChild(commentDiv);
    });
}

document.getElementById("submitComment").addEventListener("click", addComment);