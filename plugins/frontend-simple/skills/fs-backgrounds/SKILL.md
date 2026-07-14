---
name: fs-backgrounds
description: Catalogo de fundos e atmosferas (heros, secoes, bandas escuras) com receita CSS pronta e regras para nao competir com o conteudo. Usar ao definir o fundo de qualquer hero ou secao.
---

# Fundos e atmosferas: catálogo com receita pronta

## Princípios

- O fundo serve a hierarquia, nunca compete. Se o olho vai primeiro ao fundo, ele errou.
- Contraste AA vale SOBRE o fundo real, medido no ponto mais desfavorável atrás do texto.
- Uma atmosfera por página, com variações por seção; trocar de linguagem a cada seção lê como colagem.
- CSS puro vence imagem. Imagem só com significado real, otimizada (AVIF/WebP), sempre com scrim.
- Fundo estático por default; se respirar: 12s+, transform/opacity, pausado sob reduce e fora da viewport.
- Todo padrão usa os tokens `--fs-*` da página; nunca hardcode o acento no fundo.

## Catálogo

### 1. Campo de grade (colunas hairline)

Quando usar: hero de produto B2B/B2G, tema enterprise-sharp. Sugere sistema e precisão.

```css
.bg-grade{ position:relative }
.bg-grade::before{
  content:''; position:absolute; inset:0; pointer-events:none;
  background:repeating-linear-gradient(90deg, var(--fs-linha, #e0e0e0) 0 1px, transparent 1px calc(100% / 12));
  -webkit-mask-image:radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 78%);
  mask-image:radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 78%);
}
```

Erro comum: grade sem mask vaza na borda e vira linha-fantasma na seção seguinte.

### 2. Aurora / wash de acento

Quando usar: hero editorial ou institucional que pede calor sem imagem.

```css
.bg-aurora::before{
  content:''; position:absolute; inset:-20%; pointer-events:none; filter:blur(12px);
  background:radial-gradient(52% 44% at 78% 12%, color-mix(in oklab, var(--fs-accent) 16%, transparent), transparent 70%);
}
@keyframes aurora-b{ 50%{ transform:translate3d(-2%, 2%, 0) scale(1.05) } }
.fs-js .bg-aurora::before{ animation:aurora-b 16s ease-in-out infinite }
@media (prefers-reduced-motion:reduce){ .bg-aurora::before{ animation:none } }
```

Erro comum: opacidade alta. O wash fica entre 8% e 18% do acento; acima disso reprova AA.

### 3. Glow radial escuro (bandas g90/g100)

Quando usar: banda escura com objeto-herói (screenshot, painel, dado grande) para assentar.

```css
.banda-escura .bg-glow::before{
  content:''; position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(58% 48% at 50% 42%, color-mix(in oklab, var(--fs-accent-on-dark) 12%, transparent), transparent 72%);
}
```

Erro comum: glow centrado na seção em vez de atrás do objeto; glow solto lê como mancha.

### 4. Grain / noise sutil

Quando usar: superfície grande e lisa que parece plástico. SVG feTurbulence em data-URI:

```css
.bg-grain::after{
  content:''; position:absolute; inset:0; pointer-events:none; opacity:.045;
  mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

Erro comum: opacidade acima de 8% vira ruído visível e suja texto pequeno. Faixa: 3% a 6%.

### 5. Bandas diagonais / geometria discreta

Quando usar: seção de transição ou CTA final que pede energia direcional sem imagem.

```css
.bg-diag{ background:linear-gradient(115deg, var(--fs-layer, #f4f4f4) 0 58%, transparent 58%) }
.bg-clip{ clip-path:polygon(0 0, 100% 4vw, 100% 100%, 0 100%) }  /* variante recorte */
```

Erro comum: ângulo agressivo e cor saturada. Diagonal boa é rasa (8 a 20 graus) e em neutro.

### 6. Dot matrix

Quando usar: seções técnicas (arquitetura, integrações, dados); mais quieta que a grade.

```css
.bg-dots::before{
  content:''; position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(var(--fs-linha, #e0e0e0) 1px, transparent 1.5px);
  background-size:26px 26px;
  -webkit-mask-image:radial-gradient(90% 80% at 50% 30%, #000 30%, transparent 75%);
  mask-image:radial-gradient(90% 80% at 50% 30%, #000 30%, transparent 75%);
}
```

Erro comum: densidade alta (spacing menor que 18px) vira chapa cinza. Baixa, mascarada.

### 7. Imagem fotográfica + scrim

Quando usar: fotografia com significado real (lugar, pessoas, produto físico); nunca stock genérico.

```css
.bg-foto{ position:relative; background:#161616 center/cover no-repeat;
  background-image:url('/assets/img/hero.avif') }
.bg-foto::before{ content:''; position:absolute; inset:0;
  background:linear-gradient(90deg, rgba(10,10,10,.82) 0 34%, rgba(10,10,10,.45) 62%, rgba(10,10,10,.12)) }
.bg-foto > *{ position:relative }
```

O sujeito fica do lado OPOSTO ao texto; o scrim garante AA no ponto mais claro (meça,
não estime). Erro comum: scrim uniforme a 40%, que não garante AA em lugar nenhum.

### 8. Gradient mesh contido

Quando usar: raramente, e dessaturado. 2 a 3 radiais sobrepostos em hero claro.

```css
.bg-mesh{ background:
  radial-gradient(40% 50% at 18% 20%, color-mix(in oklab, var(--fs-accent) 9%, transparent), transparent 70%),
  radial-gradient(45% 55% at 85% 10%, color-mix(in oklab, var(--fs-accent-soft, #eee) 60%, transparent), transparent 72%),
  var(--fs-bg, #fff) }
```

Aviso: mesh vibrante roxo/azul é o tell de IA mais conhecido que existe. Se o mesh
chama atenção, falhou. Dessaturar até quase sumir.

### 9. Padrão SVG temático do domínio

Quando usar: domínio com geometria própria (mapa, curvas de nível, ondas, circuito):

```css
.bg-tema::before{ content:''; position:absolute; inset:0; pointer-events:none;
  opacity:.06; background:url('/assets/img/padrao-dominio.svg') center/900px repeat }
```

Erro comum: decoração aleatória. Só entra se o desenho FALA do domínio; senão 1 ou 6 resolve.

### 10. Console / terminal dark

Quando usar: produto técnico, developer tools, tema dark-tech. Linhas mono decorativas
sugerem atividade; scanline sutil opcional:

```css
.bg-console{ background:#0d0d0d; color:#f4f4f4 }
.bg-console .deco{ font-family:var(--fs-mono); font-size:.72rem; user-select:none;
  color:color-mix(in oklab, var(--fs-accent-on-dark) 40%, transparent) }
.bg-console::after{ content:''; position:absolute; inset:0; pointer-events:none;
  opacity:.05; background:repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px) }
```

Erro comum: opacidade de texto real (o usuário tenta ler). Abaixo de 45%, com `aria-hidden="true"`.

### 11. Papel / textura clara honesta

Quando usar: tema editorial, leitura longa. Off-white NEUTRO com grão leve:

```css
.bg-papel{ background:#fafaf9 }
.bg-papel::after{ /* mesmo data-URI do padrão 4, opacity .03 */ }
```

Aviso anti-cream: off-white é NEUTRO; bege/creme quente (`#fdf6ec` e família) fora de
comida/artesanato é outro tell de IA.

### 12. Vídeo / canvas ambient

Quando usar: quase nunca; vale quando movimento ambiente É o produto (mídia, evento).
Loop curto (< 8s), leve (< 1.5MB), autoplay muted com poster:

```html
<video class="bg-video" autoplay muted loop playsinline
       poster="/assets/img/poster.avif" aria-hidden="true">
  <source src="/assets/video/ambient.mp4" type="video/mp4">
</video>
```

CSS: `@media (prefers-reduced-motion:reduce){ .bg-video{ display:none } }`: reduced-motion
desliga o vídeo por completo e a seção continua inteira com o poster. Erro comum: vídeo
pesado sem poster, que deixa a primeira dobra preta em 3G.

## Combinações por tema e por seção

Por tema:
- enterprise-sharp: grade (1) no hero, dots (6) em seção técnica, glow (3) + grain (4) na banda escura.
- editorial: papel (11) como base, aurora (2) no hero, foto + scrim (7) quando a pauta pede imagem.
- dark-tech: console (10) como superfície, glow (3) atrás do objeto-herói, grain (4)
  em toda banda; grade (1) na variante escura de `--fs-linha`.

Por seção:
- Hero: o padrão mais forte da página vive AQUI, e só aqui.
- Seções de meio: quietas (liso ou `g10`); o silêncio delas faz o hero e a banda escura funcionarem.
- Banda escura: 1 por página, com glow + grain + fio de `--fs-accent-on-dark` no topo.
- CTA final: pode repetir a atmosfera do hero em intensidade menor, fechando o arco.
