---
name: fs-build
description: Metodo completo para construir sites e paginas web premium com identidade propria, sem cara de IA. Use SEMPRE que o usuario pedir um site, uma pagina web, uma landing page, um portfolio, um site institucional, uma pagina de produto ou um catalogo (mesmo sem citar este kit). E a skill principal; comeca pela descoberta com o usuario (fs-discovery) e roteia fs-archetypes, fs-design-system, fs-typography, fs-motion, fs-copy, fs-deslop e fs-quality.
---

# fs-build: o metodo em 7 passos

Metodo destilado de um projeto real de 27 landing pages construidas de uma
vez, onde a licao central foi: brief aberto gera clones; identidade vem de
PRESCREVER uma composicao concreta por pagina antes de codar. O resto do kit
garante o acabamento (motion fluido, copy afiada, nada torto) antes de
qualquer coisa chegar ao usuario.

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
2. **Prescrever.** Escolha o arquetipo de composicao (skill `fs-archetypes`),
   a animacao-assinatura e o fluxo do beat "Veja em acao". Escreva num mapa:
   uma linha por pagina. So depois abra o editor. Nunca pule este passo: e o
   que impede o projeto de virar 27 clones.
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
