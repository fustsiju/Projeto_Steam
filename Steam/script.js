let jogos = [];

function carregarDadosEProcessar() {
  fetch('http://localhost:3000/jogos')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
        jogos = data;
        processarJogos(jogos);
        adicionarEventListeners(jogos);
      } else {
        console.error('Os dados não são uma matriz válida.');
      }
    })
    .catch(error => {
      console.error('Erro ao buscar os dados: ' + error);
    });
}

function adicionarEventListeners(jogos) {
  document.getElementById('ordem-alfabetica').addEventListener('click', function() {
    sortAlfabetica(jogos);
  });

  document.getElementById('mais-novos').addEventListener('click', function() {
    sortReleaseDate(jogos);
  });

  document.getElementById('mais-aclamados').addEventListener('click', function() {
    sortMetacritic(jogos);
  });

  document.getElementById('mais-recomendados').addEventListener('click', function() {
    sortRecommendation(jogos);
  });
}

function sortAlfabetica(jogos) {
  jogos.sort(function(a, b) {
    return a.ResponseName.localeCompare(b.ResponseName);
  });
  processarJogos(jogos);
}

function sortReleaseDate(jogos) {
  jogos.sort(function(a, b) {
    return new Date(a.ReleaseDate) - new Date(b.ReleaseDate);
  });
  processarJogos(jogos);
}

function sortMetacritic(jogos) {
  jogos.sort(function(a, b) {
    return a.Metacritic - b.Metacritic;
  });
  processarJogos(jogos);
}

function sortRecommendation(jogos) {
  jogos.sort(function(a, b) {
    return a.RecommendationCount - b.RecommendationCount;
  });
  processarJogos(jogos);
}

function processarJogos(jogos) {
  const jogosContainer = document.getElementById('jogos-container');
  jogosContainer.innerHTML = ''; 

  for (let i = 0; i < jogos.length; i++) {
    const jogo = jogos[i];
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `
      Jogo: ${jogo.ResponseName}<br>
      Lançamento: ${jogo.ReleaseDate}<br>
      Nota Metacritic: ${jogo.Metacritic}<br>
      Recomendações de Usuários: ${jogo.RecommendationCount}
    `;
    jogosContainer.appendChild(paragrafo);
  }
}

carregarDadosEProcessar();
