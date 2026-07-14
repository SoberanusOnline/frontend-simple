---
name: fs-sources
description: Onde buscar, ao vivo, tudo que um frontend premium precisa: fontes, cores, referencias de design, icones, fotos e ilustracoes, com a receita de como buscar e trazer para o projeto. Use quando precisar de material (uma fonte, uma paleta, inspiracao, um icone, uma foto) em vez de inventar ou usar o primeiro default.
---

# fs-sources: saber onde buscar

Conteudo engessado envelhece; fonte viva nao. Esta skill nao guarda
biblioteca local: ela ensina ONDE buscar cada material e COMO trazer para o
projeto (fetch, screenshot, download, extracao). Regra geral: busque, LEIA o
que voltou (renderize e olhe a imagem quando for visual) e so entao decida.

## Tipografia (onde e como)

| Fonte | O que tem | Licenca |
|---|---|---|
| fonts.google.com | o maior acervo; filtre por variable e por classificacao | SIL OFL na quase totalidade |
| fontshare.com | as premium gratuitas da ITF (Satoshi, Clash Display, General Sans) | ITF Free Font License |
| fontsource.org | qualquer Google Font empacotada para self-host via npm | segue a original |
| bunny.net/fonts | espelho 1:1 do Google Fonts com privacidade (LGPD/GDPR) | segue a original |
| uncut.wtf | displays contemporaneas de foundries independentes, otimas para editorial | varia por fonte, conferir |
| velvetyne.fr | experimentais/autorais de foundry livre, para identidades ousadas | SIL OFL na maioria |

Receita de self-host sem npm: o google-webfonts-helper devolve o zip de
woff2 pronto com o @font-face:
`https://gwfh.mranftl.com/api/fonts/<id>?download=zip&subsets=latin`
(id ex.: `fraunces`, `space-grotesk`). Baixe com curl, extraia so os woff2
que usar, escreva o @font-face (ver fs-typography). Sempre confirme a
licenca na pagina da familia antes de embarcar.

Para DESCOBRIR a fonte de uma referencia: screenshot do site, olhe as
formas (serifa? geometrica? largura?), e busque na web "font used by <site>"
ou compare em typewolf.com (galeria de pares reais por fonte).

## Cor (ferramentas e receitas)

- oklch.com: picker OKLCH; converta o acento da marca e derive a rampa
  variando so o L (lightness perceptual, sem surpresa de contraste).
- Contraste: verifique AA em qualquer par com a formula direta ou
  webaim.org/resources/contrastchecker (fetch da URL com os hex).
- Paleta a partir de um print de referencia: leia a imagem e estime os hex
  dominantes (fundo, tinta, acento); refine no oklch.com. Nao use gerador
  aleatorio de paleta para trabalho serio: a cor vem da marca ou do dominio.
- realtimecolors.com: testa a paleta aplicada numa pagina real (texto, fundo,
  acento) antes de comprometer os tokens.
- Tendencias e nomes de cor por setor: busca web do tipo
  "<setor> brand colors 2026 site:awwwards.com OR site:godly.website".

## Referencias de design (galerias vivas)

| Galeria | Para que serve |
|---|---|
| godly.website | o melhor filtro de landing pages modernas, por categoria |
| awwwards.com | craft alto, motion e direcao de arte premiada |
| landbook.com | volume de LPs reais filtraveis por estilo e cor |
| lapa.ninja | LPs por categoria com paleta extraida |
| curated.design e dark.design | selecoes enxutas, boas para vibe |
| mobbin.com | padroes de UI de apps reais (parte paga) |
| saaslandingpage.com | LPs de SaaS reais por secao (hero, pricing, faq) |
| refero.design | telas de produtos reais na web, por fluxo e componente |
| footer.design e navbar.gallery | colecoes por COMPONENTE, otimas para detalhe |

Receita: escolha 2 galerias, monte a URL da categoria do projeto, screenshot
headless da pagina da galeria, LEIA a imagem e abra as 2 ou 3 referencias
mais fortes (screenshot de cada uma). Extraia direcao como em fs-discovery
passo 2. Nunca copie uma referencia; extraia principios (paleta,
tipografia, densidade, composicao).

## Icones (com API direta)

| Fonte | O que tem | Como trazer |
|---|---|---|
| api.iconify.design | agregador de +200 mil icones de todos os sets | `curl https://api.iconify.design/<set>:<nome>.svg` (ex.: `lucide:file-check`, `ph:shield-check-bold`) |
| lucide.dev | o set neutro universal do kit, stroke consistente | via Iconify (`lucide:`) ou download direto |
| phosphoricons.com | 6 pesos por icone, bom para hierarquia | via Iconify (`ph:` e variantes `-bold`, `-duotone`) |
| tabler.io/icons | +5 mil, denso e tecnico, otimo para dashboards | via Iconify (`tabler:`) |
| heroicons.com | arredondado simples, combina com UI mais suave | via Iconify (`heroicons:`) |
| lobehub.com/icons | logos de marcas de IA e tech (modelos, labs, apps) em SVG | pagina da marca > copiar SVG |
| simpleicons.org / svgl.app | logos de marcas em geral (clouds, empresas, ferramentas) | download SVG direto, cores oficiais |

Regras do kit: um set de UI so por projeto, stroke consistente, embarcar
INLINE com `currentColor` (herda a cor do texto), e logo de marca sempre da
fonte oficial da marca (nunca redesenhar de memoria).

## Fotos e ilustracoes

- Fotos: unsplash.com e pexels.com (licencas livres; confirme na pagina da
  foto). Busque termos do DOMINIO ("city hall brazil", "public records"),
  nunca "business people smiling". Baixe, otimize (~100-150 KB hero) e
  self-hospede.
- Imagem gerada por IA: quando o projeto tiver gerador disponivel, prefira
  gerar a atmosfera do hero na cor do acento e retratos com contexto do
  dominio (ver fs-quality, secao imagens: prompt-guard de insignias).
- Ilustracao: so com direcao consistente (mesmo traco em todo o site).
  Evite pacotes genericos de ilustracao 3D de pessoas flutuando: virou tell
  de IA.

## Padroes de codigo e plataforma

- MDN (developer.mozilla.org) para API exata; web.dev para pratica moderna
  (view transitions, scroll-driven animations, container queries);
  caniuse.com para suporte antes de adotar.
- Busque implementacoes reais: "site:codepen.io <padrao>" ou
  "<padrao> css-tricks". Leia e reescreva no padrao do kit (tokens,
  gate .fs-js); nunca cole codigo com dependencia externa em runtime.

## Regra de frescor

Antes de recomendar fonte, galeria ou ferramenta desta lista em um projeto,
se houver busca web disponivel, confirme que a fonte segue viva e procure
1 alternativa mais nova ("best <categoria> 2026"). Esta lista e o ponto de
partida, nao o teto.
