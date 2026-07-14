---
name: fs-text-fx
description: Animacao de entrada da pagina (primeira dobra) e efeitos de texto (reveals, contadores, sublinhados, scramble) com snippets leves. Usar ao animar chegada da pagina, headlines e numeros.
---

# Entrada da página e efeitos de texto

Duas responsabilidades: a chegada orquestrada da primeira dobra no load e o vocabulário
de efeitos de texto do kit. Tudo atrás do gate `html.fs-js` (estado oculto SÓ sob a classe
que o JS adiciona), fallback estático visível sob `prefers-reduced-motion`, transform/opacity only.

## A) Entrada da página (a tela de entrada)

A primeira dobra chega em sequência orquestrada, na ordem de leitura: kicker -> headline
(por linha) -> lead -> CTAs -> objeto-herói. 400 a 900ms no total, easing `expo.out` /
`--fs-ease-in`, stagger de 60 a 90ms entre passos.

Regra número um: a página NUNCA fica branca esperando JS. Conteúdo visível é o
default; a animação só realça, e só existe sob `.fs-js`:

```css
.fs-js .hero [data-entra]{
  opacity:0; transform:translateY(14px);
  transition:opacity .55s var(--fs-ease-in), transform .55s var(--fs-ease-in);
  transition-delay:calc(var(--i, 0) * 75ms);
}
.fs-js .is-loaded .hero [data-entra]{ opacity:1; transform:none }
@media (prefers-reduced-motion:reduce){ .hero [data-entra]{
  opacity:1!important; transform:none!important; transition:none!important } }
```

```html
<p class="kicker" data-entra style="--i:0">Plataforma</p>
<h1 data-entra style="--i:1">Headline da página</h1>
<!-- lead com --i:2, CTAs com --i:3, objeto-herói com --i:4 -->
```

```js
/* base.js já fez: document.documentElement.classList.add('fs-js') */
window.addEventListener('load', function(){
  requestAnimationFrame(function(){ document.body.classList.add('is-loaded'); });
});
```

Preloaders: quase sempre NÃO (splash de logo é atraso disfarçado de capricho). Exceção
rara, site pesado de mídia: máximo 800ms, uma vez por sessão (`sessionStorage`), com
botão de pular e o conteúdo por baixo já renderizado.

Transição entre páginas: View Transitions API (`@view-transition{ navigation:auto }`),
que degrada sozinha para navegação normal. Receita e regras na skill fs-motion.

## B) Efeitos de texto

### 1. Split-line reveal

Quando usar: headline do hero ou de seção-chave, 2 a 4 linhas. As linhas sobem de trás
de uma máscara de overflow. Sem lib: mede as linhas com spans por palavra e agrupa:

```js
function splitLines(el){
  var palavras = el.textContent.trim().split(/\s+/); el.textContent = '';
  var spans = palavras.map(function(p){ var s = document.createElement('span');
    s.textContent = p + ' '; s.style.display = 'inline-block'; el.appendChild(s); return s; });
  var linhas = [], topo = null;
  spans.forEach(function(s){
    if(s.offsetTop !== topo){ topo = s.offsetTop; linhas.push([]); }
    linhas[linhas.length - 1].push(s);
  });
  el.textContent = '';
  linhas.forEach(function(l, i){
    var wrap = document.createElement('span'); wrap.className = 'sl-mask';
    var inner = document.createElement('span'); inner.className = 'sl-linha';
    inner.style.setProperty('--i', i); inner.textContent = l.map(function(s){ return s.textContent; }).join('');
    wrap.appendChild(inner); el.appendChild(wrap);
  });
}
```

```css
.sl-mask{ display:block; overflow:hidden }
.fs-js .sl-linha{ display:block; transform:translateY(110%);
  transition:transform .7s cubic-bezier(.16,1,.3,1) calc(var(--i) * 80ms) }
.fs-js .is-loaded .sl-linha{ transform:none }
@media (prefers-reduced-motion:reduce){ .sl-linha{ transform:none!important; transition:none!important } }
```

Erro comum: não refazer o split no resize; se a headline requebra, re-splite com debounce.

### 2. Word stagger

Quando usar: só em headline CURTA (até 6 palavras). Cada palavra entra em sequência:

```js
el.innerHTML = el.textContent.trim().split(/\s+/).map(function(p, i){
  return '<span class="w-mask"><span class="w" style="--i:' + i + '">' + p + '</span></span> ';
}).join('');
```

```css
.w-mask{ display:inline-block; overflow:hidden; vertical-align:top }
.fs-js .w{ display:inline-block; transform:translateY(105%);
  transition:transform .55s cubic-bezier(.16,1,.3,1) calc(var(--i) * 65ms) }
.fs-js .is-loaded .w{ transform:none }
@media (prefers-reduced-motion:reduce){ .w{ transform:none!important; transition:none!important } }
```

Erro comum: aplicar em parágrafo ou headline longa: vira pipoca. Acima de 6 palavras, split-line.

### 3. Underline draw

Quando usar: enfatizar UMA palavra ou expressão da headline com sublinhado do acento:

```css
.fs-js .u-draw{ background:linear-gradient(var(--fs-accent), var(--fs-accent)) no-repeat left 92%;
  background-size:0% 3px; transition:background-size .6s var(--fs-ease) .35s }
/* sem JS ou sob reduce, o sublinhado JÁ está desenhado: */
.fs-js .is-loaded .u-draw, .fs-js .u-draw.in, html:not(.fs-js) .u-draw{ background-size:100% 3px }
@media (prefers-reduced-motion:reduce){ .u-draw{ background-size:100% 3px!important; transition:none!important } }
```

Erro comum: sublinhar a frase inteira. O draw enfatiza; ênfase em tudo é ênfase em nada.

### 4. Count-up de números

Quando usar: métricas e provas numéricas. Valor final SEMPRE no HTML (SEO, no-JS,
reduced-motion); parte de ~90% do valor, nunca de 0; `tabular-nums` para não tremer:

```html
<strong class="num" data-count-to="4812">4.812</strong>
```

```js
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el){
  var to = parseFloat(el.getAttribute('data-count-to'));
  if(RM || !isFinite(to)) return;                 /* HTML já mostra o final */
  var from = Math.round(to * 0.9), t0 = null, DUR = 850, fmt = new Intl.NumberFormat('pt-BR');
  function frame(t){
    if(!t0) t0 = t; var p = Math.min((t - t0) / DUR, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt.format(Math.round(from + (to - from) * e));
    if(p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
new IntersectionObserver(function(es, io){
  es.forEach(function(e){ if(e.isIntersecting){ countUp(e.target); io.unobserve(e.target); } });
}, { threshold:.6 }).observe(document.querySelector('.num'));
```

Erro comum: contar de 0. Justificativa e contrato completo na skill fs-motion (f).

### 5. Scramble / decrypt

Quando usar: valores técnicos (hash, ID, código); embaralha e assenta da esquerda. Só em mono:

```js
function scramble(el){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var alvo = el.getAttribute('data-scramble') || el.textContent;
  var GLYPHS = 'ABCDEF0123456789#:/', i = 0;
  el.setAttribute('aria-label', alvo);  /* leitor de tela lê o final */
  var timer = setInterval(function(){
    var out = alvo.slice(0, i);
    for(var j = i; j < alvo.length; j++)
      out += alvo[j] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    el.textContent = out;
    if(++i > alvo.length){ clearInterval(timer); el.textContent = alvo; }
  }, 34);
}
```

O HTML já contém o texto final; roda uma vez, ao entrar na viewport (IntersectionObserver).
Erro comum: scramble em prosa; o efeito é para DADO, não para texto de leitura.

### 6. Typewriter

QUASE SEMPRE EVITAR. Digitar letra a letra atrasa a leitura e envelheceu mal. Exceção
única: terminal/console de exemplo, onde digitação É o conteúdo. Nunca em headline, nunca
com cursor piscando. Texto completo no HTML, efeito sob `.fs-js`, reduce mostra tudo.

### 7. Marquee / ticker

Default: NÃO usar: texto que anda não se lê. Exceção rara editorial com três condições:
pausa em hover/focus, reduce desliga (lista estática) e cópia duplicada com `aria-hidden`:

```css
.fs-js .mq{ display:flex; overflow:hidden }
.fs-js .mq-trilho{ display:flex; gap:48px; flex-shrink:0; animation:mq 28s linear infinite }
.mq:hover .mq-trilho, .mq:focus-within .mq-trilho{ animation-play-state:paused }
@keyframes mq{ to{ transform:translateX(-100%) } }
@media (prefers-reduced-motion:reduce){ .mq-trilho{ animation:none } .mq{ flex-wrap:wrap } }
```

### 8. Highlight / marker sweep

Quando usar: uma palavra-chave que ganha fundo de marca-texto varrendo da esquerda:

```css
.hl{ --hl:color-mix(in oklab, var(--fs-accent) 26%, transparent) }
.fs-js .hl{ background:linear-gradient(var(--hl), var(--hl)) no-repeat left center;
  background-size:0% 46%; transition:background-size .5s var(--fs-ease) .5s }
.fs-js .is-loaded .hl, .fs-js .hl.in, html:not(.fs-js) .hl{ background-size:100% 46% }
@media (prefers-reduced-motion:reduce){ .hl{ background-size:100% 46%!important; transition:none!important } }
```

Confira AA sobre o marca-texto (o fundo real muda). Erro comum: mais de um highlight por dobra.

### 9. Gradient de posição em texto (anti-padrão)

PROIBIDO no kit. Gradient-text estático (`background-clip:text` com degradê roxo/azul)
é o tell de IA número um em headlines; a variação animada (background-position andando)
continua proibida: mesmo problema com movimento. Cor de texto vem de `--fs-text-accent`
chapado, em UMA palavra; destaque extra é tipografia (peso, tamanho, serif), nunca degradê.

## Regras de bom gosto

- 1 a 2 efeitos de texto por página, além da entrada. Cada efeito extra divide a atenção.
- O efeito segue o significado: número CONTA, hash EMBARALHA, ênfase SUBLINHA. Sem relação, é enfeite.
- Tudo pausável: reduced-motion zera para o estado final; nada roda fora da viewport (fs-motion b).
- Nada re-anima em scroll para cima; efeito de texto toca uma vez e assenta.
- Sem JS a página é completa: todo texto final vive no HTML, sempre.
