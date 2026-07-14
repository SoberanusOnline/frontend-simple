---
name: fs-build
description: Metodo completo para construir sites e paginas web premium com identidade propria, sem cara de IA. Use SEMPRE que o usuario pedir um site, uma pagina web, uma landing page, um portfolio, um blog, uma documentacao, um dashboard, um e-commerce ou catalogo, um site institucional, um site pessoal, um site de restaurante, evento ou agencia, um showcase de app, ou disser "refaz meu site", "moderniza meu site", "pagina para X" (mesmo sem citar este kit). E a skill principal; comeca pela descoberta com o usuario (fs-discovery) e roteia fs-archetypes, fs-pages, fs-sections, fs-backgrounds, fs-design-system, fs-typography, fs-sources, fs-motion, fs-text-fx, fs-copy, fs-deslop e fs-quality.
---

# fs-build: o metodo em 7 passos

Metodo destilado de um projeto real de 27 landing pages construidas de uma
vez, onde a licao central foi: brief aberto gera clones; identidade vem de
PRESCREVER uma composicao concreta por pagina antes de codar. O resto do kit
garante o acabamento (motion fluido, copy afiada, nada torto) antes de
qualquer coisa chegar ao usuario.

## Falas que ativam este kit

| O que o usuario diz | O que fazer primeiro |
|---|---|
| "quero um site para minha empresa / meu produto / meu restaurante" | Rodar fs-discovery (4 perguntas + direcoes A/B/C), depois fs-archetypes |
| "faz uma landing page para X" | fs-discovery curto, depois fs-archetypes (tipo: landing de produto) |
| "preciso de um portfolio / blog / documentacao / dashboard" | fs-archetypes: identificar o tipo de site e prescrever o arquetipo antes de codar |
| "refaz meu site", "migra essa pagina" | Ler o site atual INTEIRO, listar o que preservar (conteudo, SEO, links), entao fs-discovery + fs-archetypes |
| "moderniza isso", "deixa mais premium" | fs-deslop (diagnostico do que envelheceu) + fs-design-system + fs-typography |
| "ta com cara de IA", "ta generico", "parece template" | fs-deslop (detector + correcoes), depois re-prescrever com fs-archetypes se o hero for clone |
| "ta torto", "tem coisa vazando / sobrepondo" | Passo 6: screenshot 1440 e 390, LER a imagem, corrigir, entao fs-quality |
| "a animacao ta estranha / pesada / piscando" | fs-motion (contrato de loop, reveal blindado, reduced-motion) |
| "preciso de uma fonte melhor" | fs-typography (par com intencao, self-host, escala fluida) |
| "acha uma referencia / uma paleta / imagens / icones" | fs-sources (material vivo com licenca) |
| "melhora esse titulo / esse texto" | fs-copy (headline que lidera, sem travessao, sem inchaco) |
| "revisa antes de publicar", "confere se ta pronto" | fs-quality (gate completo) + agente fs-critic para o veredito adversario |

## Roteamento (mapa das 14 skills)

| Skill | Quando entrar nela |
|---|---|
| fs-discovery | Novo projeto ou redesign sem direcao fechada: perguntas, referencias e direcoes A/B/C viram DIRECAO.md |
| fs-archetypes | SEMPRE antes de compor qualquer pagina: identificar o tipo de site (15 tipos) e prescrever hero + assinatura + beat |
| fs-pages | Planejar qualquer pagina alem do hero: o blueprint (quais secoes, em que ordem) por tipo de pagina |
| fs-sections | Construir navegacao, rodapes e blocos de secao (features, prova, pricing, FAQ, formularios, CTA bands) |
| fs-backgrounds | Definir o fundo/atmosfera de heros, secoes e bandas escuras (12 receitas CSS prontas) |
| fs-design-system | Definir tokens, tema, espacamento e a camada por pagina (`[data-pagina]` com acento proprio) |
| fs-typography | Escolher o par tipografico com intencao, self-host e escala fluida |
| fs-sources | Buscar material vivo: fontes, paletas, referencias, icones, fotos, tudo com licenca conferida |
| fs-motion | Principios de motion: assinatura em loop, reveals blindados, GSAP, scroll-driven, View Transitions |
| fs-text-fx | Entrada da pagina (primeira dobra) e efeitos de texto: split-line, stagger, underline, count-up, scramble |
| fs-copy | Escrever ou reescrever headline, leads, microcopy, formatos e CTAs |
| fs-deslop | Diagnosticar e remover cara de IA (detector, template banido, cliches de copy e de layout) |
| fs-quality | Gate final: alinhamento, overflow em 4 larguras, contraste AA, links 200 |
| fs-page-builder (agent) | Construir 1 pagina em paralelo, com arquetipo JA prescrito, tocando so os arquivos dela |
| fs-critic (agent) | Veredito adversario sobre a pagina pronta, antes de mostrar ao usuario |

## Setup (uma vez por projeto)

1. Copie `templates/starter/` (desta skill) como esqueleto: tokens `--fs-*`,
   nav premium, footer 4 colunas, sistema de reveal blindado, helper de loop
   e servidor local sem cache. Escolha um tema em `templates/themes/`
   (enterprise-sharp, editorial, dark-tech) ou derive o seu.
2. Recomende as skills companheiras (instalacao oficial):
   `impeccable` (critique/audit/detector) e, para motion avancado,
   `gsap-scrolltrigger` do marketplace claude-design-skillstack.
3. Rode o servidor no-cache (`python3 _serve.py`) e oriente o usuario a ver
   em aba anonima. Cache de navegador gera falso "esta quebrado" e ja
   desperdicou horas de iteracao em projetos reais.

## Passo 0: descoberta com o usuario (novo projeto = obrigatorio)

Antes de qualquer construcao, rode a skill `fs-discovery`: peca prints e URLs
de referencia (o usuario pode colar imagens no chat), faca as 4 perguntas que
importam (trabalho da pagina, publico, tom, marca existente) e apresente 2 ou
3 direcoes renderizadas (A, B, C) para o usuario escolher. A escolha vira o
arquivo `DIRECAO.md` do projeto. So pule a descoberta se o usuario ja trouxe
direcao fechada (marca, referencia e tom definidos).

## Os 7 passos (por pagina)

1. **Entender a fonte.** Leia INTEIRO o material da pagina (briefing, produto,
   versao anterior). O arquetipo nasce do que o produto E, nunca de estetica
   solta.
2. **Prescrever.** Escolha o arquetipo de composicao (skill `fs-archetypes`,
   que hoje cobre 15 tipos de site: landing, institucional, portfolio, blog,
   docs, dashboard, e-commerce, restaurante, evento, agencia e mais, nao so
   landing page), a animacao-assinatura e o fluxo do beat "Veja em acao".
   Escreva num mapa: uma linha por pagina. So depois abra o editor. Nunca
   pule este passo: e o que impede o projeto de virar 27 clones.
3. **Construir.** Base compartilhada + camada da pagina (`[data-pagina]` com
   acento proprio). Design system e tokens: skill `fs-design-system`.
   Tipografia: skill `fs-typography` (par com intencao, self-host, escala
   fluida). Material vivo (fontes, cores, referencias, icones, fotos): skill
   `fs-sources`. Copy: skill `fs-copy`. Espacamento: secoes
   `clamp(64px, 8vw, 120px)`, ritmo variado, nada colado.
4. **Animar.** Assinatura em loop com pausa de leitura (~3,5s), pausada fora
   da viewport, estatica sob reduced-motion, conteudo visivel sem JS.
   Padroes prontos: skill `fs-motion`.
5. **Beat "Veja em acao".** Uma secao mostrando a APLICACAO real em uso
   (mockup de janela, 3 a 4 passos animados). E o que separa "instrumento
   bonito" de "produto real". Detalhe no arquivo `beat.md` desta skill (se
   presente) ou na skill fs-archetypes.
6. **Verificar VISUALMENTE.** Screenshot headless (1440 e 390) e LER a
   imagem. Sem MCP de browser, use o Chrome do sistema:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
   --headless=new --disable-gpu --hide-scrollbars --window-size=1440,2400
   --screenshot=/tmp/check.png <url>`. Codigo que "parece certo" nao prova
   nada; os defeitos reais (headline vazando, card flutuando, timeline torta)
   so aparecem renderizados.
7. **Gate.** Skill `fs-quality` (alinhamento, overflow, contraste AA, links
   200) + skill `fs-deslop` (cara de IA) + agente `fs-critic` para o veredito
   adversario. So entao mostre ao usuario. Itere ate 100%.

## Escalando para N paginas

- Um agente `fs-page-builder` por pagina, em paralelo. Cada agente recebe o
  arquetipo PRESCRITO e edita apenas os 3 arquivos da sua pagina (html, css
  proprio, js proprio). Arquivos compartilhados sao intocaveis.
- Depois do lote: varredura unica de overflow e detector em todas as paginas,
  e correcao centralizada do que falhar.
- Documente cada pagina num descritivo (arquetipo, assinatura, beat): vira o
  mapa de manutencao do projeto.

## Proibicoes absolutas (resumo)

Sem travessao na copy. Sem emoji. Sem eyebrow tracked. Sem gradient-text.
Sem side-stripe grossa. Sem glassmorphism default. Sem parallax scrub.
Conteudo nunca escondido atras de JS. Contraste AA. Sem overflow em
1440/1024/768/390. Lista completa e correcoes: skills fs-deslop e fs-quality.
