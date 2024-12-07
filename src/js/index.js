

async function abreSessao(id_filme) {
  const filmes = await fetch('http://localhost:3000/films').then(response => response.json());

  try {
    let filme = filmes.find(filme => filme.id == id_filme);
  } catch(error) {
    console.error("Não foi possível encontrar o filme informado", error);
  }

  localStorage.setItem('filmeSelecionado', id_filme);
  window.location.href = 'sessoes.html';
}

window.abreSessao = abreSessao;