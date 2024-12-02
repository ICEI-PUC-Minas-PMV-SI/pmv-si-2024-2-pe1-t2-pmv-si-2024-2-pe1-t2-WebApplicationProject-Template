window.onload = function () {
  listaFilmes()
  visualizaFilme()
}

// async function listaFilmes() {  
//   let response = await fetch('http://127.0.0.1:5501/db.json');
//   let data = await response.json();

//   // Garantindo que filmes seja um array, independentemente do formato do JSON
//   let filmes = data.filmes || data; // Se for um objeto com a chave 'filmes', acessa; senão usa diretamente.

//   if (!Array.isArray(filmes)) {
//     console.error("O JSON retornado não contém uma lista de filmes:", filmes);
//     return; // Evita continuar caso não seja um array
//   }

//   // Gera o HTML usando o array de filmes
  // let html = filmes.map(filme => {
  //   return `<div class="card" id="filme-${filme.id}">
  //             <div class="movie-image">
  //               <img src="${filme.imagem}" alt="${filme.titulo}" />
  //             </div>
  //             <div class="movie-description">
  //               <div class="movies-title">
  //                 <button onclick="abreSessao(${filme.id})" class="movies-btn">${filme.titulo}</button>
  //               </div>
  //               <div class="category">
  //                 <div>
  //                   <p>${filme.genero} - ${filme.duracao}m</p>
  //                 </div>
  //                 <div>
  //                   <span class="classification16"> ${filme.classificacao} </span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>`;
  // }).join('');

  // // Insere o HTML gerado no elemento do DOM
  // document.getElementById('container-filmes').innerHTML = html;
// }

// async function listaFilmes() {
//   let response = await fetch('http://127.0.0.1:5501/db.json');
//   let data = await response.json();

//   // Caso o JSON contenha um objeto com a chave "filmes"
//   let filmes = data.filmes || data; // Adapta para diferentes formatos

//   filmes.map(filme => {
    
//     console.log(filme.titulo); // Exemplo de uso
//   });
// }

// async function listaFilmes() {  
//   // Faz a requisição para obter os dados
//   let response = await fetch('http://127.0.0.1:5501/db.json');
//   let data = await response.json();

//   // Caso o JSON contenha um objeto com a chave "filmes"
//   let filmes = data.filmes || data;

//   // Gera o HTML para exibir os filmes
//   let html = filmes.map(filme => {
//     console.log(filme.titulo); // Loga os títulos no console
//     return `<div class="card" id="filme-${filme.id}">
//               <div class="movie-image">
//                 <img src="${filme.imagem}" />
//               </div>
//               <div class="movie-description">
//                 <div class="movies-title">
//                   <button onclick="abreSessao(${filme.id})" class="movies-btn">${filme.titulo}</button>
//                 </div>
//                 <div class="category">
//                   <div>
//                     <p>${filme.genero} - ${filme.duracao}m</p>
//                   </div>
//                   <div>
//                     <span class="classification16"> ${filme.classificacao} </span>
//                   </div>
//                 </div>
//               </div>
//             </div>`;
//   }).join('');

//   // Insere o HTML no elemento com o ID 'container-filmes'
//   document.getElementById('container-filmes').innerHTML = html;
// }

async function listaFilmes() {  
  let filmes = await fetch('http://localhost:3000/filmes').then(response => response.json());

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
                    <span class="classification16"> ${filme.classificacao} </span>
                  </div>
                </div>
              </div>
            </div>`
  }).join('')

  document.getElementById('container-filmes').innerHTML = html
}

listaFilmes();

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


