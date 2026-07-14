/* ============================================================================
   STARTER frontend-simple · base.js
   Vanilla, sem dependências. Três responsabilidades:
   1. gate .fs-js no <html>: sem JS o conteúdo fica 100% visível;
   2. reveal por IntersectionObserver, com fallback que revela tudo;
   3. fsLoop(fn, opts): animação-assinatura em loop com pausa, que para
      quando o alvo sai da viewport e vira estado final sob reduced-motion.
   ============================================================================ */
(function(){
  'use strict';

  /* 1) Gate: só depois desta classe o CSS pode esconder os .rv.
     Se este arquivo não carregar, a página degrada para estática e legível. */
  document.documentElement.classList.add('fs-js');

  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var $$ = function(s, c){ return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* 2) Reveal: adiciona .in quando o elemento entra na viewport.
     Fallback (reduced-motion ou sem IO): revela tudo imediatamente. */
  var revs = $$('.rv');
  if (RM || !hasIO) {
    revs.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    revs.forEach(function(el){ io.observe(el); });
  }

  /* Nav: borda inferior aparece ao rolar */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* 3) fsLoop: roda fn em loop com pausa (setTimeout recursivo).
     opts = { dur: duração da animação em ms,
              hold: pausa entre ciclos em ms,
              target: elemento observado; fora da viewport o loop pausa }.
     Sob reduced-motion não há loop: fn(true) aplica o estado final e sai. */
  function fsLoop(fn, opts){
    opts = opts || {};
    var dur = opts.dur || 1800;
    var hold = opts.hold || 2600;
    var target = opts.target || null;

    if (RM) { fn(true); return; }

    var timer = null;
    var visivel = !target; /* sem alvo, roda sempre */

    function ciclo(){
      fn(false);
      timer = setTimeout(function(){
        timer = null;
        if (visivel) ciclo();
      }, dur + hold);
    }

    if (target && hasIO) {
      var vio = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          visivel = en.isIntersecting;
          if (visivel && !timer) ciclo();               /* voltou: retoma */
          if (!visivel && timer) { clearTimeout(timer); timer = null; } /* saiu: pausa */
        });
      }, { threshold: .25 });
      vio.observe(target);
    } else {
      ciclo();
    }
  }

  /* Reinicia um ciclo de classe .play: tira a classe (as barras colapsam
     rápido via CSS) e devolve depois de um respiro, para a cascata repetir. */
  function replay(el){
    el.classList.remove('play');
    setTimeout(function(){ el.classList.add('play'); }, 260);
  }

  /* 4a) Assinatura do hero: as barras do card-instrumento preenchem em cascata */
  var inst = document.getElementById('instrumento');
  if (inst) {
    fsLoop(function(final){
      if (final) { inst.classList.add('play'); return; } /* reduced-motion: estado final */
      replay(inst);
    }, { dur: 1700, hold: 2800, target: inst });
  }

  /* 4b) Beat "Veja em ação": os 3 passos acendem em sequência, pausa de 3,5 s */
  var app = document.getElementById('app-acao');
  if (app) {
    fsLoop(function(final){
      if (final) { app.classList.add('play'); return; }
      replay(app);
    }, { dur: 2900, hold: 3500, target: app });
  }
})();
