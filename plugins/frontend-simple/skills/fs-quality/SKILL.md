---
name: fs-quality
description: Os 6 gates de qualidade do kit frontend-simple (detector, alinhamento, overflow, contraste AA, links 200, screenshot) e o padrão de imagens e marca. Usar antes de declarar qualquer página pronta e ao produzir assets visuais da página.
---

# Qualidade: os gates antes de entregar

Nenhuma página é declarada pronta sem passar por estes 6 gates, na ordem. Todos vêm de
defeitos REAIS que escaparam em um lote de 27 páginas e custaram rodadas de correção.
O gate não é burocracia: é o que separa "parece pronto" de "está pronto".

## Gate 1: detector do impeccable (se o plugin estiver presente)

```bash
node <impeccable>/scripts/detect.mjs --json paginas/<slug>/index.html assets/css/pagina-<slug>.css
# saída obrigatória: []
```

O que ele pega (e que é proibido no padrão): gradient-text (background-clip:text),
side-stripe > 1px, glassmorphism como estética base, eyebrow tracked em toda seção,
scaffolding numerado 01/02/03 decorando seções, texto vazando o container.

CUIDADO com o falso-positivo do scaffolding numerado: horários (06h01, 06h03...) e
sequências de datas podem casar o padrão; variar os valores dos exemplos
(06h01, 06h12, 15h42) resolve. Se o detector apontar, corrija a causa, não o sintoma,
e rode de novo até `[]`.

## Gate 2: checklist de ALINHAMENTO (os "tortos" reais)

Cada item abaixo aconteceu de verdade. Verifique um a um:

- **Headline com span nowrap vazando a coluna**: nunca `white-space:nowrap` em trecho de
  headline (em 1024px o trecho estoura a coluna). Ênfase sublinhada via `box-shadow`
  inset ou `text-decoration`, NUNCA um `::after` posicionado absoluto (desalinha ao
  quebrar linha).
- **Colisão de classe compartilhada**: uma classe criada para um contexto (ex.: pill
  `.st` com nowrap) reusada como bloco de texto em outro lugar herda o nowrap e vaza.
  Prefixe as classes da página e não reutilize classe utilitária para papel diferente.
- **Card flutuando com vazio**: em grid de cards com alturas diferentes, use
  `align-items:stretch` e dê ao rodapé do card conteúdo real (link, tag, dado).
- **Timeline com marcadores fora do eixo**: rótulo, eixo e marcador precisam compartilhar
  a MESMA coordenada X (mesmo grid-template, marcador centrado na linha com transform).
  Conferir no screenshot, não no código.
- **SVG preso em `fill-opacity:0`**: animação GSAP com `immediateRender` deixou um mapa
  invisível quando a timeline não rodou. Regra: o CSS é a fonte da verdade do estado
  final visível; o JS só REALÇA (todo estado inicial oculto fica atrás do gate `fs-gsap`).

## Gate 3: varredura de overflow (1440 / 1024 / 768 / 390)

Em cada largura, no console (ou via evaluate do MCP de browser):

```js
// overflow global
document.documentElement.scrollWidth > window.innerWidth   // tem que ser false

// quem está vazando
[...document.querySelectorAll('*')].filter(el => {
  const r = el.getBoundingClientRect();
  return r.right > window.innerWidth + 1 || r.left < -1;
}).map(el => el.className)
```

Causas típicas: filho de grid sem `min-width:0`, imagem sem `max-width:100%`, valor mono
longo sem `overflow-wrap`. Um `overflow-x:hidden` no body MASCARA o bug em vez de
resolver: a varredura precisa passar sem depender dele.

## Gate 4: contraste AA

- Corpo de texto: 4.5:1 contra o fundo. Texto grande (>= 24px ou 19px bold): 3:1.
- Texto no acento usa `--fs-accent-ink` (claro) / `--fs-accent-on-dark` (escuro),
  nunca `--fs-accent` cru (ver a skill fs-design-system).
- Pontos de risco: texto sobre o fundo atmosférico do hero (precisa de wash/scrim),
  labels dentro do mockup do beat, cinzas terciários sobre fundo `g10`.

## Gate 5: links e imagens 200

Varra todas as refs do HTML (`href`, `src`) e teste contra o servidor local de preview:

```bash
grep -oE '(href|src)="[^"]+"' paginas/<slug>/index.html | cut -d'"' -f2 | sort -u |
  grep -v '^#\|^mailto:\|^http' | while read p; do
    curl -s -o /dev/null -w "%{http_code} $p\n" "http://127.0.0.1:8791$p"
  done | grep -v ^200
```

Âncoras internas (`#secao`) precisam de um `id` existente. Zero 404, zero âncora morta.

## Gate 6: verificação por screenshot ANTES de mostrar

1. Screenshot em 1440 e em 390 (Chrome `--headless=new --screenshot` quando não houver
   MCP de browser).
2. Olhar de verdade: hero + 2-3 seções do meio + footer, nas duas larguras.
3. Procurar: torto, cortado, flutuando, colado, seção em branco (reveal sem gate),
   imagem esticada, texto sobre imagem ilegível.
4. Corrigir e REPETIR o screenshot. Só mostrar ao usuário o que você já viu correto.

## Estrutura mínima que o gate também confere

- HTML fecha `</html>`; includes na ordem `fonts -> tema -> base -> pagina-<slug>`.
- `data-pagina` no body; favicon próprio; footer com link de volta ao hub e disclaimer.
- `node --check assets/js/pagina-<slug>.js` sem erro.
- Sem travessão e sem emoji em NENHUM texto da página (grep antes de entregar):

```bash
grep -nP '\x{2014}|\x{2013}|[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' paginas/<slug>/index.html
# saída obrigatória: vazia
```

## Imagens e marca

Página só de vetor parece maquete. O padrão exige marca aplicada com rigor, um conjunto
mínimo de imagens geradas por IA por página e uma banda de logos com alturas ópticas.
Tudo auto-hospedado e otimizado.

- **Favicon POR PÁGINA**: SVG de quadrado chapado na cor do acento + glifo branco (o mark
  simplificado). `<link rel="icon" type="image/svg+xml" href="/assets/img/favicon-<slug>.svg">`.
- **Nav e footer**: mark (símbolo) + wordmark TRIMADO (sem padding embutido no arquivo).
  Em páginas de produto, o mark do produto (SVG próprio, 32px na nav) + nome em texto.
- **Watermark opcional**: o token `--fs-wm` guarda a URL do mark para uso decorativo em
  opacidade baixa (~.06). Nunca como conteúdo.

Imagens geradas por IA, mínimo por página:

1. **Fundo atmosférico do hero**: abstrato, na cor do acento, SEM texto (ex.: mesa de
   plantão noturno em âmbar atrás de um feed de publicações).
2. **3 retratos** para depoimentos: pessoas profissionais, fundo neutro desfocado.
   O prompt DEVE incluir `"no flag, no coat of arms, no insignia, no text"`. Se aparecer
   qualquer brasão, bandeira ou insígnia real, REGENERE: símbolo oficial real em página
   de demo é risco institucional.
3. **1 imagem de contexto** própria do produto (o documento, a rua, o prédio, a mesa).

Higiene de `<img>`: `width`/`height` SEMPRE (evita CLS), `loading="lazy"` abaixo da dobra,
`alt` descritivo real ou `alt=""` + `aria-hidden` se decorativa. Pesos-alvo: retratos
~30KB (exibição 52-100px), heros e contexto ~100-150KB. Nada de PNG de 2MB, nada de
hotlink externo.

Banda de logos (parceiros/infra): grid de células IGUAIS com divisórias de 1px feitas pelo
gap sobre fundo `--fs-line` (`gap:1px; background:var(--fs-line); border:1px solid
var(--fs-line)`), cantos arredondados no CONTAINER com `overflow:hidden`, células com
`min-height:116px`. **Alturas ópticas PRÓPRIAS por logo, nunca altura única**: um logo
compacto/quadrado precisa de altura maior (ex.: 60px) para pesar o mesmo que um wordmark
largo (22px ou 20px). Calibre logo a logo até a banda equilibrar a olho; `max-width` por
célula (ex.: 150px) para nenhum logo encostar ou cortar.
