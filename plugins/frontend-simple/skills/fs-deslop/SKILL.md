---
name: fs-deslop
description: Auditoria e correcao de "cara de IA" em sites e landing pages, no design e na copy. Use quando o usuario disser que o site "parece feito por IA", "esta generico", "todo mundo tem um igual", ou como gate antes de entregar qualquer frontend. Detecta os cliches saturados (gradiente roxo + Inter + 4 cards, cream + serif italico, eyebrows tracked, copy vaga) e aplica correcoes concretas.
---

# fs-deslop: tirar a cara de IA

Em 2026 os sites gerados por IA convergiram para meia duzia de formulas
reconheciveis a um relance. Esta skill e um detector e um corretor: primeiro
varre a pagina contra o catalogo de "tells", depois aplica a correcao concreta
de cada um. Use como gate final de qualquer entrega e como resposta direta a
"esta com cara de IA".

## Como rodar a auditoria

1. Renderize a pagina (screenshot headless em 1440 e 390) e LEIA a imagem.
   Codigo nao revela slop; o olho revela.
2. Passe o catalogo abaixo item a item. Anote cada tell encontrado.
3. Aplique as correcoes (cada tell tem a sua). Re-renderize e confira.
4. Se o plugin impeccable estiver instalado, rode o detector dele tambem
   (gradient-text, side-stripes, eyebrows e overflow ja saem de graca).

## Catalogo de tells (design)

| Tell | Por que denuncia | Correcao |
|---|---|---|
| Inter/sans generica sem nenhuma outra decisao tipografica | fonte default de todo gerador | escolher par tipografico com intencao (uma familia com personalidade + pesos deliberados); escala propria; text-wrap balance |
| Gradiente roxo/azul (ou verde-acido em fundo preto) como acento | a paleta default de 2024-2026 | estrategia de cor consciente: neutros frios ou quentes COM motivo + 1 acento do dominio da marca |
| Grid de 4 cards identicos (icone + titulo + texto) repetido | scaffolding de gerador | variar a forma por conteudo: lista densa, diptico, tabela, diagrama; cards so quando forem a melhor affordance |
| Fundo cream/bege + serif italico grande + "warm minimalism" | a segunda formula saturada | ou um off-white verdadeiro sem tint, ou cor de marca de verdade; enfase por peso, nunca italico decorativo |
| Subheadings tracked (CAPS com letter-spacing largo) sobre toda secao | o "eyebrow reflex" | remover; a headline lidera; contexto vai na lead |
| Ticker bars, marquees e badges decorativas | preenchimento sem informacao | remover ou substituir por dado real (número, lei, prazo, nome) |
| Gradient-text no titulo | decorativo, nunca significativo | cor solida; enfase por peso/tamanho/sublinhado no acento |
| Glassmorphism em tudo | default estetico, raramente proposital | superficie solida com borda 1px; blur so com motivo |
| Hero-metrica clichê (numero gigante + label + stats + gradiente) | template SaaS saturado | hero com o OBJETO do produto (instrumento, documento, mapa, feed) como protagonista |
| Todas as paginas com a mesma composicao | clones de um template | um ARQUETIPO por pagina (skill fs-archetypes) |
| Numeracao 01/02/03 como decoracao de secao | scaffolding editorial de IA | numerar apenas sequencias reais (processo, fluxo com ordem) |
| Foto de banco genérica (aperto de maos, escritorio sorrindo) | nenhum vinculo com o dominio | imagem gerada/curada DO dominio (o documento, a rua, o painel), retratos com contexto |

## Catalogo de tells (copy)

| Tell | Exemplo | Correcao |
|---|---|---|
| Frase que serve para qualquer produto | "Solucoes inovadoras que transformam seu negocio" | dizer o que o produto FAZ, com objeto direto: quem usa, o que sai, em quanto tempo |
| Headline sem tensao | "Bem-vindo ao futuro da gestao" | uma afirmacao especifica com consequencia real ("O prazo que vira revelia foi publicado hoje.") |
| Adjetivo empilhado no lugar de fato | "plataforma robusta, escalavel e intuitiva" | trocar por numero, prazo, norma ou mecanismo ("carimbo de tempo RFC 3161 em cada ato") |
| Bordao repetido em toda pagina | o mesmo slogan fechando cada secao | cada secao afirma UMA coisa nova; cortar a repeticao |
| Travessao como pontuacao de efeito | "o resultado (travessao) impressionante" | reescrever com ponto, virgula ou dois-pontos (e um dos tells mais fortes de texto de IA) |
| Emoji em interface seria | foguetes e brilhos no hero | remover; autoridade vem de especificidade, nao de enfeite |
| CTA generico | "Saiba mais" / "Comece agora" | CTA com o verbo do dominio ("Verificar um documento", "Rodar o diagnostico") |

## Ordem de ataque (quando tudo esta com cara de IA)

1. Tipografia e cor primeiro (derruba 60% do slop de uma vez).
2. Hero: trocar o clichê pelo objeto real do produto (arquetipo).
3. Copy: reescrever headline e leads com especificidade do dominio.
4. Remover decoracao sem informacao (eyebrows, tickers, badges, numeracao).
5. Motion com proposito (uma assinatura em loop com pausa, nao entrances iguais em tudo).
6. Rodar fs-quality (alinhamento, overflow, contraste) e o agente fs-critic
   para o veredito adversario final.

## Regra de bolso

Se alguem consegue olhar a pagina e adivinhar o prompt que a gerou, ela
falhou. Se consegue adivinhar a CATEGORIA da pagina só pela estetica
("mais um SaaS roxo", "mais um editorial cream"), tambem falhou. A correcao
nunca e "estilizar mais": e ancorar cada decisao no dominio real do produto.
