---
name: fs-motion
description: Os 6 padrões de motion do kit frontend-simple: loop com pausa de leitura, pausa fora da viewport, fluidez sem scrub, reveal blindado, vendor self-hosted e counters. Usar sempre que for animar hero, beat ou qualquer seção com GSAP ou vanilla JS.
---

# Motion: loop com pausa, fluidez e reveal blindado

O motion do kit tem um objetivo: dar vida ao instrumento sem custar FPS nem acessibilidade.
Efeito premium vem de timing e easing, nunca de peso. Estes são os 6 padrões obrigatórios,
com os trechos de código de referência.

## (a) Animação-assinatura em LOOP com pausa de leitura

A assinatura do hero (e o beat "Veja em ação") roda assim: toca a sequência (5-8s, legível)
-> segura no estado final ~3,5s para o usuário LER -> reseta limpo -> repete. Uma timeline
GSAP única:

```js
var HOLD = 3.5;
var tl = gsap.timeline({ paused:true, repeat:-1, repeatDelay:HOLD,
                         defaults:{ ease:'expo.out' } });

// SEMPRE fromTo, nunca from(): estados explícitos garantem reset determinístico
// a cada volta do loop (um from() leria o estado corrente, que muda entre voltas)
tl.fromTo(rows, { opacity:0, y:-14 }, { opacity:1, y:0, duration:.5, stagger:.13 }, .12)
  .fromTo(alertRow, { scale:1.018 },
          { scale:1, duration:.5, ease:'back.out(2.2)', transformOrigin:'left center' }, at);
tl.play();
```

Fallback sem GSAP (vanilla, troca de classes + setTimeout recursivo):

```js
function cycle(){
  if(!visible){ running = false; return; }
  running = true;
  rows.forEach(function(r){ r.classList.remove('in','fired'); });  // reset
  rows.forEach(function(row, i){
    timers.push(setTimeout(function(){ row.classList.add('in'); }, STEP * i));
  });
  timers.push(setTimeout(cycle, STEP * rows.length + TAIL + HOLD_MS)); // toca -> segura -> repete
}
```

## (b) Pausa fora da viewport

O loop só corre com a seção visível (economiza FPS no scroll). Com ScrollTrigger:

```js
ScrollTrigger.create({
  trigger:'.mo-hero', start:'top bottom', end:'bottom top',
  onToggle:function(self){ self.isActive ? tl.play() : tl.pause(); }
});
```

Sem GSAP, IntersectionObserver com o mesmo contrato:

```js
new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){ visible = true; start(); }
    else { visible = false; stop(); }   // stop() limpa TODOS os timers
  });
}, { threshold: 0.3 }).observe(feed);
```

## (c) Fluidez acima de tudo

- Anime SÓ `transform` e `opacity` (e `scaleX` para barras via transform). Nada de animar
  width/height/top/left, nada de box-shadow pesado em elementos grandes.
- **NUNCA parallax com scrub contínuo**: repinta a primeira dobra a cada frame e trava o
  scroll (jank grave em Safari). Em projeto real, parallax, tilt 3D, smooth-scroll por rAF
  e glow de cursor foram DESATIVADOS por causarem exatamente isso.
- O premium vem do timing: `expo.out` nas entradas, stagger de .08-.13s entre irmãos,
  micro-pop `back.out(2)` no elemento que "assenta" (selo, status, carimbo).
- Meta: 60fps, zero jank. Se um efeito exige escolher entre bonito e fluido, fluido vence.
- Counters e barras usam o easing produtivo `cubic-bezier(.2,0,.38,.9)`.

## (d) Reveal blindado (conteúdo visível sem JS)

O CSS só pode esconder conteúdo SOB a classe `html.fs-js`, que o próprio JS adiciona.
Se o JS não carregar, nada fica invisível. Sob `prefers-reduced-motion`, tudo estático
no estado final:

```js
/* primeira linha do JS compartilhado */
document.documentElement.classList.add('fs-js');
```

```css
/* estado oculto SÓ com o gate ativo */
.fs-js .rv{ opacity:0; transform:translateY(16px);
  transition:opacity .6s cubic-bezier(.2,0,.38,.9), transform .6s cubic-bezier(.2,0,.38,.9) }
.rv.in{ opacity:1; transform:none }

@media (prefers-reduced-motion:reduce){
  .rv{ opacity:1!important; transform:none!important; transition:none!important }
}
```

Para animações GSAP, o gate é mais estrito: use uma classe `fs-gsap` que só entra quando
o GSAP carregou E reduced-motion está off. O CSS da página só esconde passos sob
`html.fs-gsap`. Sem JS, sem GSAP ou sob reduce, o estado FINAL fica visível (nunca uma
seção em branco):

```js
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(RM || !window.gsap || !window.ScrollTrigger){ fallbackLeve(); return; }
gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add('fs-gsap');
```

Vocabulário de reveal disponível na base: `.rv` (fade+lift), `.rv-line` (linha sobe por
overflow hidden), `.rv-lift` (stagger por `--i`), `.rv-scale`, `.rule-accent` (fio que
desenha). O JS compartilhado adiciona `.in` via IntersectionObserver.

## (e) Libs self-hosted, nunca CDN em runtime

GSAP e ScrollTrigger vivem em `assets/js/vendor/gsap.min.js` e
`assets/js/vendor/ScrollTrigger.min.js` (baixados com curl no build, referenciados locais).
CDN em runtime = página quebra offline ou em rede restrita (órgão público, intranet
corporativa) e fere o gate. Vale para qualquer lib de motion adicional (anime.js etc.).

## (f) Counters: nunca partem de 0

O valor final está SEMPRE no HTML (SEO, no-JS, reduced-motion). A animação só decide
QUANDO rodar e parte de ~90% do valor, nunca de 0 (contar de 0 a 4.812 é ruído; de 4.330
a 4.812 é vida):

```js
var to = parseFloat(el.getAttribute('data-count-to'));   // 4812; o HTML já mostra 4.812
var from = Math.round(to * 0.9);
/* easing cúbico out, ~850ms, dispara via IntersectionObserver threshold .6 */
if(RM){ el.textContent = fmt(to); return; }
```

## Checklist de motion por página

- [ ] Assinatura em loop: toca -> segura ~3,5s -> reseta -> repete.
- [ ] Loop pausa fora da viewport (ScrollTrigger onToggle ou IO).
- [ ] Só transform/opacity; nenhum scrub contínuo; easings expo.out / produtivo.
- [ ] `fs-js`/`fs-gsap` como único gate de ocultação; sem JS a página é completa.
- [ ] `prefers-reduced-motion: reduce` = tudo estático no estado final.
- [ ] GSAP/ScrollTrigger self-hosted em `assets/js/vendor/`.
- [ ] Counters partem de ~90%, valor final no HTML.
- [ ] `window.addEventListener('load', function(){ ScrollTrigger.refresh(); })` após
      imagens assentarem.
