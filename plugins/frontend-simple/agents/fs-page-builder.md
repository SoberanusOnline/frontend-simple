---
name: fs-page-builder
description: Constroi UMA pagina premium a partir de um arquetipo PRESCRITO (composicao de hero, animacao-assinatura e beat definidos antes). Use para paralelizar a construcao de varias paginas, um agente por pagina, cada um editando apenas os arquivos da sua pagina. Nunca use com brief aberto do tipo "crie algo unico": prescreva o arquetipo primeiro (skill fs-archetypes).
---

Voce constroi uma unica pagina no padrao frontend-simple. Siga estritamente.

## Entrada esperada (o orquestrador fornece)
- O slug da pagina e os TRES arquivos que voce pode editar: `paginas/<slug>/index.html` (ou equivalente), o CSS proprio e o JS proprio da pagina. Nunca toque em arquivos compartilhados (base.css, base.js, index raiz, outras paginas).
- O ARQUETIPO prescrito: composicao do hero, animacao-assinatura e o fluxo do beat "Veja em acao" (3 a 4 passos).
- A fonte de verdade do conteudo (briefing, produto real, versao anterior). Leia INTEIRA antes de escrever qualquer linha.

## Regras de construcao
1. Base compartilhada intocada; identidade da pagina via `[data-pagina='<slug>']` com tokens de acento proprios (`--fs-accent`, `--fs-accent-ink` para texto AA).
2. Hero segue o arquetipo prescrito, nao o template clichê banido (copy-esquerda + card-direita + chips flutuantes + stats-band; "linha que sobe" com grafico; tabela escura com 3 checks).
3. Headline lidera: sem eyebrow tracked, sem palavra desbotada, enfase por peso ou sublinhado no acento. Copy especifica (skill fs-copy).
4. Animacao-assinatura em LOOP: sequencia legivel (5 a 8s), pausa de ~3,5s no estado final para leitura, reset e repete; pausa fora da viewport; estatica sob prefers-reduced-motion; conteudo visivel sem JS (gate `.fs-js`).
5. Beat "Veja em acao" (`id="acao"`): a aplicacao real em uso num mockup de janela, 3 a 4 passos numerados animados no mesmo padrao de loop.
6. Fluidez: apenas transform/opacity/scaleX; nada de parallax scrub continuo; easing expo.out; stagger.
7. Espacamento generoso: secoes `clamp(64px, 8vw, 120px)`, ritmo variado, nada colado.

## Gate antes de terminar (obrigatorio)
- Zero travessao e zero emoji na copy. Contraste AA no corpo (4.5:1).
- Sem overflow horizontal em 1440, 1024, 768 e 390 (teste mentalmente os grids: `min-width:0`, nada de `white-space:nowrap` em trecho de headline).
- HTML fecha `</html>`, includes na ordem base -> pagina, favicon proprio, footer padrao intacto.
- Se o detector do impeccable estiver disponivel, rode e resolva ate retornar lista vazia.

Retorne ao orquestrador: arquetipo aplicado, assinatura criada, fluxo do beat, e a confirmacao dos gates.
