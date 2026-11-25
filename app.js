    /* ===== Pôsteres SVG (Data URI) e ícones SVG inline ===== */

    // Converte um SVG em Data URI para uso em <img>
    function uriSvg(svg) {
      return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    // Gerador pseudoaleatório com semente fixa: o desenho sai sempre igual
    function criarAleatorio(semente) {
      let s = semente;
      return function () {
        s = (s * 16807) % 2147483647;
        return s / 2147483647;
      };
    }

    const SVG_NS = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450"';

    function svgInterestelar() {
      const r = criarAleatorio(7);
      let estrelas = '';
      for (let i = 0; i < 110; i++) {
        estrelas += `<circle cx="${(r() * 300).toFixed(1)}" cy="${(r() * 450).toFixed(1)}" r="${(r() * 1.3 + 0.3).toFixed(2)}" fill="#fff" opacity="${(r() * 0.7 + 0.3).toFixed(2)}"/>`;
      }
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03050a"/><stop offset="1" stop-color="#0d1b33"/></linearGradient>
          <radialGradient id="brilho" cx="0.5" cy="0.5" r="0.5"><stop offset="0.5" stop-color="#ffe2a0"/><stop offset="0.6" stop-color="#ff9a3c" stop-opacity="0.45"/><stop offset="1" stop-color="#ff9a3c" stop-opacity="0"/></radialGradient>
          <radialGradient id="planeta" cx="0.35" cy="0.35" r="0.7"><stop offset="0" stop-color="#7fb6e6"/><stop offset="1" stop-color="#0b2540"/></radialGradient>
        </defs>
        <rect width="300" height="450" fill="url(#ceu)"/>
        ${estrelas}
        <circle cx="150" cy="170" r="120" fill="url(#brilho)"/>
        <circle cx="150" cy="170" r="62" fill="#000"/>
        <ellipse cx="150" cy="170" rx="95" ry="20" fill="none" stroke="#ffd27a" stroke-width="4" opacity="0.85" transform="rotate(-12 150 170)"/>
        <circle cx="232" cy="332" r="26" fill="url(#planeta)"/>
        <ellipse cx="232" cy="332" rx="50" ry="9" fill="none" stroke="#9ec5ea" stroke-width="2" opacity="0.5" transform="rotate(-18 232 332)"/>
      </svg>`);
    }

    function svgBatman() {
      const predios = [[0, 300, 44], [46, 250, 38], [88, 330, 30], [122, 220, 26], [152, 300, 40], [196, 260, 36], [236, 320, 30], [270, 280, 30]];
      const r = criarAleatorio(21);
      let janelas = '';
      predios.forEach(([x, y, w]) => {
        for (let j = y + 14; j < 440; j += 18) {
          for (let i = x + 6; i < x + w - 6; i += 9) {
            if (r() > 0.6) janelas += `<rect x="${i}" y="${j}" width="3" height="5" fill="#f5c518" opacity="0.8"/>`;
          }
        }
      });
      const corpo = predios.map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${450 - y}" fill="#06070b"/>`).join('');
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070d"/><stop offset="1" stop-color="#1c2538"/></linearGradient>
          <linearGradient id="feixe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1b5" stop-opacity="0.5"/><stop offset="1" stop-color="#fff1b5" stop-opacity="0"/></linearGradient>
          <radialGradient id="sinal" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe9a0" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="300" height="450" fill="url(#ceu)"/>
        <ellipse cx="60" cy="90" rx="90" ry="22" fill="#2a3346" opacity="0.55"/>
        <ellipse cx="230" cy="60" rx="110" ry="26" fill="#2a3346" opacity="0.45"/>
        <ellipse cx="150" cy="150" rx="140" ry="18" fill="#222b3d" opacity="0.5"/>
        <circle cx="210" cy="110" r="70" fill="url(#sinal)"/>
        <path d="M0 -4 C-4 -10 -10 -10 -14 -6 L-22 -12 L-18 0 C-22 2 -30 6 -34 14 C-22 10 -14 10 -10 8 C-6 14 -4 18 0 20 C4 18 6 14 10 8 C14 10 22 10 34 14 C30 6 22 2 18 0 L22 -12 L14 -6 C10 -10 4 -10 0 -4 Z" transform="translate(210 110) scale(0.9)" fill="#06070b"/>
        <polygon points="120,0 185,0 265,450 35,450" fill="url(#feixe)"/>
        ${corpo}
        ${janelas}
        <polygon points="122,220 135,160 148,220" fill="#06070b"/>
        <polygon points="88,330 103,270 118,330" fill="#06070b"/>
      </svg>`);
    }

    function svgDuna() {
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9d28a"/><stop offset="0.55" stop-color="#f08a3e"/><stop offset="1" stop-color="#c4501e"/></linearGradient>
          <radialGradient id="sol" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fffbe6"/><stop offset="0.6" stop-color="#ffe7a8" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe7a8" stop-opacity="0"/></radialGradient>
          <linearGradient id="duna1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0944c"/><stop offset="1" stop-color="#b9592a"/></linearGradient>
          <linearGradient id="duna2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8602f"/><stop offset="1" stop-color="#8a3d1c"/></linearGradient>
          <linearGradient id="duna3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a3d1c"/><stop offset="1" stop-color="#4a1d0c"/></linearGradient>
        </defs>
        <rect width="300" height="450" fill="url(#ceu)"/>
        <circle cx="95" cy="232" r="62" fill="url(#sol)"/>
        <circle cx="95" cy="232" r="20" fill="#fff8e0"/>
        <circle cx="212" cy="222" r="34" fill="url(#sol)"/>
        <circle cx="212" cy="222" r="13" fill="#ffe9b0"/>
        <path d="M0 262 Q75 220 150 258 T300 240 L300 450 L0 450Z" fill="url(#duna1)"/>
        <path d="M0 305 Q90 268 170 302 T300 292 L300 450 L0 450Z" fill="url(#duna2)"/>
        <path d="M0 355 Q110 322 200 356 T300 346 L300 450 L0 450Z" fill="url(#duna3)"/>
      </svg>`);
    }

    function svgOppenheimer() {
      const r = criarAleatorio(99);
      let particulas = '';
      for (let i = 0; i < 70; i++) {
        const a = r() * Math.PI * 2;
        const d = 40 + r() * 120;
        const x = 150 + Math.cos(a) * d;
        const y = 210 + Math.sin(a) * d * 0.8;
        const cor = r() > 0.5 ? '#ffd23f' : '#ff8a1e';
        particulas += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r() * 2 + 0.6).toFixed(2)}" fill="${cor}" opacity="${(r() * 0.6 + 0.3).toFixed(2)}"/>`;
      }
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05030a"/><stop offset="1" stop-color="#140b10"/></linearGradient>
          <radialGradient id="explosao" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff6c2"/><stop offset="0.18" stop-color="#ffd23f"/><stop offset="0.4" stop-color="#ff8a1e"/><stop offset="0.65" stop-color="#e50914" stop-opacity="0.65"/><stop offset="1" stop-color="#3a0a0a" stop-opacity="0"/></radialGradient>
          <filter id="desfoque" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <rect width="300" height="450" fill="url(#ceu)"/>
        <circle cx="150" cy="210" r="150" fill="url(#explosao)"/>
        ${particulas}
        <ellipse cx="150" cy="390" rx="170" ry="60" fill="#1a1416" opacity="0.9" filter="url(#desfoque)"/>
        <ellipse cx="80" cy="420" rx="120" ry="50" fill="#0e0b0d" filter="url(#desfoque)"/>
        <ellipse cx="230" cy="340" rx="90" ry="40" fill="#241a1c" opacity="0.8" filter="url(#desfoque)"/>
      </svg>`);
    }

    function svgDivertida() {
      const esferas = [
        { x: 80, y: 150, r: 42, cor: '#ffd23f' },
        { x: 222, y: 128, r: 46, cor: '#3a86ff' },
        { x: 150, y: 262, r: 54, cor: '#8338ec' },
        { x: 70, y: 352, r: 32, cor: '#06d6a0' },
        { x: 232, y: 340, r: 38, cor: '#ef476f' }
      ];
      const corpos = esferas.map(e => `
        <circle cx="${e.x}" cy="${e.y}" r="${(e.r * 1.35).toFixed(1)}" fill="${e.cor}" opacity="0.35" filter="url(#brilhoEsfera)"/>
        <circle cx="${e.x}" cy="${e.y}" r="${e.r}" fill="${e.cor}"/>
        <circle cx="${(e.x - e.r * 0.3).toFixed(1)}" cy="${(e.y - e.r * 0.35).toFixed(1)}" r="${(e.r * 0.28).toFixed(1)}" fill="#fff" opacity="0.6"/>`).join('');
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <radialGradient id="fundo" cx="0.5" cy="0.4" r="0.8"><stop offset="0" stop-color="#1f2347"/><stop offset="1" stop-color="#07080f"/></radialGradient>
          <filter id="brilhoEsfera" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter>
        </defs>
        <rect width="300" height="450" fill="url(#fundo)"/>
        ${corpos}
      </svg>`);
    }

    function svgHomemAranha() {
      const r = criarAleatorio(55);
      let predios = '';
      let janelas = '';
      let x = 0;
      while (x < 300) {
        const w = 28 + Math.floor(r() * 30);
        const h = 170 + Math.floor(r() * 230);
        const y = 450 - h;
        const tom = r() > 0.5 ? '#121a3a' : '#0c1230';
        predios += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${tom}"/>`;
        for (let j = y + 10; j < 440; j += 14) {
          for (let i = x + 5; i < x + w - 5; i += 8) {
            if (r() > 0.72) janelas += `<rect x="${i}" y="${j}" width="3" height="5" fill="${r() > 0.5 ? '#ffe39a' : '#9fd3ff'}" opacity="0.85"/>`;
          }
        }
        x += w + 2;
      }
      // Fios de teia partindo de um ponto central
      const pontos = [[0, 0], [60, 0], [150, 0], [240, 0], [300, 0], [300, 120], [300, 260], [0, 120], [0, 260]];
      const teia = pontos.map(([px, py], i) =>
        `<line x1="150" y1="160" x2="${px}" y2="${py}" stroke="${i % 2 ? '#2b6fd6' : '#e50914'}" stroke-width="0.8" opacity="0.4"/>`).join('');
      return uriSvg(`<svg ${SVG_NS}>
        <defs>
          <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0f2a"/><stop offset="1" stop-color="#1b0a14"/></linearGradient>
          <linearGradient id="vinheta" x1="0" y1="0" x2="0" y2="1"><stop offset="0.6" stop-color="#05060c" stop-opacity="0"/><stop offset="1" stop-color="#05060c" stop-opacity="0.9"/></linearGradient>
          <radialGradient id="aura" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#e50914" stop-opacity="0.35"/><stop offset="1" stop-color="#e50914" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="300" height="450" fill="url(#ceu)"/>
        ${predios}
        ${janelas}
        ${teia}
        <circle cx="150" cy="160" r="40" fill="url(#aura)"/>
        <rect width="300" height="450" fill="url(#vinheta)"/>
      </svg>`);
    }

    function svgPadrao() {
      return uriSvg(`<svg ${SVG_NS}>
        <defs><linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c2130"/><stop offset="1" stop-color="#0b0d12"/></linearGradient></defs>
        <rect width="300" height="450" fill="url(#fundo)"/>
        <rect x="70" y="150" width="160" height="120" rx="8" fill="none" stroke="#f5c518" stroke-width="3" opacity="0.8"/>
        <line x1="95" y1="150" x2="95" y2="270" stroke="#f5c518" stroke-width="2" opacity="0.6"/>
        <line x1="205" y1="150" x2="205" y2="270" stroke="#f5c518" stroke-width="2" opacity="0.6"/>
        <polygon points="130,185 130,235 170,210" fill="#e50914"/>
        <text x="150" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" letter-spacing="4" fill="#9aa3b5">CINEMA</text>
      </svg>`);
    }

    // Caminhos dos ícones (traço simples, estilo linha)
    const CAMINHOS_ICONES = {
      film: '<rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>',
      cup: '<path d="M5 8h14l-1.5 12a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2L5 8z"/><path d="M8 8l1-5h6l1 5"/>',
      bag: '<path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
      gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8c-2-4-6-4-6-1s4 1 6 1zM12 8c2-4 6-4 6-1s-4 1-6 1z"/>',
      tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
      cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
      ticket: '<path d="M2 9a3 3 0 0 0 0 6v4h20v-4a3 3 0 0 1 0-6V5H2z"/><line x1="15" y1="5" x2="15" y2="19" stroke-dasharray="2 2"/>',
      lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
      user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
      chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
      calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
      pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
      trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/>',
      minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
      plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
      arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
      check: '<circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>',
      cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/>'
    };

    // Devolve um SVG inline pronto para inserir no HTML
    function svgIcone(nome) {
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CAMINHOS_ICONES[nome] || ''}</svg>`;
    }

    // Preenche os espaços de ícone que estão no HTML fixo
    function hidratarIcones() {
      document.querySelectorAll('[data-icone]').forEach(el => {
        el.innerHTML = svgIcone(el.dataset.icone);
      });
    }


    const FILEIRAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const LIMITE_ASSENTOS = 10;
    const CORES_POSTER = ['#1b3a5c', '#2b2b2b', '#7a4a1f', '#4a3b2a', '#2e6fb0', '#9b1c1c'];
    const IMAGEM_PADRAO = svgPadrao();
    const TELAS = ['login', 'filmes', 'sala', 'bomboniere', 'checkout', 'ingressos', 'master'];

    // Ícones das categorias da bomboniere
    const ICONES_CATEGORIA = { 'Pipocas': 'bag', 'Bebidas': 'cup', 'Combos': 'gift', 'Doces': 'tag' };

    // Dados iniciais, usados quando não há nada salvo
    const DADOS_PADRAO = {
      filmes: [
        { id: '1', titulo: 'Interestelar', genero: 'Ficção científica', duracao: 169, classificacao: '12', cor: '#1b3a5c', imagem: svgInterestelar(), emCartaz: true,
          sinopse: 'Um grupo de exploradores atravessa um buraco de minhoca em busca de um novo lar para a humanidade.' },
        { id: '2', titulo: 'Batman', genero: 'Ação', duracao: 176, classificacao: '14', cor: '#2b2b2b', imagem: svgBatman(), emCartaz: true,
          sinopse: 'Em Gotham, o Batman investiga uma série de crimes que leva à elite da cidade.' },
        { id: '3', titulo: 'Duna: Parte Dois', genero: 'Ficção científica', duracao: 166, classificacao: '12', cor: '#7a4a1f', imagem: svgDuna(), emCartaz: true,
          sinopse: 'Paul Atreides se une aos Fremen de Arrakis para vingar sua família e enfrentar o império.' },
        { id: '4', titulo: 'Oppenheimer', genero: 'Drama', duracao: 180, classificacao: '16', cor: '#4a3b2a', imagem: svgOppenheimer(), emCartaz: true,
          sinopse: 'A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.' },
        { id: '5', titulo: 'Divertida Mente 2', genero: 'Animação', duracao: 96, classificacao: 'L', cor: '#2e6fb0', imagem: svgDivertida(), emCartaz: true,
          sinopse: 'Com a chegada da adolescência, novas emoções passam a comandar a mente de Riley.' },
        { id: '6', titulo: 'Homem-Aranha: Sem Volta Para Casa', genero: 'Ação', duracao: 148, classificacao: '12', cor: '#9b1c1c', imagem: svgHomemAranha(), emCartaz: true,
          sinopse: 'Peter Parker pede ajuda ao Doutor Estranho para apagar sua identidade, mas um feitiço abre portas para outros universos.' }
      ],
      sessoes: [
        { id: 's1', filmeId: '1', sala: 1, data: '2026-11-24', hora: '14:00' },
        { id: 's2', filmeId: '1', sala: 2, data: '2026-11-24', hora: '19:30' },
        { id: 's3', filmeId: '2', sala: 3, data: '2026-11-24', hora: '16:15' },
        { id: 's4', filmeId: '3', sala: 1, data: '2026-11-25', hora: '21:00' },
        { id: 's5', filmeId: '4', sala: 2, data: '2026-11-25', hora: '20:00' },
        { id: 's6', filmeId: '5', sala: 3, data: '2026-11-24', hora: '13:00' },
        { id: 's7', filmeId: '6', sala: 1, data: '2026-11-25', hora: '18:30' }
      ],
      produtos: [
        { id: 'p1', categoria: 'Pipocas', nome: 'Pipoca pequena', descricao: 'Balde individual, salgada ou doce.', preco: 14.5, ativo: true },
        { id: 'p2', categoria: 'Pipocas', nome: 'Pipoca grande', descricao: 'Balde family size.', preco: 22, ativo: true },
        { id: 'p3', categoria: 'Pipocas', nome: 'Pipoca caramelo', descricao: 'Coberta com calda de caramelo.', preco: 24.9, ativo: true },
        { id: 'p4', categoria: 'Bebidas', nome: 'Refrigerante 500 ml', descricao: 'Cola, laranja ou limão.', preco: 9, ativo: true },
        { id: 'p5', categoria: 'Bebidas', nome: 'Água 500 ml', descricao: 'Água mineral sem gás.', preco: 6, ativo: true },
        { id: 'p6', categoria: 'Bebidas', nome: 'Suco natural', descricao: 'Laranja ou maracujá.', preco: 12, ativo: true },
        { id: 'p7', categoria: 'Combos', nome: 'Combo casal', descricao: '2 pipocas grandes e 2 refrigerantes.', preco: 49.9, ativo: true },
        { id: 'p8', categoria: 'Combos', nome: 'Combo solo', descricao: '1 pipoca média e 1 refrigerante.', preco: 32, ativo: true },
        { id: 'p9', categoria: 'Doces', nome: 'Chocolate ao leite', descricao: 'Barra de 90 g.', preco: 8, ativo: true },
        { id: 'p10', categoria: 'Doces', nome: 'Mini donut', descricao: 'Porção com 4 unidades.', preco: 11, ativo: true }
      ],
      precos: { inteira: 30, meia: 15, meiaAutomatica: true },
      ocupados: { s1: ['A1', 'A2', 'B5', 'C7', 'C8', 'D12'], s3: ['E3', 'E4', 'F6', 'F7'], s6: ['G1', 'H12'] },
      pedidos: []
    };

    // Variáveis de estado
    let dados;
    let login;
    let carrinho;
    let categoriaProduto = 'Todas';
    let abaMaster = 'dashboard';
    let filmeEditando = null;
    let ultimoPedido = null;
    let timerAviso = null;

    // ---------- Funções auxiliares ----------

    // Escapa texto digitado pelo usuário antes de colocar no HTML
    function escapar(texto) {
      return String(texto ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function formatarMoeda(valor) {
      return Number(valor || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // Converte 2026-11-24 em 24/11
    function formatarData(data) {
      const partes = data.split('-');
      return partes[2] + '/' + partes[1];
    }

    function novoId() {
      return Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
    }

    function comparaSessoes(a, b) {
      return (a.data + a.hora).localeCompare(b.data + b.hora);
    }

    function mostrarAviso(mensagem, tipo = 'success') {
      const aviso = document.getElementById('aviso');
      aviso.className = 'alert alert-flutuante alert-' + tipo;
      aviso.textContent = mensagem;
      clearTimeout(timerAviso);
      timerAviso = setTimeout(() => aviso.classList.add('d-none'), 3000);
    }

    // ---------- Armazenamento (localStorage com fallback seguro) ----------

    // Chaves do localStorage, organizadas por assunto
    const CHAVE_FILMES = 'cinema_filmes';
    const CHAVE_PRECOS = 'cinema_precos';
    const CHAVE_OCUPADOS = 'cinema_assentos_ocupados';
    const CHAVE_INGRESSOS = 'cinema_ingressos_comprados';
    const CHAVE_USUARIO = 'cinema_usuario_logado';
    const CHAVE_CARRINHO = 'cinema_carrinho';
    const CHAVE_ANTIGA = 'cinema_sistema_v4';
    const TODAS_CHAVES = [CHAVE_FILMES, CHAVE_PRECOS, CHAVE_OCUPADOS, CHAVE_INGRESSOS, CHAVE_USUARIO, CHAVE_CARRINHO, CHAVE_ANTIGA];

    // Verifica se o navegador deixa usar o localStorage (o preview pode bloquear)
    function testarLocalStorage() {
      try {
        window.localStorage.setItem('__teste_cinema__', '1');
        window.localStorage.removeItem('__teste_cinema__');
        return window.localStorage;
      } catch (e) {
        return null;
      }
    }

    const armazenamento = testarLocalStorage();

    // Memória temporária: usada só quando o localStorage está bloqueado
    const memoriaTemporaria = {};

    function lerItem(chave) {
      try {
        if (armazenamento) return armazenamento.getItem(chave);
      } catch (e) { /* cai para a memória temporária */ }
      return Object.prototype.hasOwnProperty.call(memoriaTemporaria, chave) ? memoriaTemporaria[chave] : null;
    }

    function gravarItem(chave, texto) {
      memoriaTemporaria[chave] = texto;
      try {
        if (armazenamento) armazenamento.setItem(chave, texto);
      } catch (e) {
        mostrarAviso('O navegador não permitiu salvar os dados. Eles valem só até fechar a página.', 'warning');
      }
    }

    function removerItem(chave) {
      delete memoriaTemporaria[chave];
      try {
        if (armazenamento) armazenamento.removeItem(chave);
      } catch (e) { /* ignora */ }
    }

    // Lê um valor em JSON; se não existir ou estiver corrompido, usa o padrão
    function lerJSON(chave, padrao) {
      try {
        const texto = lerItem(chave);
        if (texto !== null) return JSON.parse(texto);
      } catch (e) { /* valor corrompido: usa o padrão */ }
      return JSON.parse(JSON.stringify(padrao));
    }

    function gravarJSON(chave, valor) {
      gravarItem(chave, JSON.stringify(valor));
    }

    // Carrega todos os dados do sistema; o que não existir recebe o valor padrão
    function carregarDados() {
      // Aproveita os dados da versão anterior, se ainda não existirem as chaves novas
      const antigo = lerItem(CHAVE_FILMES) === null ? lerJSON(CHAVE_ANTIGA, null) : null;
      const base = antigo || DADOS_PADRAO;

      const filmes = lerJSON(CHAVE_FILMES, { filmes: base.filmes, sessoes: base.sessoes });
      const precos = lerJSON(CHAVE_PRECOS, {
        inteira: base.precos.inteira,
        meia: base.precos.meia,
        meiaAutomatica: base.precos.meiaAutomatica,
        produtos: base.produtos
      });

      return {
        filmes: filmes.filmes,
        sessoes: filmes.sessoes,
        produtos: precos.produtos,
        precos: { inteira: precos.inteira, meia: precos.meia, meiaAutomatica: precos.meiaAutomatica },
        ocupados: lerJSON(CHAVE_OCUPADOS, base.ocupados),
        pedidos: lerJSON(CHAVE_INGRESSOS, base.pedidos)
      };
    }

    // Grava cada parte dos dados na sua chave
    function salvarDados() {
      gravarJSON(CHAVE_FILMES, { filmes: dados.filmes, sessoes: dados.sessoes });
      gravarJSON(CHAVE_PRECOS, {
        inteira: dados.precos.inteira,
        meia: dados.precos.meia,
        meiaAutomatica: dados.precos.meiaAutomatica,
        produtos: dados.produtos
      });
      gravarJSON(CHAVE_OCUPADOS, dados.ocupados);
      gravarJSON(CHAVE_INGRESSOS, dados.pedidos);
    }

    function carrinhoVazio() {
      return { sessaoId: null, assentos: [], tipo: 'inteira', itens: {} };
    }

    function carregarCarrinho() {
      return { ...carrinhoVazio(), ...lerJSON(CHAVE_CARRINHO, {}) };
    }

    function salvarCarrinho() {
      gravarJSON(CHAVE_CARRINHO, carrinho);
    }

    function carregarLogin() {
      const usuario = lerJSON(CHAVE_USUARIO, null);
      return usuario && usuario.nome && usuario.perfil ? usuario : null;
    }

    // Apaga todos os dados salvos e volta aos filmes e preços originais
    function resetarBanco() {
      if (!confirm('Apagar os dados salvos e restaurar os filmes e preços originais?')) return;
      TODAS_CHAVES.filter(chave => chave !== CHAVE_USUARIO).forEach(removerItem);
      dados = carregarDados();
      carrinho = carrinhoVazio();
      salvarDados();
      salvarCarrinho();
      ultimoPedido = null;
      limparFormFilme();
      renderizarMaster();
      mostrarAviso('Banco restaurado para os dados originais.');
    }

    // ---------- Cálculos ----------

    function sessaoAtual() {
      return dados.sessoes.find(s => s.id === carrinho.sessaoId) || null;
    }

    function precoUnitario() {
      return carrinho.tipo === 'meia' ? dados.precos.meia : dados.precos.inteira;
    }

    function totalIngressos() {
      return carrinho.assentos.length * precoUnitario();
    }

    function quantidadeItens() {
      return Object.values(carrinho.itens).reduce((soma, q) => soma + q, 0);
    }

    function totalItens() {
      return Object.entries(carrinho.itens).reduce((soma, [id, qtd]) => {
        const produto = dados.produtos.find(p => p.id === id);
        return soma + (produto ? produto.preco * qtd : 0);
      }, 0);
    }

    // Atualiza os textos de resumo em todas as telas
    function atualizarResumo() {
      document.getElementById('contador-carrinho').textContent = carrinho.assentos.length + quantidadeItens();
      document.getElementById('preco-inteira').textContent = formatarMoeda(dados.precos.inteira);
      document.getElementById('preco-meia').textContent = formatarMoeda(dados.precos.meia);
      document.getElementById('lista-assentos-escolhidos').textContent =
        carrinho.assentos.length ? [...carrinho.assentos].sort().join(', ') : 'Nenhum assento escolhido';
      document.getElementById('subtotal-ingressos').textContent = formatarMoeda(totalIngressos());
      document.getElementById('resumo-bomb-texto').textContent =
        quantidadeItens() + ' item(ns) · Total: ' + formatarMoeda(totalIngressos() + totalItens());
    }

    // ---------- Navegação entre telas ----------

    function atualizarNavbar() {
      const logado = !!login;
      document.querySelectorAll('[data-visivel]').forEach(item => {
        item.classList.toggle('d-none', !logado || item.dataset.visivel !== login.perfil);
      });
      document.getElementById('nome-usuario').textContent =
        logado ? (login.perfil === 'master' ? 'Admin Master' : login.nome) : '';
      document.getElementById('btn-sair').classList.toggle('d-none', !logado);
    }

    // Mostra a tela pedida, respeitando o perfil do usuário
    function irPara(tela) {
      if (!login) tela = 'login';
      else if (login.perfil === 'master') tela = 'master';
      else if (tela === 'login' || tela === 'master') tela = 'filmes';

      if (tela !== 'checkout') ultimoPedido = null;

      TELAS.forEach(t => document.getElementById('tela-' + t).classList.toggle('d-none', t !== tela));
      document.querySelectorAll('.menu-link').forEach(a => a.classList.toggle('ativo', a.dataset.tela === tela));
      atualizarNavbar();

      if (tela === 'filmes') renderizarFilmes();
      if (tela === 'sala') renderizarSala();
      if (tela === 'bomboniere') renderizarBomboniere();
      if (tela === 'checkout') renderizarCheckout();
      if (tela === 'ingressos') renderizarIngressos();
      if (tela === 'master') renderizarMaster();

      atualizarResumo();
      window.scrollTo(0, 0);
    }

    // ---------- Login ----------

    function trocarAbaLogin(aba) {
      const cliente = aba === 'cliente';
      document.getElementById('aba-cliente').classList.toggle('ativo', cliente);
      document.getElementById('aba-master').classList.toggle('ativo', !cliente);
      document.getElementById('form-cliente').classList.toggle('d-none', !cliente);
      document.getElementById('form-master').classList.toggle('d-none', cliente);
      esconderErroLogin();
    }

    function mostrarErroLogin(mensagem) {
      const alerta = document.getElementById('alerta-login');
      alerta.textContent = mensagem;
      alerta.classList.remove('d-none');
    }

    function esconderErroLogin() {
      document.getElementById('alerta-login').classList.add('d-none');
    }

    function fazerLogin(nome, perfil) {
      login = { nome: nome, perfil: perfil };
      gravarJSON(CHAVE_USUARIO, login);
      document.getElementById('form-cliente').reset();
      document.getElementById('form-master').reset();
      mostrarAviso('Bem-vindo, ' + nome + '!');
      irPara(perfil === 'master' ? 'master' : 'filmes');
    }

    function sair() {
      removerItem(CHAVE_USUARIO);
      login = null;
      carrinho = carrinhoVazio();
      salvarCarrinho();
      ultimoPedido = null;
      trocarAbaLogin('cliente');
      irPara('login');
      mostrarAviso('Você saiu do sistema.');
    }

    // ---------- Filmes ----------

    function renderizarFilmes() {
      const lista = document.getElementById('lista-filmes');
      const emCartaz = dados.filmes.filter(f => f.emCartaz);

      if (emCartaz.length === 0) {
        lista.innerHTML = '<p class="text-secondary">Nenhum filme em cartaz.</p>';
        return;
      }

      lista.innerHTML = emCartaz.map(f => {
        const sessoes = dados.sessoes.filter(s => s.filmeId === f.id).sort(comparaSessoes);
        const botoes = sessoes.map(s =>
          `<button type="button" class="btn-sessao" data-sessao-id="${s.id}">${formatarData(s.data)} · ${s.hora} · Sala ${s.sala}</button>`
        ).join('') || '<span class="small text-secondary">Sem sessões cadastradas.</span>';

        return `
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="cartao cartao-elevado filme-card">
              <div class="capa"><img src="${escapar(f.imagem || IMAGEM_PADRAO)}" alt="Capa de ${escapar(f.titulo)}" loading="lazy" onerror="this.onerror=null;this.src=IMAGEM_PADRAO">
                <span class="classificacao class-${escapar(f.classificacao)}">${escapar(f.classificacao)}</span>
                <div class="capa-info">${escapar(f.genero)} · ${f.duracao} min</div>
              </div>
              <div class="card-body">
                <h3 class="h6 mb-1">${escapar(f.titulo)}</h3>
                
                <p class="small mb-3">${escapar(f.sinopse)}</p>
                <div class="d-flex flex-wrap gap-2">${botoes}</div>
              </div>
            </div>
          </div>`;
      }).join('');
    }

    function abrirSala(sessaoId) {
      if (carrinho.sessaoId !== sessaoId) {
        carrinho.sessaoId = sessaoId;
        carrinho.assentos = [];
      }
      salvarCarrinho();
      irPara('sala');
    }

    // ---------- Sala ----------

    function renderizarSala() {
      const sessao = sessaoAtual();
      const mapa = document.getElementById('mapa-assentos');

      document.getElementById('radio-inteira').checked = carrinho.tipo === 'inteira';
      document.getElementById('radio-meia').checked = carrinho.tipo === 'meia';

      if (!sessao) {
        document.getElementById('sala-titulo').textContent = 'Nenhuma sessão selecionada';
        document.getElementById('sala-info').textContent = '';
        mapa.innerHTML = '<p class="text-secondary">Escolha uma sessão em Filmes em Cartaz.</p>';
        atualizarResumo();
        return;
      }

      const filme = dados.filmes.find(f => f.id === sessao.filmeId);
      document.getElementById('sala-titulo').textContent = 'Escolha seus assentos';
      document.getElementById('sala-info').textContent =
        `${filme.titulo} · Sala ${sessao.sala} · ${formatarData(sessao.data)} às ${sessao.hora} · Classificação ${filme.classificacao}`;

      const ocupados = dados.ocupados[sessao.id] || [];
      let html = '';

      FILEIRAS.forEach(letra => {
        html += '<div class="fileira"><span class="fileira-letra">' + letra + '</span>';
        for (let n = 1; n <= 12; n++) {
          if (n === 5 || n === 9) html += '<span class="corredor"></span>';
          const codigo = letra + n;
          let classe = '';
          if (ocupados.includes(codigo)) classe = 'ocupado';
          else if (carrinho.assentos.includes(codigo)) classe = 'selecionado';
          const desabilitado = ocupados.includes(codigo) ? 'disabled' : '';
          html += `<button type="button" class="assento ${classe}" data-assento="${codigo}" title="${codigo}" ${desabilitado}>${n}</button>`;
        }
        html += '<span class="fileira-letra">' + letra + '</span></div>';
      });

      mapa.innerHTML = html;
      atualizarResumo();
    }

    function alternarAssento(codigo) {
      const lista = carrinho.assentos;
      const posicao = lista.indexOf(codigo);

      if (posicao >= 0) {
        lista.splice(posicao, 1);
      } else if (lista.length >= LIMITE_ASSENTOS) {
        mostrarAviso('Você pode escolher até ' + LIMITE_ASSENTOS + ' assentos por compra.', 'warning');
        return;
      } else {
        lista.push(codigo);
      }

      salvarCarrinho();
      renderizarSala();
    }

    // ---------- Bomboniere ----------

    function renderizarBomboniere() {
      const categorias = ['Todas', ...new Set(dados.produtos.map(p => p.categoria))];
      document.getElementById('filtros-categorias').innerHTML = categorias.map(c =>
        `<button type="button" class="btn btn-sm ${c === categoriaProduto ? 'btn-warning' : 'btn-outline-light'}" data-categoria="${escapar(c)}">${escapar(c)}</button>`
      ).join('');

      const lista = dados.produtos.filter(p =>
        p.ativo && (categoriaProduto === 'Todas' || p.categoria === categoriaProduto));

      const area = document.getElementById('lista-produtos');
      if (lista.length === 0) {
        area.innerHTML = '<div class="col-12 text-secondary">Nenhum item disponível nesta categoria.</div>';
      } else {
        area.innerHTML = lista.map(p => {
          const qtd = carrinho.itens[p.id] || 0;
          const iconeCategoria = ICONES_CATEGORIA[p.categoria] || 'bag';
          return `
            <div class="col-sm-6 col-lg-4">
              <div class="cartao cartao-elevado h-100">
                <div class="card-body d-flex flex-column p-4">
                  <div class="kpi-icone mb-3">${svgIcone(iconeCategoria)}</div>
                  <span class="rotulo mb-1">${escapar(p.categoria)}</span>
                  <h3 class="h6">${escapar(p.nome)}</h3>
                  <p class="small text-secondary">${escapar(p.descricao)}</p>
                  <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                    <strong class="text-warning">${formatarMoeda(p.preco)}</strong>
                    <div class="d-flex align-items-center gap-2">
                      <button type="button" class="btn btn-sm btn-outline-light" data-produto-id="${p.id}" data-delta="-1">${svgIcone('minus')}</button>
                      <span class="fw-bold" style="min-width: 1.5rem; text-align: center;">${qtd}</span>
                      <button type="button" class="btn btn-sm btn-outline-light" data-produto-id="${p.id}" data-delta="1">${svgIcone('plus')}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        }).join('');
      }
      atualizarResumo();
    }

    function alterarQuantidade(id, delta) {
      const nova = (carrinho.itens[id] || 0) + delta;
      if (nova <= 0) delete carrinho.itens[id];
      else carrinho.itens[id] = nova;
      salvarCarrinho();
      renderizarBomboniere();
    }

    // ---------- Resumo / Checkout ----------

    function renderizarCheckout() {
      const areaResumo = document.getElementById('area-resumo');
      const areaComprovante = document.getElementById('area-comprovante');
      const btnFinalizar = document.getElementById('btn-finalizar');

      if (ultimoPedido) {
        areaResumo.classList.add('d-none');
        areaComprovante.classList.remove('d-none');
        document.getElementById('comprovante-conteudo').innerHTML = htmlComprovante(ultimoPedido);
        return;
      }

      areaResumo.classList.remove('d-none');
      areaComprovante.classList.add('d-none');

      const vazio = carrinho.assentos.length === 0 && quantidadeItens() === 0;
      if (vazio) {
        document.getElementById('resumo-conteudo').innerHTML = '<p class="text-secondary mb-0">Seu carrinho está vazio. Escolha um filme para começar.</p>';
        document.getElementById('resumo-totais').innerHTML = '';
        btnFinalizar.disabled = true;
        return;
      }

      let html = '';
      const sessao = sessaoAtual();

      if (carrinho.assentos.length && sessao) {
        const filme = dados.filmes.find(f => f.id === sessao.filmeId);
        const tipoTexto = carrinho.tipo === 'meia' ? 'Meia-entrada' : 'Inteira';
        html += `
          <p class="rotulo mb-2">Ingressos</p>
          <table class="table table-sm">
            <tbody>
              <tr><td>${escapar(filme.titulo)}<br><small class="text-secondary">Sala ${sessao.sala} · ${formatarData(sessao.data)} às ${sessao.hora}</small></td>
                  <td>Assentos: ${[...carrinho.assentos].sort().join(', ')}</td></tr>
              <tr><td>${carrinho.assentos.length} × ${tipoTexto}</td><td class="text-end">${formatarMoeda(totalIngressos())}</td></tr>
            </tbody>
          </table>`;
      }

      if (quantidadeItens() > 0) {
        const linhas = Object.entries(carrinho.itens).map(([id, qtd]) => {
          const p = dados.produtos.find(x => x.id === id);
          return p ? `<tr><td>${qtd} × ${escapar(p.nome)}</td><td class="text-end">${formatarMoeda(p.preco * qtd)}</td></tr>` : '';
        }).join('');
        html += `<p class="rotulo mb-2 mt-4">Bomboniere</p><table class="table table-sm"><tbody>${linhas}</tbody></table>`;
      }

      document.getElementById('resumo-conteudo').innerHTML = html;
      document.getElementById('resumo-totais').innerHTML = `
        <p class="rotulo mb-3">Valores</p>
        <div class="d-flex justify-content-between mb-2"><span class="text-secondary">Ingressos</span><span>${formatarMoeda(totalIngressos())}</span></div>
        <div class="d-flex justify-content-between mb-2"><span class="text-secondary">Bomboniere</span><span>${formatarMoeda(totalItens())}</span></div>
        <hr>
        <div class="d-flex justify-content-between fw-bold fs-5"><span>Total</span><span class="text-warning">${formatarMoeda(totalIngressos() + totalItens())}</span></div>`;
      btnFinalizar.disabled = false;
    }

    function finalizarCompra() {
      const sessao = carrinho.assentos.length ? sessaoAtual() : null;

      // Confere se alguém já ocupou os assentos enquanto o cliente escolhia
      if (sessao) {
        const ocupados = dados.ocupados[sessao.id] || [];
        const conflito = carrinho.assentos.filter(a => ocupados.includes(a));
        if (conflito.length) {
          carrinho.assentos = carrinho.assentos.filter(a => !conflito.includes(a));
          salvarCarrinho();
          mostrarAviso('Os assentos ' + conflito.join(', ') + ' já foram ocupados. Escolha outros.', 'danger');
          irPara('sala');
          return;
        }
      }

      const filme = sessao ? dados.filmes.find(f => f.id === sessao.filmeId) : null;
      const pedido = {
        codigo: 'CIN' + Date.now().toString(36).toUpperCase().slice(-5),
        titular: login.nome,
        filme: filme ? filme.titulo : 'Bomboniere',
        detalhe: sessao ? `Sala ${sessao.sala} · ${formatarData(sessao.data)} às ${sessao.hora}` : 'Retirada na bomboniere',
        assentos: [...carrinho.assentos].sort(),
        itens: Object.entries(carrinho.itens).map(([id, qtd]) => {
          const p = dados.produtos.find(x => x.id === id);
          return { nome: p ? p.nome : 'Item removido', quantidade: qtd };
        }),
        total: totalIngressos() + totalItens(),
        data: new Date().toLocaleDateString('pt-BR')
      };

      if (sessao) {
        dados.ocupados[sessao.id] = [...(dados.ocupados[sessao.id] || []), ...carrinho.assentos];
      }
      dados.pedidos.push(pedido);
      salvarDados();

      carrinho = carrinhoVazio();
      salvarCarrinho();

      ultimoPedido = pedido;
      mostrarAviso('Compra finalizada com sucesso!');
      irPara('checkout');
    }

    function htmlComprovante(p) {
      const itens = p.itens.length
        ? p.itens.map(i => `<li>${i.quantidade} × ${escapar(i.nome)}</li>`).join('')
        : '<li>Nenhum item</li>';
      return `
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <p class="rotulo mb-1">Compra confirmada</p>
            <h3 class="h4 mb-0">${escapar(p.filme)}</h3>
          </div>
          <span class="fs-2">${svgIcone('ticket')}</span>
        </div>
        <p class="mb-1 text-secondary small">${escapar(p.detalhe)}</p>
        <p class="mb-1">Titular: <strong>${escapar(p.titular)}</strong></p>
        ${p.assentos.length ? `<p class="mb-1">Assentos: <strong>${p.assentos.join(', ')}</strong></p>` : ''}
        <ul class="small text-secondary mt-2">${itens}</ul>
        <hr>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <span class="codigo">${escapar(p.codigo)}</span>
          <strong class="fs-5 text-warning">${formatarMoeda(p.total)}</strong>
        </div>
        <p class="small text-secondary mb-3">Emitido em ${escapar(p.data)}</p>
        <button class="btn btn-outline-light btn-sm" data-tela="filmes">${svgIcone('arrowLeft')} Voltar aos filmes</button>`;
    }

    // ---------- Meus ingressos ----------

    function renderizarIngressos() {
      const meus = dados.pedidos.filter(p => p.titular === login.nome).reverse();
      const area = document.getElementById('lista-ingressos');
      if (meus.length === 0) {
        area.innerHTML = '<div class="col-12 text-secondary">Você ainda não tem compras.</div>';
        return;
      }
      area.innerHTML = meus.map(p => `
        <div class="col-md-6">
          <div class="ingresso h-100">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <strong class="fs-5">${escapar(p.filme)}</strong>
              <span class="codigo">${escapar(p.codigo)}</span>
            </div>
            <p class="small text-secondary mb-2">${escapar(p.detalhe)} · ${escapar(p.data)}</p>
            ${p.assentos.length ? `<p class="small mb-2">Assentos: ${p.assentos.join(', ')}</p>` : ''}
            <p class="mb-0 fw-bold text-warning">Total: ${formatarMoeda(p.total)}</p>
          </div>
        </div>`).join('');
    }

    // ---------- Painel Master ----------

    function renderizarMaster() {
      ['dashboard', 'filmes', 'sessoes', 'precos', 'produtos'].forEach(p => {
        document.getElementById('painel-' + p).classList.toggle('d-none', p !== abaMaster);
      });
      document.querySelectorAll('#menu-master .nav-link').forEach(b => {
        b.classList.toggle('active', b.dataset.aba === abaMaster);
      });
      renderizarDashboard();
      renderizarTabelaFilmes();
      renderizarTabelaSessoes();
      renderizarTabelaProdutos();
      preencherFormPrecos();
    }

    function renderizarDashboard() {
      const vendidos = dados.pedidos.reduce((soma, p) => soma + p.assentos.length, 0);
      const faturamento = dados.pedidos.reduce((soma, p) => soma + p.total, 0);
      document.getElementById('dash-filmes').textContent = dados.filmes.filter(f => f.emCartaz).length;
      document.getElementById('dash-ingressos').textContent = vendidos;
      document.getElementById('dash-faturamento').textContent = formatarMoeda(faturamento);
    }

    function renderizarTabelaFilmes() {
      document.getElementById('tabela-filmes').innerHTML = dados.filmes.map(f => `
        <tr>
          <td>${escapar(f.titulo)}</td>
          <td>${escapar(f.genero)}</td>
          <td>${f.duracao} min</td>
          <td><span class="classificacao class-${escapar(f.classificacao)}">${escapar(f.classificacao)}</span></td>
          <td><div class="form-check form-switch m-0"><input class="form-check-input" type="checkbox" data-acao="toggle-filme" data-id="${f.id}" ${f.emCartaz ? 'checked' : ''}></div></td>
          <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-light me-1" data-acao="editar-filme" data-id="${f.id}" title="Editar">${svgIcone('pencil')}</button>
            <button class="btn btn-sm btn-outline-danger" data-acao="excluir-filme" data-id="${f.id}" title="Excluir">${svgIcone('trash')}</button>
          </td>
        </tr>`).join('');
    }

    function renderizarTabelaSessoes() {
      document.getElementById('sessao-filme').innerHTML = dados.filmes.map(f =>
        `<option value="${f.id}">${escapar(f.titulo)}</option>`).join('');

      document.getElementById('tabela-sessoes').innerHTML = [...dados.sessoes].sort(comparaSessoes).map(s => {
        const filme = dados.filmes.find(f => f.id === s.filmeId);
        const ocupados = (dados.ocupados[s.id] || []).length;
        return `
          <tr>
            <td>${escapar(filme ? filme.titulo : '-')}</td>
            <td>Sala ${s.sala}</td>
            <td>${formatarData(s.data)} ${s.hora}</td>
            <td>${ocupados}</td>
            <td class="text-end text-nowrap">
              <button class="btn btn-sm btn-outline-light me-1" data-acao="liberar-sessao" data-id="${s.id}">Liberar assentos</button>
              <button class="btn btn-sm btn-outline-danger" data-acao="excluir-sessao" data-id="${s.id}" title="Excluir">${svgIcone('trash')}</button>
            </td>
          </tr>`;
      }).join('');
    }

    function renderizarTabelaProdutos() {
      document.getElementById('tabela-produtos').innerHTML = dados.produtos.map(p => `
        <tr>
          <td><input class="form-control form-control-sm" value="${escapar(p.nome)}" data-acao="produto-nome" data-id="${p.id}"></td>
          <td>${escapar(p.categoria)}</td>
          <td style="width: 110px;"><input type="number" step="0.5" min="0" class="form-control form-control-sm" value="${p.preco}" data-acao="produto-preco" data-id="${p.id}"></td>
          <td><div class="form-check form-switch m-0"><input class="form-check-input" type="checkbox" data-acao="produto-ativo" data-id="${p.id}" ${p.ativo ? 'checked' : ''}></div></td>
          <td class="text-end"><button class="btn btn-sm btn-outline-danger" data-acao="excluir-produto" data-id="${p.id}" title="Excluir">${svgIcone('trash')}</button></td>
        </tr>`).join('');
    }

    function preencherFormPrecos() {
      document.getElementById('input-preco-inteira').value = dados.precos.inteira;
      document.getElementById('input-preco-meia').value = dados.precos.meia;
      document.getElementById('input-preco-auto').checked = dados.precos.meiaAutomatica;
      document.getElementById('input-preco-meia').disabled = dados.precos.meiaAutomatica;
    }

    function preencherFormFilme(f) {
      document.getElementById('filme-id').value = f.id;
      document.getElementById('filme-titulo').value = f.titulo;
      document.getElementById('filme-genero').value = f.genero;
      document.getElementById('filme-duracao').value = f.duracao;
      document.getElementById('filme-classificacao').value = f.classificacao;
      document.getElementById('filme-sinopse').value = f.sinopse;
      document.getElementById('filme-imagem').value = f.imagem || '';
      document.getElementById('filme-form-titulo').textContent = 'Editar filme';
      document.getElementById('btn-cancelar-filme').classList.remove('d-none');
    }

    function limparFormFilme() {
      filmeEditando = null;
      document.getElementById('form-filme').reset();
      document.getElementById('filme-id').value = '';
      document.getElementById('filme-form-titulo').textContent = 'Novo filme';
      document.getElementById('btn-cancelar-filme').classList.add('d-none');
    }

    // ---------- Eventos ----------

    function iniciarEventos() {
      // Botões e links com data-tela trocam de tela
      document.addEventListener('click', e => {
        const el = e.target.closest('[data-tela]');
        if (!el) return;
        e.preventDefault();
        irPara(el.dataset.tela);
      });

      document.getElementById('btn-sair').addEventListener('click', sair);
      document.getElementById('btn-resetar').addEventListener('click', resetarBanco);

      // Login
      document.getElementById('aba-cliente').addEventListener('click', () => trocarAbaLogin('cliente'));
      document.getElementById('aba-master').addEventListener('click', () => trocarAbaLogin('master'));
      document.getElementById('btn-visitante').addEventListener('click', () => fazerLogin('Visitante', 'cliente'));

      document.getElementById('form-cliente').addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('input-nome').value.trim();
        const email = document.getElementById('input-email').value.trim();
        if (nome.length < 2) return mostrarErroLogin('Digite um nome com pelo menos 2 letras.');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return mostrarErroLogin('Digite um e-mail válido.');
        fazerLogin(nome, 'cliente');
      });

      document.getElementById('form-master').addEventListener('submit', e => {
        e.preventDefault();
        const usuario = document.getElementById('input-usuario').value.trim();
        const senha = document.getElementById('input-senha').value;
        if (usuario === 'admin' && senha === '1234') fazerLogin('Admin Master', 'master');
        else mostrarErroLogin('Usuário ou senha incorretos.');
      });

      // Sala
      document.getElementById('mapa-assentos').addEventListener('click', e => {
        const botao = e.target.closest('[data-assento]');
        if (!botao || botao.disabled) return;
        alternarAssento(botao.dataset.assento);
      });

      document.getElementById('radio-inteira').addEventListener('change', () => {
        carrinho.tipo = 'inteira'; salvarCarrinho(); atualizarResumo();
      });
      document.getElementById('radio-meia').addEventListener('change', () => {
        carrinho.tipo = 'meia'; salvarCarrinho(); atualizarResumo();
      });
      document.getElementById('btn-limpar-assentos').addEventListener('click', () => {
        carrinho.assentos = [];
        salvarCarrinho();
        renderizarSala();
      });

      // Lista de filmes: escolher um horário abre a sala
      document.getElementById('lista-filmes').addEventListener('click', e => {
        const botao = e.target.closest('[data-sessao-id]');
        if (botao) abrirSala(botao.dataset.sessaoId);
      });

      // Bomboniere
      document.getElementById('filtros-categorias').addEventListener('click', e => {
        const botao = e.target.closest('[data-categoria]');
        if (!botao) return;
        categoriaProduto = botao.dataset.categoria;
        renderizarBomboniere();
      });
      document.getElementById('lista-produtos').addEventListener('click', e => {
        const botao = e.target.closest('[data-produto-id]');
        if (botao) alterarQuantidade(botao.dataset.produtoId, Number(botao.dataset.delta));
      });

      // Checkout
      document.getElementById('btn-finalizar').addEventListener('click', finalizarCompra);

      // Painel Master: ações dos botões
      document.getElementById('tela-master').addEventListener('click', e => {
        const alvo = e.target.closest('[data-acao]');
        if (!alvo || alvo.tagName === 'INPUT') return;
        const acao = alvo.dataset.acao;
        const id = alvo.dataset.id;

        if (acao === 'aba') {
          abaMaster = alvo.dataset.aba;
          renderizarMaster();
        }

        if (acao === 'editar-filme') {
          const f = dados.filmes.find(x => x.id === id);
          filmeEditando = id;
          preencherFormFilme(f);
        }

        if (acao === 'excluir-filme' && confirm('Excluir este filme e as suas sessões?')) {
          const sessoesDoFilme = dados.sessoes.filter(s => s.filmeId === id).map(s => s.id);
          dados.filmes = dados.filmes.filter(f => f.id !== id);
          dados.sessoes = dados.sessoes.filter(s => s.filmeId !== id);
          sessoesDoFilme.forEach(sid => delete dados.ocupados[sid]);
          if (filmeEditando === id) limparFormFilme();
          salvarDados();
          renderizarMaster();
          mostrarAviso('Filme excluído.', 'secondary');
        }

        if (acao === 'excluir-sessao' && confirm('Excluir esta sessão?')) {
          dados.sessoes = dados.sessoes.filter(s => s.id !== id);
          delete dados.ocupados[id];
          salvarDados();
          renderizarMaster();
        }

        if (acao === 'liberar-sessao') {
          delete dados.ocupados[id];
          salvarDados();
          renderizarMaster();
          mostrarAviso('Assentos liberados.');
        }

        if (acao === 'excluir-produto' && confirm('Excluir este produto?')) {
          dados.produtos = dados.produtos.filter(p => p.id !== id);
          salvarDados();
          renderizarMaster();
        }
      });

      // Painel Master: mudanças nos campos (switches e inputs das tabelas)
      document.getElementById('tela-master').addEventListener('change', e => {
        const alvo = e.target.closest('[data-acao]');
        if (!alvo) return;
        const acao = alvo.dataset.acao;
        const id = alvo.dataset.id;

        if (acao === 'toggle-filme') {
          dados.filmes.find(f => f.id === id).emCartaz = alvo.checked;
        }
        if (acao === 'produto-nome') {
          const p = dados.produtos.find(x => x.id === id);
          p.nome = alvo.value.trim() || p.nome;
        }
        if (acao === 'produto-preco') {
          dados.produtos.find(x => x.id === id).preco = Math.max(0, Number(alvo.value) || 0);
        }
        if (acao === 'produto-ativo') {
          dados.produtos.find(x => x.id === id).ativo = alvo.checked;
        }

        salvarDados();
        renderizarMaster();
      });

      // Formulário de filme (novo ou edição)
      document.getElementById('form-filme').addEventListener('submit', e => {
        e.preventDefault();
        const titulo = document.getElementById('filme-titulo').value.trim();
        if (!titulo) return mostrarAviso('Informe o título do filme.', 'danger');

        const dadosFilme = {
          titulo: titulo,
          genero: document.getElementById('filme-genero').value.trim(),
          duracao: Number(document.getElementById('filme-duracao').value) || 1,
          classificacao: document.getElementById('filme-classificacao').value,
          sinopse: document.getElementById('filme-sinopse').value.trim(),
          imagem: document.getElementById('filme-imagem').value.trim() || IMAGEM_PADRAO
        };

        if (filmeEditando) {
          Object.assign(dados.filmes.find(f => f.id === filmeEditando), dadosFilme);
          mostrarAviso('Filme atualizado.');
        } else {
          dados.filmes.push({
            id: novoId(), ...dadosFilme,
            cor: CORES_POSTER[dados.filmes.length % CORES_POSTER.length],
            emCartaz: true
          });
          mostrarAviso('Filme cadastrado.');
        }

        salvarDados();
        limparFormFilme();
        renderizarMaster();
      });

      document.getElementById('btn-cancelar-filme').addEventListener('click', limparFormFilme);

      // Formulário de sessão
      document.getElementById('form-sessao').addEventListener('submit', e => {
        e.preventDefault();
        dados.sessoes.push({
          id: novoId(),
          filmeId: document.getElementById('sessao-filme').value,
          sala: Number(document.getElementById('sessao-sala').value),
          data: document.getElementById('sessao-data').value,
          hora: document.getElementById('sessao-hora').value
        });
        salvarDados();
        renderizarMaster();
        mostrarAviso('Sessão adicionada.');
      });

      // Formulário de preços
      document.getElementById('input-preco-auto').addEventListener('change', () => {
        document.getElementById('input-preco-meia').disabled = document.getElementById('input-preco-auto').checked;
      });

      document.getElementById('form-precos').addEventListener('submit', e => {
        e.preventDefault();
        const inteira = Math.max(0, Number(document.getElementById('input-preco-inteira').value) || 0);
        const automatica = document.getElementById('input-preco-auto').checked;
        const meia = automatica
          ? Math.round(inteira * 50) / 100
          : Math.max(0, Number(document.getElementById('input-preco-meia').value) || 0);
        dados.precos = { inteira: inteira, meia: meia, meiaAutomatica: automatica };
        salvarDados();
        renderizarMaster();
        mostrarAviso('Preços atualizados.');
      });

      // Formulário de produto
      document.getElementById('form-produto').addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('prod-nome').value.trim();
        if (!nome) return mostrarAviso('Informe o nome do produto.', 'danger');
        dados.produtos.push({
          id: novoId(),
          categoria: document.getElementById('prod-categoria').value.trim() || 'Outros',
          nome: nome,
          descricao: document.getElementById('prod-descricao').value.trim(),
          preco: Math.max(0, Number(document.getElementById('prod-preco').value) || 0),
          ativo: true
        });
        e.target.reset();
        salvarDados();
        renderizarMaster();
        mostrarAviso('Produto cadastrado.');
      });
    }

    // ---------- Início ----------

    dados = carregarDados();
    login = carregarLogin();
    carrinho = carregarCarrinho();
    salvarDados();
    iniciarEventos();
    hidratarIcones();

    if (login) irPara(login.perfil === 'master' ? 'master' : 'filmes');
    else irPara('login');
  
