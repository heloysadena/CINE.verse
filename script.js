"use strict";

(() => {
  const titles = [
    {
      id: "eco-das-estrelas",
      title: "O Eco das Estrelas",
      type: "movie",
      year: 2026,
      genre: "Ficção científica",
      duration: "2h 08min",
      rating: "Livre",
      colors: ["#24105a", "#a66bff"],
      featured: true,
      description: "Quando um sinal desconhecido atravessa a galáxia, uma equipe de exploradores parte para descobrir sua origem. A missão muda quando percebem que a mensagem parece responder a perguntas que ainda não fizeram."
    },
    {
      id: "cidade-de-neon",
      title: "Cidade de Neon",
      type: "movie",
      year: 2025,
      genre: "Ação",
      duration: "1h 54min",
      rating: "14 anos",
      colors: ["#360c42", "#ff4fa3"],
      featured: true,
      description: "Em uma metrópole que nunca dorme, uma entregadora encontra um arquivo capaz de revelar os segredos de quem controla a cidade."
    },
    {
      id: "o-ultimo-farol",
      title: "O Último Farol",
      type: "movie",
      year: 2024,
      genre: "Mistério",
      duration: "1h 47min",
      rating: "12 anos",
      colors: ["#092d45", "#65c8d8"],
      featured: true,
      description: "Uma restauradora chega a uma ilha isolada para cuidar de um farol antigo. Todas as noites, a luz aponta para um lugar diferente."
    },
    {
      id: "jardim-de-cinzas",
      title: "Jardim de Cinzas",
      type: "movie",
      year: 2025,
      genre: "Drama",
      duration: "2h 01min",
      rating: "12 anos",
      colors: ["#38202b", "#d58b92"],
      featured: true,
      description: "Ao voltar à cidade onde cresceu, uma fotógrafa encontra cartas que revelam a história esquecida de sua família."
    },
    {
      id: "orbita-zero",
      title: "Órbita Zero",
      type: "movie",
      year: 2023,
      genre: "Ficção científica",
      duration: "1h 59min",
      rating: "10 anos",
      colors: ["#111d4c", "#4d91ff"],
      featured: true,
      description: "A tripulação de uma estação orbital perde contato com a Terra e descobre registros de acontecimentos que ainda não ocorreram."
    },
    {
      id: "mapa-do-impossivel",
      title: "Mapa do Impossível",
      type: "movie",
      year: 2022,
      genre: "Aventura",
      duration: "1h 51min",
      rating: "Livre",
      colors: ["#184a3b", "#b5d66b"],
      featured: true,
      description: "Dois irmãos encontram um mapa que redesenha os caminhos a cada amanhecer. Para descobrir sua origem, precisam confiar um no outro."
    },
    {
      id: "risos-de-aluguel",
      title: "Risos de Aluguel",
      type: "movie",
      year: 2024,
      genre: "Comédia",
      duration: "1h 38min",
      rating: "12 anos",
      colors: ["#652b64", "#ffb45c"],
      featured: false,
      description: "Uma agência oferece amigos por hora para eventos sociais. O plano funciona até todos os clientes marcarem compromissos no mesmo dia."
    },
    {
      id: "bosque-escuro",
      title: "O Bosque Escuro",
      type: "movie",
      year: 2025,
      genre: "Terror",
      duration: "1h 42min",
      rating: "16 anos",
      colors: ["#101e1b", "#527b57"],
      featured: false,
      description: "Um grupo de amigos passa uma noite em uma reserva florestal onde as trilhas parecem mudar depois do pôr do sol."
    },
    {
      id: "reino-de-vidro",
      title: "Reino de Vidro",
      type: "movie",
      year: 2023,
      genre: "Fantasia",
      duration: "2h 12min",
      rating: "10 anos",
      colors: ["#173b59", "#b5a5ff"],
      featured: false,
      description: "Uma aprendiz de cartógrafa descobre um reino invisível refletido em superfícies de vidro."
    },
    {
      id: "linha-de-frente",
      title: "Linha de Frente",
      type: "movie",
      year: 2022,
      genre: "Ação",
      duration: "1h 49min",
      rating: "14 anos",
      colors: ["#44211c", "#e78a53"],
      featured: false,
      description: "Depois de uma operação dar errado, uma equipe de resgate precisa atravessar uma cidade isolada."
    },
    {
      id: "cartas-para-julho",
      title: "Cartas para Julho",
      type: "movie",
      year: 2021,
      genre: "Drama",
      duration: "1h 44min",
      rating: "10 anos",
      colors: ["#51334c", "#e5a3c4"],
      featured: false,
      description: "Uma caixa de cartas não enviadas aproxima duas pessoas que viveram a mesma história de maneiras diferentes."
    },
    {
      id: "o-quarto-sinal",
      title: "O Quarto Sinal",
      type: "movie",
      year: 2026,
      genre: "Mistério",
      duration: "1h 56min",
      rating: "14 anos",
      colors: ["#1b173f", "#8b7dff"],
      featured: false,
      description: "Uma estudante de rádio capta sinais idênticos em noites consecutivas. Na quarta noite, a transmissão traz seu próprio nome."
    },
    {
      id: "arquivo-atlas",
      title: "Arquivo Atlas",
      type: "series",
      year: 2026,
      genre: "Mistério",
      duration: "1 temporada",
      rating: "14 anos",
      colors: ["#172342", "#7ba7ff"],
      featured: true,
      description: "Uma equipe de arquivistas digitais investiga documentos que aparecem em sistemas públicos antes de serem criados."
    },
    {
      id: "estacao-norte",
      title: "Estação Norte",
      type: "series",
      year: 2025,
      genre: "Drama",
      duration: "2 temporadas",
      rating: "12 anos",
      colors: ["#3b263b", "#dca2c5"],
      featured: true,
      description: "Em uma estação ferroviária no limite do país, passageiros e funcionários cruzam caminhos enquanto tentam recomeçar."
    },
    {
      id: "planeta-de-bolso",
      title: "Planeta de Bolso",
      type: "series",
      year: 2024,
      genre: "Ficção científica",
      duration: "1 temporada",
      rating: "Livre",
      colors: ["#0d414b", "#68e0c5"],
      featured: true,
      description: "Uma equipe de cientistas miniaturiza um ecossistema e descobre que as regras daquele pequeno mundo são surpreendentes."
    },
    {
      id: "manual-do-caos",
      title: "Manual do Caos",
      type: "series",
      year: 2025,
      genre: "Comédia",
      duration: "3 temporadas",
      rating: "12 anos",
      colors: ["#4c2361", "#e8a3ff"],
      featured: true,
      description: "Quatro colegas dividem um apartamento e tentam seguir um manual de convivência que ninguém leu até o fim."
    },
    {
      id: "lendas-do-vazio",
      title: "Lendas do Vazio",
      type: "series",
      year: 2023,
      genre: "Fantasia",
      duration: "2 temporadas",
      rating: "10 anos",
      colors: ["#2a174e", "#ba91ff"],
      featured: false,
      description: "Uma aprendiz de guardiã viaja por cidades que desapareceram dos mapas para reunir histórias perdidas."
    },
    {
      id: "rota-17",
      title: "Rota 17",
      type: "series",
      year: 2022,
      genre: "Aventura",
      duration: "2 temporadas",
      rating: "12 anos",
      colors: ["#4d2e1b", "#e6b76d"],
      featured: false,
      description: "Um ônibus que cruza o interior transporta passageiros com destinos diferentes, mas todos parecem estar fugindo de alguma coisa."
    }
  ];

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const page = document.body.dataset.page || "";
  const storageKey = "cineverse-watchlist-v2";

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  // Cria pôsteres ilustrados diretamente no código.
  // Assim, o site não depende de arquivos de imagem separados.
  function makePoster(item) {
    const title = escapeHTML(item.title);
    const genre = escapeHTML(item.genre);
    const first = item.colors[0];
    const second = item.colors[1];

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="560"
        viewBox="0 0 400 560">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${first}"/>
            <stop offset="100%" stop-color="${second}"/>
          </linearGradient>
          <radialGradient id="glow">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".45"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="400" height="560" fill="url(#bg)"/>
        <circle cx="290" cy="160" r="170" fill="url(#glow)"/>
        <circle cx="290" cy="160" r="78" fill="none"
          stroke="#ffffff" stroke-opacity=".35" stroke-width="2"/>
        <circle cx="290" cy="160" r="108" fill="none"
          stroke="#ffffff" stroke-opacity=".18" stroke-width="1"/>
        <path d="M0 370 Q100 250 210 370 T400 350 V560 H0Z"
          fill="#080510" fill-opacity=".5"/>
        <path d="M0 430 Q130 350 250 430 T400 410"
          fill="none" stroke="#ffffff" stroke-opacity=".25" stroke-width="2"/>
        <g fill="#ffffff" fill-opacity=".8">
          <circle cx="60" cy="85" r="2"/>
          <circle cx="120" cy="150" r="3"/>
          <circle cx="330" cy="70" r="2"/>
          <circle cx="235" cy="250" r="2"/>
          <circle cx="70" cy="310" r="2"/>
          <circle cx="350" cy="320" r="3"/>
        </g>
        <text x="28" y="430" fill="#ffffff" font-size="13"
          font-family="Arial,sans-serif" letter-spacing="3">${genre.toUpperCase()}</text>
        <text x="28" y="475" fill="#ffffff" font-size="28"
          font-weight="bold" font-family="Arial,sans-serif">${title}</text>
        <text x="28" y="515" fill="#ffffff" fill-opacity=".8"
          font-size="15" font-family="Arial,sans-serif">CINEVERSE · ${item.year}</text>
      </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function getSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  }

  function saveSaved(ids) {
    try {
      localStorage.setItem(storageKey, JSON.stringify([...new Set(ids)]));
    } catch {
      showToast("Não foi possível salvar os favoritos neste navegador.");
    }
  }

  function isSaved(id) {
    return getSaved().includes(id);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2300);
  }

  function cardTemplate(item) {
    const saved = isSaved(item.id);

    return `
      <article class="movie-card">
        <div class="card-actions">
          <button
            class="icon-btn ${saved ? "is-saved" : ""}"
            data-favorite="${item.id}"
            aria-label="${saved ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
            aria-pressed="${saved}">
            ${saved ? "♥" : "♡"}
          </button>
        </div>

        <a class="poster-link" href="detalhes.html?id=${encodeURIComponent(item.id)}">
          <img src="${makePoster(item)}"
            alt="Pôster ilustrado de ${escapeHTML(item.title)}"
            loading="lazy">
          <div class="poster-overlay">＋ Ver detalhes</div>
        </a>

        <div class="card-topline">
          <h3 class="card-title" title="${escapeHTML(item.title)}">
            ${escapeHTML(item.title)}
          </h3>
          <span class="card-year">${item.year}</span>
        </div>

        <div class="card-meta">
          ${escapeHTML(item.genre)} · ${item.type === "series" ? "Série" : "Filme"}
        </div>
      </article>
    `;
  }

  function renderCards(target, items) {
    if (!target) return;

    target.innerHTML = items.map(cardTemplate).join("");

    target.querySelectorAll("[data-favorite]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.favorite;
        let saved = getSaved();

        if (saved.includes(id)) {
          saved = saved.filter(savedId => savedId !== id);
          showToast("Título removido da sua lista.");
        } else {
          saved.push(id);
          showToast("Título adicionado à sua lista ♥");
        }

        saveSaved(saved);

        if (page === "watchlist") {
          renderWatchlist();
        } else {
          refreshFavoriteButtons();
        }
      });
    });
  }

  function refreshFavoriteButtons() {
    document.querySelectorAll("[data-favorite]").forEach(button => {
      const saved = isSaved(button.dataset.favorite);

      button.classList.toggle("is-saved", saved);
      button.setAttribute("aria-pressed", String(saved));
      button.textContent = saved ? "♥" : "♡";
    });
  }

  function renderHome() {
    renderCards(
      $("#featuredMovies"),
      titles.filter(item => item.type === "movie" && item.featured).slice(0, 5)
    );

    renderCards(
      $("#featuredSeries"),
      titles.filter(item => item.type === "series" && item.featured).slice(0, 4)
    );
  }

  function renderCatalog() {
    const grid = $("#catalogGrid");
    if (!grid) return;

    const type = page === "series" ? "series" : "movie";
    const searchInput = $("#catalogSearch");
    const genreFilter = $("#genreFilter");
    const sortFilter = $("#sortFilter");
    const resultCount = $("#resultCount");
    const emptyState = $("#emptyState");

    function applyFilters() {
      const query = (searchInput?.value || "").trim().toLocaleLowerCase("pt-BR");
      const genre = genreFilter?.value || "all";
      const sort = sortFilter?.value || "featured";

      let results = titles.filter(item => item.type === type);

      if (query) {
        results = results.filter(item =>
          `${item.title} ${item.genre} ${item.year}`
            .toLocaleLowerCase("pt-BR")
            .includes(query)
        );
      }

      if (genre !== "all") {
        results = results.filter(item => item.genre === genre);
      }

      if (sort === "title") {
        results.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
      } else if (sort === "year") {
        results.sort((a, b) => b.year - a.year);
      } else {
        results.sort((a, b) =>
          Number(b.featured) - Number(a.featured) || b.year - a.year
        );
      }

      renderCards(grid, results);

      if (resultCount) {
        const label = type === "series" ? "série(s)" : "filme(s)";
        resultCount.textContent = `${results.length} ${label} encontrado(s)`;
      }

      emptyState?.classList.toggle("hidden", results.length !== 0);
      grid.classList.toggle("hidden", results.length === 0);
    }

    searchInput?.addEventListener("input", applyFilters);
    genreFilter?.addEventListener("change", applyFilters);
    sortFilter?.addEventListener("change", applyFilters);

    $("#clearFilters")?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (genreFilter) genreFilter.value = "all";
      if (sortFilter) sortFilter.value = "featured";
      applyFilters();
    });

    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery && searchInput) {
      searchInput.value = initialQuery;
    }

    applyFilters();
  }

  function renderDetails() {
    const container = $("#detailsContent");
    if (!container) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const item = titles.find(title => title.id === id);

    if (!item) {
      container.innerHTML = `
        <div class="empty-state">
          <span>⌕</span>
          <h2>Título não encontrado</h2>
          <p>Escolha um título no catálogo para ver os detalhes.</p>
          <a class="btn btn-primary" href="filmes.html">Voltar aos filmes</a>
        </div>
      `;
      return;
    }

    document.title = `CineVerse | ${item.title}`;
    const saved = isSaved(item.id);

    container.innerHTML = `
      <section class="details-hero">
        <div class="details-layout">
          <img class="details-poster"
            src="${makePoster(item)}"
            alt="Pôster ilustrado de ${escapeHTML(item.title)}">

          <div class="details-copy">
            <p class="eyebrow">
              ${item.type === "series" ? "SÉRIE DO CATÁLOGO" : "FILME DO CATÁLOGO"}
            </p>

            <h1>${escapeHTML(item.title)}</h1>

            <p>
              ${item.year} · ${escapeHTML(item.genre)} · ${escapeHTML(item.duration)}
            </p>

            <p>Classificação indicativa: ${escapeHTML(item.rating)}</p>

            <p>${escapeHTML(item.description)}</p>

            <div class="hero-actions">
              <button class="btn btn-primary" id="catalogNotice">
                ▶ ${item.type === "series" ? "Ver episódios" : "Assistir agora"}
              </button>

              <button class="btn btn-secondary" id="detailFavorite"
                aria-pressed="${saved}">
                ${saved ? "♥ Na minha lista" : "♡ Minha lista"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="details-body">
        <h2>Sobre este título</h2>
        <p>${escapeHTML(item.description)}</p>

        <div class="notice-panel">
          <strong>Catálogo demonstrativo</strong>
          <p>
            Este site não reproduz vídeos. Para adicionar reprodução,
            utilize vídeos próprios, de domínio público ou fontes que
            autorizem a incorporação.
          </p>
        </div>
      </section>
    `;

    $("#catalogNotice")?.addEventListener("click", () => {
      showToast("A reprodução de vídeos ainda não está disponível.");
    });

    $("#detailFavorite")?.addEventListener("click", () => {
      let savedIds = getSaved();

      if (savedIds.includes(item.id)) {
        savedIds = savedIds.filter(savedId => savedId !== item.id);
        showToast("Título removido da sua lista.");
      } else {
        savedIds.push(item.id);
        showToast("Título adicionado à sua lista ♥");
      }

      saveSaved(savedIds);

      const isNowSaved = savedIds.includes(item.id);
      const button = $("#detailFavorite");

      button.textContent = isNowSaved ? "♥ Na minha lista" : "♡ Minha lista";
      button.setAttribute("aria-pressed", String(isNowSaved));
    });
  }

  function renderWatchlist() {
    const grid = $("#watchlistGrid");
    if (!grid) return;

    const savedIds = getSaved();
    const savedTitles = savedIds
      .map(id => titles.find(item => item.id === id))
      .filter(Boolean);

    $("#resultCount").textContent =
      `${savedTitles.length} título(s) salvo(s)`;

    renderCards(grid, savedTitles);

    grid.classList.toggle("hidden", savedTitles.length === 0);
    $("#watchlistEmpty")?.classList.toggle("hidden", savedTitles.length !== 0);
    $("#clearWatchlist")?.classList.toggle("hidden", savedTitles.length === 0);
  }

  function setupGlobalSearch() {
    const input = $("#globalSearch");
    if (!input) return;

    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;

      const query = input.value.trim();
      const destination = page === "series" ? "series.html" : "filmes.html";

      window.location.href =
        destination + (query ? `?q=${encodeURIComponent(query)}` : "");
    });
  }

  function setupMobileMenu() {
    const button = $("#menuToggle");
    const nav = $("#mainNav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      button.textContent = isOpen ? "×" : "☰";
    });
  }

  setupMobileMenu();
  setupGlobalSearch();

  if (page === "home") {
    renderHome();
  }

  if (page === "movies" || page === "series") {
    renderCatalog();
  }

  if (page === "details") {
    renderDetails();
  }

  if (page === "watchlist") {
    renderWatchlist();

    $("#clearWatchlist")?.addEventListener("click", () => {
      saveSaved([]);
      renderWatchlist();
      showToast("Sua lista foi limpa.");
    });
  }
})();
