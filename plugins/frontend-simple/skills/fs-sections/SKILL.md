---
name: fs-sections
description: Catálogo de componentes de página do kit frontend-simple (navegação, rodapés, blocos de seção, formulários, CTAs) com estrutura e regras anti-clichê. Usar ao construir qualquer seção além do hero.
---

# Seções: o catálogo e as regras anti-clichê

Este é o catálogo de componentes fora do hero. Para cada padrão: quando usar, o esqueleto,
as regras de acessibilidade e o erro que agentes cometem por reflexo. Tudo aqui assume a
base do kit: tokens `--fs-*`, cantos retos por default, contraste AA em qualquer fundo,
headline liderando a seção (sem eyebrow tracked, sem gradient-text) e comportamento via
gate `.fs-js` (a página inteira funciona e é legível sem JavaScript).

## A) Navegação

### Top sticky enxuta (o default do kit)

- **Quando**: qualquer site de produto ou institucional; é o ponto de partida.
- **Estrutura**: barra de 72px, marca à esquerda, 4 a 6 links centrais, até 2 CTAs à direita (1 ghost + 1 sólido). Fundo com leve blur/opacidade sobre o conteúdo, linha de 1px `--fs-line` na base.

```html
<header class="nav">
  <a class="nav-brand" href="/">Marca</a>
  <nav aria-label="Principal"><a href="/produto">Produto</a> ...</nav>
  <div class="nav-ctas"><a class="btn-ghost" href="/entrar">Entrar</a><a class="btn" href="/demo">Agendar demo</a></div>
</header>
```

- **A11y**: link "pular para o conteúdo" como primeiro elemento focável; item da página atual com `aria-current="page"`; foco visível em todos os links.
- **Erro comum**: enfiar 9 links e 3 CTAs. Acima de 6 links, o site precisa de outra estratégia, não de uma barra mais cheia.

### Mega-menu

- **Quando**: SÓ para catálogo grande (muitos produtos/áreas, tipo 10+ destinos sob um mesmo tema). Menos que isso é dropdown simples ou nem isso.
- **Estrutura**: botão que abre painel full-width com GRID de colunas tituladas (3 a 4 colunas, 4 a 6 itens cada, item com nome + 1 linha de descrição). Não é lista gigante de 30 links soltos.
- **A11y**: gatilho é `<button aria-expanded aria-controls>`; abre por clique (não só hover); setas navegam itens, ESC fecha e devolve o foco ao botão; sem JS, o gatilho vira link para uma página de índice.
- **Erro comum**: mega-menu por vaidade em site com 5 páginas, e painel que abre no hover e fecha antes do cursor chegar.

### Hamburger/overlay full-screen

- **Quando**: mobile de qualquer site; em desktop, só em sites editoriais/portfólio que escondem a nav de propósito.
- **Estrutura**: botão hamburger abre overlay cobrindo a tela, links em corpo grande (28px+), CTAs no rodapé do overlay, botão fechar no mesmo lugar do gatilho.
- **A11y**: foco preso dentro do overlay enquanto aberto (focus trap); ESC fecha; `aria-expanded` no gatilho; `body` sem scroll enquanto aberto; ao fechar, foco volta ao hamburger. Sem JS (`html` sem `.fs-js`), os links ficam acessíveis (ex.: nav estática no rodapé ou overlay via `:target`).
- **Erro comum**: overlay que abre mas deixa o foco do teclado vagando pela página por baixo.

### Sidebar de docs

- **Quando**: documentação ou qualquer conteúdo com árvore hierárquica real.
- **Estrutura**: `<nav aria-label="Documentação">` fixa à esquerda, grupos com título, itens aninhados no máximo 2 níveis visíveis, item atual com marcador claro (barra de acento à esquerda + peso), grupos colapsáveis com `<details>`.
- **A11y**: `aria-current="page"` no item atual; `<details><summary>` dá colapso grátis por teclado sem JS; em telas estreitas vira `<details>` no topo do conteúdo.
- **Erro comum**: sidebar diferente por página (cada página lista só as irmãs). A árvore é CANÔNICA: a mesma em todas as páginas.

### Anchor-nav de página longa

- **Quando**: página única longa (landing densa, relatório, one-pager) com 4+ seções nomeáveis.
- **Estrutura**: barra secundária sticky abaixo da nav principal, links `href="#secao"` para as seções DA PRÓPRIA página, item ativo acompanhando o scroll (IntersectionObserver, dentro do gate `.fs-js`); opcional: fio de progresso de 2px.
- **A11y**: alvos com `scroll-margin-top` compensando as barras fixas; sem JS os âncoras funcionam normalmente, só perdem o destaque do ativo.
- **Erro comum**: misturar âncoras da página com links para outras páginas na mesma barra; o usuário perde a noção de onde está.

### Tab bar app-like

- **Quando**: web app ou PWA com 3 a 5 áreas de mesmo nível, uso primário mobile.
- **Estrutura**: barra fixa na base (mobile), 3 a 5 itens com ícone + label SEMPRE (ícone sozinho é adivinhação), item ativo com peso e acento.
- **A11y**: é navegação, então `<nav>` com links e `aria-current`, não `role="tablist"` (tablist é para trocar painel na mesma página).
- **Erro comum**: usar tab bar em site de conteúdo/marketing; é padrão de app, não de landing.

### Breadcrumb

- **Quando**: SÓ onde há hierarquia real de 3+ níveis (catálogo, docs, e-commerce). Site raso não tem breadcrumb.
- **Estrutura**: `<nav aria-label="Breadcrumb"><ol>` com links, último item é a página atual (sem link, `aria-current="page"`), separador via CSS (`::before`), nunca no HTML.
- **A11y**: o separador em CSS não é lido por leitor de tela; texto dos níveis igual ao título das páginas.
- **Erro comum**: breadcrumb decorativo com um nível só ("Home / Página") ocupando uma linha inteira para nada.

### Nav transparente sobre hero que solidifica no scroll

- **Quando**: hero com imagem/banda escura full-bleed onde uma barra branca cortaria a composição.
- **Estrutura**: mesma top sticky, mas transparente no topo (`background:transparent`, texto na cor do hero) e, após ~40px de scroll, classe que aplica fundo sólido + linha (transição de 200ms). Toggle via IntersectionObserver numa sentinela, dentro do gate `.fs-js`.
- **A11y/contraste**: nos DOIS estados os links precisam de AA contra o fundo real; se o hero tem áreas claras e escuras, adicione scrim atrás da barra. Sem JS, a barra nasce sólida.
- **Erro comum**: barra transparente com texto branco que fica ilegível quando a página recarrega no meio do scroll, ou que nunca solidifica e briga com o conteúdo.

## B) Rodapés

### Enterprise 4 colunas + disclaimer (o default do kit)

- **Quando**: produto/institucional; o default salvo motivo forte.
- **Estrutura**: banda escura (`g100`), marca + 1 linha de posicionamento à esquerda, 3 a 4 colunas de links tituladas (Produto, Empresa, Recursos, Legal), base com copyright + disclaimer curto + links legais.
- **Regras**: contraste AA sobre o fundo escuro (texto secundário nunca abaixo de 4.5:1); TODOS os links apontam para páginas que existem; coluna com 2 links não é coluna, funde com outra.

### Mega-footer sitemap

- **Quando**: site grande (20+ páginas) onde o footer é a segunda navegação de fato.
- **Estrutura**: o enterprise expandido: 5 a 6 colunas, grupos com subtítulos, busca opcional no topo do footer.
- **Regra**: se a nav principal é enxuta, o mega-footer é o lugar certo do "resto"; ainda assim, só links reais.

### Minimal de uma linha

- **Quando**: portfólio, página pessoal, one-pager, coming soon.
- **Estrutura**: uma linha: nome/marca, 2 a 4 links (e-mail, redes, CV), copyright. Linha de 1px acima, respiro generoso.
- **Erro comum**: inflar com colunas vazias um site que tem 3 páginas.

### Colophon editorial

- **Quando**: sites editoriais, estúdios, projetos com autoria assumida.
- **Estrutura**: além dos links, um bloco de créditos: tipografias usadas (com nome real), stack ("feito com HTML e CSS"), última atualização, autoria. É assinatura, não SEO.

### Footer-CTA

- **Quando**: página cujo objetivo é conversão e que ainda não gastou a banda de CTA final.
- **Estrutura**: banda de conversão (headline curta + 1 CTA) acolada ACIMA das colunas do footer, mesma banda escura, separadas por linha de 1px. Conta como o CTA final da página, não como um extra.

### Footer de docs

- **Quando**: páginas de documentação.
- **Estrutura**: prev/next com o título real das páginas vizinhas, "editar esta página" (link para o repositório), última atualização; abaixo, versão mínima do footer do site.

Regra geral de rodapé: nada de parágrafos de keyword stuffing, nada de "links úteis" que ninguém pediu, nada de coluna de cidades atendidas. Footer é navegação e assinatura, não lixo de SEO.

## C) Blocos de seção

### Features: lista densa com ícone à esquerda

- **Estrutura**: 2 colunas de linhas compactas; cada linha: ícone pequeno (stroke 1.5, monocromático) + nome em peso + 1 frase específica.
- **Quando**: 6+ capacidades de peso parecido.
- **Clichê a evitar**: a grade de 3 cards idênticos com ícone em círculo colorido, título de 2 palavras e frase genérica. É o padrão nº 1 de página com cara de IA.
- **Alternativa**: esta lista densa; a densidade comunica substância.

### Features: díptico alternado media/texto

- **Estrutura**: seções de 2 colunas alternando lado (texto esquerda/media direita, depois invertido); cada díptico tem headline própria, 2 a 3 frases e UMA evidência visual real (screenshot, diagrama, número).
- **Quando**: 2 a 4 capacidades que merecem profundidade individual.
- **Clichê a evitar**: alternar com a MESMA imagem mockup genérica dos dois lados. Cada media precisa mostrar algo distinto de verdade; senão, use outro padrão.

### Features: tabela comparativa de capacidades

- **Estrutura**: tabela recurso x plano/edição com check/traço, `tabular-nums`, primeira coluna sticky em telas estreitas (wrapper com `overflow-x:auto`).
- **Quando**: público que compara linha a linha (compras, TI, procurement).
- **Clichê a evitar**: checks decorativos em tudo (se todas as células têm check, a tabela não informa nada).

### Features: bento assimétrico com hierarquia real

- **Estrutura**: grid de células de tamanhos DIFERENTES: 1 célula grande (a capacidade âncora, com visual), 2 médias, 2 a 3 pequenas; o tamanho reflete importância.
- **Quando**: produto com 1 capacidade dominante + satélites.
- **Clichê a evitar**: bento de células iguais com gradientes: é a grade de cards com outro nome. Sem hierarquia de tamanho intencional, não é bento.

### Prova social: logos de clientes

- **Estrutura**: 1 linha de kicker discreto ("Usado por equipes de...") + fileira de 5 a 8 logos monocromáticos (filtro grayscale, alturas ÓPTICAS equalizadas, não a mesma altura em px).
- **Quando**: logo abaixo do hero; é a prova mais barata de escanear.
- **Clichê a evitar**: logos inventados ou de "parceiros" que são só ferramentas usadas. Logo sem permissão ou sem relação real destrói confiança.

### Prova social: depoimento featured

- **Estrutura**: UM depoimento grande: citação de 2 a 4 linhas ESPECÍFICA (nomeia resultado, número ou situação), retrato real, nome, cargo, empresa; opcional: métrica destacada ao lado.
- **Quando**: no meio da página, após "como funciona".
- **Clichê a evitar**: carrossel de 6 depoimentos vagos ("Ótimo serviço!") com avatares de stock. Um depoimento denso vale mais que seis rasos.

### Prova social: números com fonte

- **Estrutura**: 3 a 4 números com label e FONTE ("processos monitorados desde 2023", "medido em produção, média de 12 meses"); mono `tabular-nums`.
- **Clichê a evitar**: números redondos sem origem ("+10.000 clientes", "99% de satisfação"). Número sem fonte lê como inventado.

### Como funciona: passos numerados

- **Estrutura**: 3 a 4 passos com número grande em mono, nome do passo e 1 a 2 frases; cada passo é uma etapa REAL do fluxo, com substância própria.
- **Clichê a evitar**: os 3 passos falsos ("1. Cadastre-se, 2. Configure, 3. Pronto") que descrevem qualquer produto do mundo. Se os passos servem para outro produto qualquer, são falsos.

### Como funciona: timeline vertical

- **Estrutura**: fio vertical de 1px com nós; cada nó: marco + descrição + artefato (o que existe ao fim da etapa). Reveal progressivo do fio dentro do gate `.fs-js`; sem JS, tudo visível.
- **Quando**: processos com duração/fases reais (implantação, onboarding, metodologia).

### Pricing (3 tiers)

- **Estrutura**: 2 a 3 colunas, UMA com destaque (borda de acento + tag "recomendado"); por tier: nome, preço grande em `tabular-nums`, "para quem", 5 a 8 itens, 1 CTA; toggle mensal/anual como par de `<button aria-pressed>` (gate `.fs-js`; sem JS, mostra anual com nota).
- **Clichê a evitar**: 3 cards com o mesmo peso visual e "mais popular" em todos os tamanhos de badge. Destaque é singular ou não é destaque.

### FAQ (accordion acessível)

- **Estrutura**: `<details><summary>` nativos, agrupados por tema (Compra, Segurança, Técnico) quando passam de 6 perguntas; respostas com links reais.

```html
<details class="faq-item"><summary>A pergunta como o cliente faria</summary>
  <p>Resposta direta em 2 a 4 linhas, com link para a página que aprofunda.</p></details>
```

- **A11y**: `<details>` dá teclado e semântica grátis; não reimplementar com divs e JS. Cantos retos, linha de 1px entre itens, marcador +/- via CSS.
- **Clichê a evitar**: perguntas de marketing disfarçadas ("Por que somos os melhores?"). FAQ responde objeções reais, na língua do cliente.

### Comparativo nós vs alternativa

- **Estrutura**: tabela de 2 a 3 colunas (nós, alternativa direta, status quo/planilha) por critério que o COMPRADOR usa; células com texto curto, não só checks.
- **Regra de honestidade**: a alternativa ganha em pelo menos 1 critério real. Comparativo onde o rival só perde é strawman e o leitor percebe.

### Timeline/roadmap

- **Estrutura**: fases nomeadas (agora, próximo, depois) com entregas por fase; itens de fase futura com verbo no futuro e sem data dura, a menos que a data seja compromisso público.
- **Clichê a evitar**: roadmap decorativo com 12 itens vagos para parecer momentum.

### Banda de CTA intermediária

- **Estrutura**: banda contrastante (escura sobre página clara) com headline de 1 linha + 1 botão; sem imagem, sem lista.
- **Regra dura**: NO MÁXIMO 1 por página além do CTA final, e só em página longa (6+ seções). Página que pede ação a cada 2 scrolls parece desesperada.

### Formulários

- **Estrutura**: mínimo de campos que o processo exige; labels VISÍVEIS acima do campo (placeholder não é label); 1 coluna; inputs de cantos retos com borda `--fs-line` e foco com anel de acento AA.
- **Erros**: inline, específicos, junto do campo ("Informe um e-mail com @", não "Erro no formulário"), com `aria-describedby` ligando erro ao input e `aria-invalid` no campo.
- **Envio**: botão com estado de envio (desabilitado + "Enviando..."), sucesso substituindo o formulário com a expectativa de resposta, falha com caminho alternativo (e-mail direto).
- **Clichê a evitar**: pedir telefone e cargo num formulário de "receba o material". Cada campo extra derruba conversão e cheira a lista de vendas.

### Galeria/showcase

- **Estrutura**: grid de peças (trabalhos, telas, templates) com proporção CONSISTENTE por item, legenda visível (nome + 1 linha), link real por item; lightbox só se agregar (gate `.fs-js`; sem JS, o link abre a imagem/página).
- **Clichê a evitar**: masonry aleatório sem legenda onde nada é clicável.

### Banda de logos de integrações

- **Estrutura**: grid de células IGUAIS (mesma caixa, ex.: 160x64), logo centralizado com altura óptica equalizada, monocromático; célula final "e mais N" linkando a página de integrações.
- **Clichê a evitar**: marquee infinito de logos coloridos em tamanhos díspares. Movimento não conserta desalinhamento.

### Stats band (não-clichê)

- **Estrutura**: 3 a 4 números em mono `tabular-nums` com label E contexto/fonte por número; linha de 1px separando células; count-up só dentro do gate `.fs-js` e com o valor final no HTML.
- **Clichê a evitar**: o hero-metric gigante flutuando sem contexto ("98%") como decoração. Número sem denominador e sem fonte é ornamento, não prova.

### Tabela de dados

- **Estrutura**: `<table>` real (não grid de divs), mono `tabular-nums` nas colunas numéricas alinhadas à direita, zebra sutil (`--fs-layer` a 50%), header sticky em tabela longa, wrapper com `overflow-x:auto` (a página nunca ganha scroll horizontal).
- **A11y**: `<th scope>`, `<caption>` descrevendo a tabela.

### Banda de imagem full-bleed com texto

- **Estrutura**: imagem cobrindo a banda + scrim (gradiente escuro ou bloco sólido a 55-70%) atrás do texto; o texto PRECISA de AA contra a área real onde está, não contra a média da imagem.
- **Clichê a evitar**: texto branco direto sobre foto clara "porque na minha tela dava para ler". Teste no ponto mais claro da área do texto.

### Seção de time

- **Estrutura**: grid de retratos REAIS com enquadramento e tratamento consistentes (mesma proporção, mesmo fundo ou mesmo dessaturado), nome, função, 1 link (LinkedIn ou e-mail).
- **Clichê a evitar**: stock photos, avatares de IA ou ilustrações genéricas no lugar de gente. Sem fotos reais, corte a seção; um "quem faz" em texto honesto vale mais que rostos falsos.

## D) Regras transversais

- **Ritmo entre seções**: alterne densidade (seção densa, seção respirada) e fundo (branca, `g10`, banda escura); duas bandas escuras coladas ou três seções brancas idênticas seguidas achatam a página. Padding vertical de seção com `clamp(64px, 9vw, 120px)`.
- **1 ideia por seção**: se a seção precisa de "e também...", são duas seções ou é corte.
- **Headline lidera**: toda seção abre com a headline (h2) direto; sem eyebrow tracked em mono uppercase abrindo seção, sem gradient-text. Contexto vem na lead abaixo da headline.
- **Semântica**: `<section>` para seção, `<nav>` para navegação, `<footer>`, `<article>`, `<table>` para dados; div-soup quebra leitor de tela e o próprio CSS. Headings em ordem (h1 único, h2 por seção, h3 dentro).
- **Grid seguro**: todo filho direto de grid/flex que contém texto ou tabela recebe `min-width:0`; é a causa nº 1 de overflow horizontal misterioso.
- **Sem JS, tudo em pé**: qualquer comportamento (reveal, accordion custom, toggle, count-up, nav que solidifica) vive atrás do gate `.fs-js`; sem a classe, o conteúdo nasce visível e funcional. `<details>`, âncoras e `:target` resolvem muito sem uma linha de script.
- **Contraste AA sempre**: texto sobre banda escura, sobre acento, sobre imagem ou dentro de célula zebrada passa 4.5:1 (texto normal) ou 3:1 (texto grande e bordas de inputs).
