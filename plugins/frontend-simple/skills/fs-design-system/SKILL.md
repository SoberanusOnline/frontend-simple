---
name: fs-design-system
description: Arquitetura CSS em 3 camadas do kit frontend-simple, com tokens --fs-*, regra AA do acento, cadeia de includes, nav, footer, ritmo de espaçamento e os 3 temas. Usar ao montar a estrutura de qualquer página nova ou ao definir tema e cor de acento.
---

# Design system: base + camada de marca + camada da página

O kit é uma arquitetura de 3 camadas. A base e a camada de marca são compartilhadas e
intocáveis pelos agentes de página; toda a identidade individual vive na camada da página,
escopada pelo atributo `data-pagina`.

## Camada 1: base

- **Tipografia:** uma família sans para texto e headings, uma mono para labels, números e
  kickers. Self-hosted via `fonts.css`. Números sempre com `font-variant-numeric: tabular-nums`.
- **Geometria e neutros:** definidos pelo TEMA escolhido (ver seção Temas). No tema
  enterprise-sharp: cantos retos (`border-radius:0` em botões, cards, inputs), linhas de
  1px, escala cool-gray com ink `#161616`, secundário `#525252`, linha `#e0e0e0`,
  layer `#f4f4f4`.
- **Bandas claro/escuro:** a página alterna seções brancas, seções `g10` (fundo `#f4f4f4`)
  e bandas escuras `g100` (fundo `#161616`) / `g90` (`#262626`). Nas bandas escuras as
  variáveis locais invertem (ink vira `#f4f4f4`, o texto de acento vira `--fs-accent-on-dark`).

## Camada 2: marca (base.css, compartilhado)

Carrega DEPOIS do tema. Contém: tokens, reset, tipografia de display, nav, footer, botões,
sistema de reveal (`.rv/.rv-line/.rv-lift/.rv-scale` gated por `html.fs-js`), sombras
(`--fs-shadow-1..3`), easings (`--fs-ease` produtivo `cubic-bezier(.2,0,.38,.9)` e
`--fs-ease-in` de entrada `cubic-bezier(0,0,.3,1)`). NENHUM agente de página edita este arquivo.

## Camada 3: página (pagina-<slug>.css + pagina-<slug>.js)

Todo CSS da página é escopado para não vazar:

```css
[data-pagina='monitor'] .mo-hero { ... }
```

O `<body>` declara `data-pagina="<slug>"`. Prefixe as classes da página com 2 letras do
slug (`.mo-` em "monitor", `.ca-` em "cadeia") para evitar colisão com classes compartilhadas.

## Cadeia de includes (ordem obrigatória)

```html
<link rel="stylesheet" href="/assets/css/fonts.css">
<link rel="stylesheet" href="/assets/css/tema.css">
<link rel="stylesheet" href="/assets/css/base.css">
<link rel="stylesheet" href="/assets/css/pagina-<slug>.css">
...
<script src="/assets/js/base.js" defer></script>
<script src="/assets/js/vendor/gsap.min.js" defer></script>
<script src="/assets/js/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/js/pagina-<slug>.js" defer></script>
```

## Tokens de acento (a única fonte de verdade da cor)

Cada página define seu acento SÓ via tokens `--fs-*` no seletor `[data-pagina]`.
Nunca hardcode a cor no CSS da página fora deste bloco, nunca sobrescreva variáveis
internas do tema.

```css
[data-pagina='auditor']{
  --fs-accent:#e8a317;          /* preenchimentos, gráficos, barras, fios */
  --fs-accent-strong:#b9770a;   /* bordas e realces, hover do botão primário */
  --fs-accent-ink:#8a5d06;      /* TEXTO no acento sobre fundo claro (passa AA) */
  --fs-accent-on-dark:#f6c25a;  /* texto/foco do acento sobre g90/g100 (AA sobre #161616) */
  --fs-accent-soft:#fbf3e2;     /* wash claro, fundos de chip */
}
```

Tokens derivados que o base.css resolve sozinho:

- `--fs-text-accent`: alias que aponta para `--fs-accent-ink` no claro e vira
  `--fs-accent-on-dark` dentro das bandas escuras. Use ESTE para texto acentuado,
  nunca escolha manualmente.
- `--fs-wm`: URL da marca da página para watermarks decorativos (opacidade baixa).

Regras de uso do acento:

- Texto pequeno colorido usa `--fs-text-accent`, NUNCA `--fs-accent` cru: acentos claros
  (ouro, ciano) não passam AA como texto sobre branco.
- Botão primário: fundo `--fs-accent`; se o acento é claro, o texto do botão vira `#161616`.
  Confira o contraste do par.
- O acento aparece em poucos pontos de alto valor: fio `border-top:3px` no objeto-herói,
  o dado que importa, o estado de alerta. Página encharcada de acento perde a hierarquia.

## Nav premium (compartilhada)

- Altura 72px, sticky com blur leve e borda inferior que só aparece após rolar.
- Marca: mark de 32px + nome em 1.24rem/600. Na home, mark + wordmark em imagem.
- Links: .9rem, peso 500, com respiro (gap 28px), sublinhado de acento em hover e
  `aria-current` na seção ativa. Grid `1fr auto 1fr`: marca à esquerda, menu centrado,
  CTAs à direita (1 ghost + 1 primário, ambos `btn-sm`).
- Barra de progresso de scroll de 2px na base da nav, na cor do acento.

## Footer padrão (compartilhado)

Bloco de marca (mark + nome + parágrafo de 1 frase + sociais) e 4 colunas de links, por
exemplo: PRODUTO / EMPRESA / RECURSOS / PADRÕES (a quarta coluna lista as normas do
domínio, ex.: LAI 12.527, LGPD 13.709, linkando as seções que as citam). Abaixo, a faixa
institucional com link de volta ao hub/portfólio e o disclaimer em `.foot-note` (cenários
ilustrativos e anonimizados). Títulos de coluna em mono uppercase .72rem. Nunca ícones
genéricos gigantes no footer.

## Espaçamento e ritmo

- Seção padrão: `padding: clamp(72px, 10vw, 144px) 0` (na faixa de 64 a 144px; nunca menos
  que 64px de respiro vertical entre blocos).
- `head` da seção (h2 + lead): `margin-bottom: clamp(40px, 5vw, 64px)`.
- Container: `max-width: 1200px`, padding lateral 24px.
- **Ritmo VARIADO**: alterne seção larga, faixa estreita de prova, banda escura, seção com
  fundo `g10`. Uma página onde todas as seções têm a mesma altura e o mesmo padding lê como
  template. O que NUNCA pode: "tudo colado" (seções sem respiro entre si) ou linhas-fantasma
  (pseudo-elementos de grade vazando no topo das seções).

## Superfícies e profundidade

- Cards assentam em sombra tingida de neutro (`--fs-shadow-1`), sobem 3px no hover com
  borda de acento. Em seções `g10`, o card é branco (a borda vira recorte natural).
- Bandas escuras ganham gradiente sutil, grão SVG a 4.5% e fio de 2px de
  `--fs-accent-on-dark` no topo. Nada de glassmorphism como default.
- Grade de 12 colunas de 1px atrás do hero, mascarada em radial, estática.

## Temas

O kit traz 3 temas prontos (arquivos em `templates/themes/` da skill fs-build); o `tema.css`
da cadeia de includes aponta para o escolhido:

- **enterprise-sharp**: cantos retos, tipografia estilo Plex (sans + mono), escala
  cool-gray, densidade de painel. Inspirado na estética do Carbon Design System, mas o
  design system do kit é próprio (tokens `--fs-*`). É o tema default para produto B2B/B2G.
- **editorial**: serif de display usada com propósito (headlines e números de destaque),
  layout em colunas, hairlines finas, mais respiro. Para conteúdo, relatórios, marcas
  de autoridade.
- **dark-tech**: fundo quase-preto como superfície principal, mono em evidência, acento
  elétrico de alto croma. Para produto técnico, developer tools, segurança.

O tema define geometria, neutros e tipografia; o acento continua vindo dos tokens
`--fs-*` da página. Trocar de tema nunca deve exigir tocar no CSS das páginas.

## CSS moderno e organizado (2026)

**Arquitetura @layer.** Declare a ordem das camadas uma vez; utilitário vence componente
sem hack de especificidade, sem `!important`:

```css
@layer reset, base, componentes, utilidades;

@layer componentes{ .card{ padding: 32px } }
@layer utilidades{ .p-0{ padding: 0 } }   /* vence .card mesmo com seletor mais fraco */
```

**Container queries.** Componente que se adapta ao CONTAINER (card, painel), não à
viewport. A regra: o pai anuncia `container-type` (senão a query nunca dispara):

```css
.grid-cards{ container-type: inline-size }
@container (max-width: 420px){
  .card{ grid-template-columns: 1fr; gap: 16px }
}
```

**OKLCH nos tokens de cor.** Interpolação natural (sem cinza morto no meio do gradiente)
e lightness intuitiva: mudar L mantém o croma percebido. Sempre com fallback:

```css
[data-pagina='auditor']{
  --fs-accent: #e8a317;                    /* fallback */
  --fs-accent: oklch(0.75 0.15 80);        /* mesma cor, editável por L/C/H */
}
```

**Fluidez e temas honestos.** Tipos e espaçamentos com `clamp()` (nunca breakpoint duro
para tamanho de texto). Tema claro/escuro de verdade: `color-scheme: light dark` no root
(formulários e scrollbars nativos acompanham) + `@media (prefers-color-scheme: dark)`
trocando SÓ tokens, nunca regras espalhadas.

**Organização de arquivos.** `base.css` (tokens + layout + componentes compartilhados),
`tema.css` (tokens do tema), `pagina-<slug>.css` (só o que é daquela página). Comentários
de seção numerados (`/* 3. HERO */`) para navegação rápida. Nada de CSS morto: regra que
não casa com nenhum elemento sai no mesmo commit.

**JS organizado.** Módulos pequenos por responsabilidade (um arquivo = um comportamento),
zero framework por default: HTML completo primeiro, JS como progressive enhancement.
Event delegation no container em vez de N listeners por item; nenhum listener global
(scroll, resize) sem necessidade comprovada. Todo comportamento que esconde ou move
conteúdo fica atrás do gate `.fs-js` (ver fs-motion).
