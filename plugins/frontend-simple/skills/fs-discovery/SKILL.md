---
name: fs-discovery
description: Descoberta de direcao visual com o usuario antes de construir qualquer site ou pagina. Colhe referencias (prints colados no chat, URLs de sites que o usuario acha bonitos), faz as perguntas certas, extrai paleta e tipografia das referencias, e apresenta 2 ou 3 direcoes (A, B, C) como mockups renderizados para o usuario escolher. Use SEMPRE no inicio de um projeto novo de site, ou quando o usuario nao sabe descrever o que quer.
---

# fs-discovery: descobrir a direcao antes de construir

Ninguem sabe descrever o site que quer, mas todo mundo reconhece o que acha
bonito. Esta skill transforma isso em processo: referencias primeiro,
perguntas curtas depois, e uma escolha concreta entre direcoes renderizadas
(A, B, C) antes de qualquer construcao. Vinte minutos aqui economizam dias
de retrabalho.

## Passo 1: pedir referencias (a pergunta mais valiosa)

Peca ao usuario, nesta ordem de preferencia:

1. **Prints**: "Cole aqui 1 a 3 prints de sites ou telas que voce acha
   bonitos (mesmo de outro ramo)". O usuario pode colar imagens direto no
   chat do Claude Code.
2. **URLs**: "Ou me manda os links de 1 a 3 sites de referencia". Renderize
   cada URL com screenshot headless e LEIA a imagem.
3. **Anti-referencias**: "Tem algo que voce NAO quer? (um site que odeia,
   um estilo que enjoou)". Anti-referencia vale tanto quanto referencia.

## Passo 2: extrair a direcao de cada referencia

Para cada print ou site, anote de forma estruturada:

- **Paleta**: fundo (claro/escuro/colorido), acento, temperatura. Estime os
  hex dominantes olhando a imagem.
- **Tipografia**: serif ou sans no display, peso, tamanho relativo do
  headline, uso de mono.
- **Densidade**: arejado ou denso, tamanho dos blocos, quantidade de texto.
- **Forma**: cantos retos ou arredondados, bordas ou sombras, fotografia ou
  ilustracao ou UI.
- **Vibe em 3 palavras** (ex.: "institucional, sobrio, tecnico" ou
  "editorial, quente, autoral").

## Passo 3: perguntas curtas (use AskUserQuestion quando disponivel)

Nunca mais de 4 perguntas de uma vez. As que mais mudam o resultado:

1. **Trabalho do site**: "Qual e o UNICO trabalho desta pagina?" (vender
   reuniao, baixar app, capturar lead, dar credibilidade institucional)
2. **Publico**: "Quem visita? Em que contexto?" (comprador tecnico,
   investidor, cidadao, consumidor)
3. **Tom**: opcoes fechadas ajudam: sobrio institucional / tecnico
   confiante / editorial autoral / energico comercial
4. **Marca existente**: "Tem logo, cor de marca ou fonte obrigatoria?
   Manda o arquivo ou o hex."

Se o usuario ja colou referencias boas, metade dessas perguntas se responde
sozinha. Pergunte apenas o que a referencia nao respondeu.

## Passo 4: gerar as direcoes A, B e C

Com o briefing, produza 2 ou 3 DIRECOES deliberadamente diferentes (nao
variacoes da mesma). Cada direcao e um mockup HTML estatico do HERO (nao a
pagina inteira): headline real do produto, paleta, tipografia e composicao
proprias. Use os temas do kit como ponto de partida quando couber
(enterprise-sharp, editorial, dark-tech) e o catalogo fs-archetypes para a
composicao.

Processo:

1. Escreva os 3 heros num unico arquivo `direcoes.html` (secoes A, B, C
   empilhadas, separadas por um rotulo discreto).
2. Renderize com screenshot headless (1440 de largura) e LEIA a imagem:
   nada torto, contraste ok, headline sem vazar.
3. Mostre ao usuario e peca a escolha com AskUserQuestion (opcoes: Direcao A,
   Direcao B, Direcao C, "misturar: diga o que pegar de cada").
4. Registre a escolha num arquivo `DIRECAO.md` do projeto: paleta, fontes,
   arquetipo, vibe, referencias. Esse arquivo e a constituicao do projeto;
   as proximas paginas obedecem a ele.

Regras das direcoes:

- As tres precisam divergir em pelo menos DOIS eixos (paleta, tipografia,
  composicao). Tres tons de azul nao sao tres direcoes.
- Nenhuma pode ser o clichê banido (gradiente roxo + cards, cream + serif
  italico). Ver fs-deslop.
- Copy do mockup ja e copy real do produto (fs-copy), nunca lorem ipsum:
  o usuario escolhe direcao com o SEU conteudo na tela.

## Passo 5: fechar o briefing

Confirme em 5 linhas antes de construir: trabalho da pagina, publico, tom,
direcao escolhida, o que NAO fazer. Dai siga para fs-build passo 2
(prescrever arquetipo) com a DIRECAO.md como referencia fixa.

## Atalhos

- Usuario com pressa e sem referencias: pule para 2 direcoes geradas a
  partir do dominio do produto (fs-archetypes: o arquetipo nasce do que o
  produto E) e valide com uma pergunta so.
- Redesign de site existente: o site atual E a primeira referencia.
  Screenshot dele, extraia o que preservar (marca, conteudo) e o que matar
  (fs-deslop lista os tells).
- Usuario mandou so um print: extraia a direcao dele e apresente UMA
  proposta fiel + UMA alternativa mais ousada. Escolha binaria e rapida.
