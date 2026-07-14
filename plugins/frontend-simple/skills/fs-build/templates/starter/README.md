# Starter frontend-simple · esqueleto de LP premium

Esqueleto funcional do padrão frontend-simple de landing pages. Abre no navegador e já
parece premium: copie a pasta, troque a marca e os tokens, e construa por cima.

## Como usar

1. Copie a pasta `starter/` inteira para o diretório do seu projeto.
2. Rode o servidor local (sem cache, para nunca ver versão velha):

   ```bash
   python3 _serve.py
   ```

3. Abra `127.0.0.1:8791` no navegador.
4. Troque a marca: mark SVG e wordmark na nav e no footer do `index.html`
   (os pontos de troca estão marcados com comentários `TROCAR:`).
5. Troque os tokens de acento em `assets/css/base.css` (`--fs-accent`,
   `--fs-accent-ink`, `--fs-accent-strong`, `--fs-accent-soft`). Os neutros
   cool-gray normalmente ficam como estão.
6. Reescreva a copy: kicker, headline (ênfase com `em.u`, sublinhado no
   acento), lead, garantia, recursos, passos do beat e footer.
7. Para páginas novas: crie outro html, marque o `<body>` com
   `data-pagina="nome"` e adicione CSS/JS próprios da página em arquivos
   separados (`assets/css/nome.css`, `assets/js/nome.js`), sempre carregados
   DEPOIS de `base.css`/`base.js`. O base é a fundação; a personalidade de
   cada página mora no arquivo dela.

## Estrutura

```
starter/
  index.html          pagina exemplo completa (nav, hero, recursos, beat, footer)
  assets/
    css/base.css      tokens --fs-*, reset, tipografia, nav, botoes, reveal, beat
    js/base.js        gate .fs-js, reveal por IntersectionObserver, fsLoop()
  _serve.py           servidor local na 8791 com Cache-Control: no-store
  README.md           este arquivo
```

Sem dependências externas: nenhum CDN, fonte via pilha de sistema. Para usar
IBM Plex, self-hoste os woff2 em `assets/fonts/` e declare os `@font-face`
no topo do `base.css` (instrução no próprio arquivo).

## As 3 regras inegociáveis

1. **Arquétipo por página.** Cada LP tem um objeto-herói e uma
   animação-assinatura próprios. O starter traz um exemplo (card de índice);
   não repita o mesmo arquétipo em todas as páginas.
2. **Conteúdo visível sem JS.** Todo efeito fica atrás do gate `.fs-js` no
   `<html>` e respeita `prefers-reduced-motion`. Se o JS falhar, a página
   degrada para estática e 100% legível. Nunca esconda conteúdo por padrão.
3. **Verificar por screenshot antes de entregar.** Renderize a página em
   desktop (1440) e mobile (390) e olhe a imagem: alinhamento, overflow,
   corte, contraste. O que não foi visto não está pronto.
