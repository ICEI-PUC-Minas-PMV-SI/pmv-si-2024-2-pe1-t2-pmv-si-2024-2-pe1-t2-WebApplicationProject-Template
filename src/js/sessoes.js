// Seleciona todos os botões de horário
document.addEventListener('DOMContentLoaded', () => {
    const initializeButtons = () => {
        const horarios = document.querySelectorAll('.horario');

        horarios.forEach(horario => {
            if (!horario.dataset.initialized) { 
                horario.dataset.initialized = true;
                horario.addEventListener('click', () => {
                    horario.classList.toggle('selecionado');
                });
            }
        });
    };

    initializeButtons(); 

    document.querySelectorAll('[data-bs-toggle="pill"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', () => {
            initializeButtons();
        });
    });
});

//Adiciona o filme selecionado na pág anterior 

window.onload = function () {
    listaFilmes()
    visualizaFilme()
  }
  
  async function listaFilmes() {  
    let filmes = await fetch('http://localhost:3000/filmes').then(response => response.json())
  
    let html = filmes.map(filme => {
      return `<div class="card" id="filme-${filme.id}">
                <div class="movie-image">
                  <img src="${filme.imagem}" />
                </div>
                <div class="movie-description">
                  <div class="movies-title">
                    <button onclick="abreSessao(${filme.id})" class="movies-btn">${filme.titulo}</button>
                  </div>
                  <div class="category">
                    <div>
                      <p>${filme.genero} - ${filme.duracao}m</p>
                    </div>
                    <div>
                      <span class="classification"> ${filme.classificacao} </span>
                    </div>
                  </div>
                </div>
              </div>`
    }).join('')
  
    document.getElementById('container-filmes').innerHTML = html
  }
  
  function abreSessao(id_filme) {
    localStorage.setItem('filmeSelecionado', id_filme); // Salva o ID no localStorage
    window.location.href = '../html/sessoes.html';      // Redireciona para a página
  }
  
  
  async function visualizaFilme() {
    // Recupera o ID do filme salvo no localStorage
    let id_filme = localStorage.getItem('filmeSelecionado');
    
    // Verifica se o ID do filme está disponível e a URL é a correta
    if (id_filme && window.location.pathname.endsWith('sessoes.html')) {
      try {
        // Busca os filmes do servidor
        let filmes = await fetch('http://localhost:3000/filmes')
          .then(response => response.json());
  
        // Encontra o filme correspondente ao ID
        let filme = filmes.find(filme => filme.id == id_filme);
  
        // Se o filme for encontrado, monta o HTML
        if (filme) {
          let html = `
            <div class="card" id="filme-${filme.id}">
              <div class="movie-image">
                <img src="${filme.imagem}" />
              </div>
              <div class="movie-description">
                <div class="movies-title">
                  <button class="movies-btn">${filme.titulo}</button>
                </div>
                <div class="category">
                  <div>
                    <p>${filme.genero} - ${filme.duracao}m</p>
                  </div>
                  <div>
                    <span class="classification">${filme.classificacao}</span>
                  </div>
                </div>
              </div>
            </div>`;
          
          // Adiciona o HTML no elemento correto
          document.getElementById('horarios_filme').innerHTML = html;
        } else {
          console.error('Filme não encontrado!');
        }
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    } else {
      console.error('ID do filme não encontrado ou URL incorreta.');
    }
  }



