---
name: fs-typography
description: Como escolher, parear e servir fontes no kit frontend-simple: catálogo curado com licença livre, self-host de woff2 variable, escala fluida com clamp, features OpenType e hierarquia por peso. Usar ao escolher fontes de um projeto, quando a tipografia está genérica ou quando o usuário pede tipografia premium.
---

# Tipografia: a decisão que carrega 60% do design

Tipografia é 60% do design percebido. Antes de mexer em cor, sombra ou motion, decida as
fontes: uma página com pareamento intencional e escala afinada já parece desenhada. Inter
default sem decisão é o tell número 1 de site feito por IA. Se o projeto abrir com Inter
em tudo, pare e escolha de verdade.

## Como escolher: parear por eixo de contraste

O par funciona quando as famílias CONTRASTAM em um eixo claro, nunca quando são parecidas:

- **Serif de display + sans de corpo**: autoridade editorial. O serif aparece em headlines
  e números-herói; o sans carrega parágrafos e UI.
- **Geométrica + humanista**: a geométrica dá caráter no display, a humanista dá conforto
  de leitura no corpo.
- **Sans + mono técnica**: a mono marca kickers, labels, dados e código; o sans faz o resto.

Regra dura: NUNCA duas sans parecidas (ex.: Inter + Roboto). O olho não lê contraste, lê
inconsistência. Papéis fixos: display com personalidade usado com disciplina (headlines,
números de destaque, pull quotes); corpo neutro e legível; mono para dados, kickers e
metadados.

## Catálogo curado (licença livre, verificada)

Google Fonts, licença SIL OFL 1.1 (uso comercial ok):

- **Serif de display**: Instrument Serif (uma só weight, headline com voz editorial forte);
  Fraunces (variable com eixos SOFT/WONK, display expressivo e opinativo); Newsreader
  (texto longo e display em óptica variável, tom de revista); Source Serif 4 (serif de
  trabalho, corpo E display sóbrios); Lora (serif de corpo confortável, blogs e relatórios).
- **Sans com caráter**: Archivo (grotesk condensável, ótima em peso alto para display);
  Manrope (semi-geométrica limpa, corpo e UI de produto); Schibsted Grotesk (grotesk
  editorial com detalhes vivos no display); Space Grotesk (techy, par natural de mono, boa
  em kickers e headlines curtas); Sora (geométrica de tom futurista, marcas de tecnologia).
- **Mono**: IBM Plex Sans + IBM Plex Mono (superfamília coerente para produto enterprise);
  JetBrains Mono (código e dados com legibilidade máxima); Spline Sans Mono (mono de UI,
  menos "terminal", boa em labels).

Fontshare / Indian Type Foundry, ITF Free Font License (uso comercial ok):

- **Satoshi**: a "Inter com opinião", sans geométrica premium para corpo e display.
- **Clash Display**: display de alto impacto, headlines curtas em peso alto.
- **General Sans**: sans neutra e quente para corpo de produto.
- **Cabinet Grotesk**: grotesk com personalidade no display, alternativa a Archivo.

Avisos: SEMPRE verificar a licença do arquivo antes de embarcar no projeto (versões de
foundry e de agregador divergem). NUNCA hotlink de CDN (Google Fonts, Fontshare) em
produção: quebra offline e em rede restrita, vaza requisição de terceiros. Self-host sempre.

## Self-host correto

1. Baixar os `woff2` (preferir variable font quando existir: um arquivo, todos os pesos).
2. Declarar `@font-face` com `font-display: swap`.
3. `preload` SÓ da fonte de display (a que pinta o hero).
4. Subset se o arquivo passar de ~100 KB (latin costuma bastar).

```css
@font-face{
  font-family: 'Fraunces';
  src: url('/assets/fonts/fraunces-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

```html
<link rel="preload" href="/assets/fonts/fraunces-variable.woff2"
      as="font" type="font/woff2" crossorigin>
```

## Escala fluida com clamp()

Uma escala completa por página, com line-height e letter-spacing por nível:

```css
:root{
  --fs-display: clamp(2.6rem, 1.2rem + 5vw, 5.5rem);   /* lh 1.02, ls -0.03em */
  --fs-h1:      clamp(2.1rem, 1.3rem + 2.8vw, 3.4rem); /* lh 1.08, ls -0.02em */
  --fs-h2:      clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); /* lh 1.15, ls -0.015em */
  --fs-h3:      clamp(1.2rem, 1.05rem + .6vw, 1.45rem);/* lh 1.3,  ls -0.01em */
  --fs-lead:    clamp(1.1rem, 1rem + .5vw, 1.3rem);    /* lh 1.5,  ls 0 */
  --fs-body:    1rem;                                   /* lh 1.65, ls 0 */
  --fs-small:   .875rem;                                /* lh 1.5,  ls 0 */
  --fs-mono:    .8rem;                                  /* lh 1.4,  ls .08em se uppercase */
}
h1, h2, h3{ text-wrap: balance }
p{ text-wrap: pretty }
```

Letter-spacing: negativo no display, no máximo -0.04em; corpo sempre 0; positivo só em
mono/kicker uppercase. Line-height cai conforme o tamanho sobe (1.65 no corpo, ~1.02 no
display).

## Features OpenType

```css
.dados td, .stat{ font-variant-numeric: tabular-nums }     /* colunas de números alinham */
.display{ font-feature-settings: 'ss01' on }               /* só se a fonte tiver o set */
code, .mono{ font-variant-ligatures: none }                /* ligadura em mono confunde */
```

Cheque no specimen da fonte quais sets estilísticos existem antes de ligar `ss01/ss02`.

## Hierarquia e limites

- Hierarquia por PESO antes de tamanho: um h3 em 600 ao lado de corpo em 400 já separa;
  só depois recorra a subir o tamanho.
- Máximo 2 famílias + 1 mono por projeto. Terceira família de texto é ruído.
- Display nunca passa de 6rem renderizado. Acima disso é pôster, não página.
- Cada família precisa de papel declarado (display / corpo / mono). Fonte sem papel sai.

## Checklist

- [ ] Nenhuma fonte default sem decisão (Inter só se foi escolha deliberada com par).
- [ ] Par com contraste real de eixo; papéis display/corpo/mono declarados.
- [ ] Licença verificada; woff2 self-hosted; zero CDN de fonte em produção.
- [ ] `font-display: swap` + preload apenas do display; variable quando existir.
- [ ] Escala clamp() completa; ls negativo só no display (máx -0.04em); balance/pretty.
- [ ] tnum em tabelas e stats; ligaduras off em mono; máx 2 famílias + 1 mono.
