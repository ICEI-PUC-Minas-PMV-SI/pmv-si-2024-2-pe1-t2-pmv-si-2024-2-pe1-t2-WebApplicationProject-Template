const loginButtonfilter = document.getElementById("buttonfilter");

async function buildDivMovies(films,containerDeFilmes){
  films.forEach(filme => {
    const filmsDiv = document.createElement("div");
    filmsDiv.className = "card-search";
    filmsDiv.innerHTML = `
    <div class="movie-image-search">
      <img src=${filme.urlImagem} />
    </div>
    <div class="movies-description-search">
      <div>
        <h6>${filme.titulo}</h6>
      </div>
      <div>
        <h6>${filme.genero} - ${filme.duracao}m</h6>
      </div>
      <div>
        <h6>${filme.horario}</h6>
      </div>
    </div>`
    containerDeFilmes.appendChild(filmsDiv);
});
 }

loginButtonfilter.addEventListener("click",async ()=>{
// atribuindo valor do filtro as variáveis
// Coloquei o id de cada filtro no html 
    var filterTitulo= document.getElementById("titulo").value;
    var filterGenero = document.getElementById("genero").value;
    var filterClassificacaoIndicativa = document.getElementById("classificacaoIndicativa").value;
    var filterNotaImdb = document.getElementById("notaImdb").value;
    var filterCinemaLocalizacao = document.getElementById("cinemaLozalizacao").value;
    var filterPaisDeOrigem = document.getElementById("paisDeOrigem").value;
    var filterDuracao = document.getElementById("duracao").value;


   // Busca todos os filmes quando nada é digitado nos filtros  
    if(
      filterTitulo == ""
      && filterGenero == ""
      && filterClassificacaoIndicativa == 0
      && filterNotaImdb == 0
      && filterCinemaLocalizacao == ""
      && filterPaisDeOrigem == ""
      && filterDuracao == 0

    )
    {
      await getAllMovies();
    }
    else{
    await getFilteredmovies(filterTitulo.toLowerCase(),filterGenero.toLowerCase(),filterClassificacaoIndicativa
      ,filterNotaImdb,filterCinemaLocalizacao.toLowerCase(),filterPaisDeOrigem.toLowerCase(),filterDuracao
    );
  }
});

async function getAllMovies() {
    try {
      const { data: films } = await axios.get("http://localhost:3000/films");
      var containerDeFilmes = document.getElementById("film-section");
      var labelRecomend = document.getElementById("recomend-found");
      labelRecomend.textContent = `Filmes encontrados - ${films.length}`;
      containerDeFilmes.innerHTML = '';
      await buildDivMovies(films,containerDeFilmes);
      console.log(containerDeFilmes)
    } catch (error) {
      console.log("error", error);
    }
}

async function getFilteredmovies(filterTitulo,filterGenero,filterClassificacaoIndicativa
  ,filterNotaImdb,filterCinemaLocalizacao,filterPaisDeOrigem,filterDuracao
) {
  try {
    const { data: films } = await axios.get(`http://localhost:3000/films`);

    var filteredMovies = films.filter((x) => {
      if((filterTitulo == "" || x.titulo.toLowerCase().includes(filterTitulo))
      && (filterGenero == "" || x.genero.toLowerCase().includes(filterGenero))
      && (filterClassificacaoIndicativa == 0 || x.classificacaoIndicativa <= filterClassificacaoIndicativa)
      && (filterNotaImdb == 0 || x.notaImdb <= filterNotaImdb)
      && (filterCinemaLocalizacao == "" || x.cinema.toLowerCase().includes(filterCinemaLocalizacao)) 
      && (filterPaisDeOrigem == "" || x.paisDeOrigem.toLowerCase().includes(filterPaisDeOrigem))
      && (filterDuracao == 0 || x.duracao <= filterDuracao))
      return x
    })
  
    if(filteredMovies.length == 0)
    {
      alert("Desculpe, não encontramos nenhum filme com os critérios especificados.");
    }

    else{

      var labelRecomend = document.getElementById("recomend-found");
      labelRecomend.textContent = `Filmes encontrados - ${filteredMovies.length}`;
      var containerDeFilmes = document.getElementById("film-section");
      containerDeFilmes.innerHTML = '';
      await buildDivMovies(filteredMovies,containerDeFilmes)


    }

    console.log(filteredMovies)
  } catch (error) {
    console.log("error", error);
  }

}


