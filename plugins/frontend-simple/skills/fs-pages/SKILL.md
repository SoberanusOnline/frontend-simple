---
name: fs-pages
description: Blueprints de páginas do kit frontend-simple, com quais seções cada tipo de página precisa e em que ordem. Usar ao planejar qualquer página além do hero, ou um site multi-página.
---

# Páginas: sequência argumentativa, não pilha de seções

Uma página é um ARGUMENTO em sequência. Cada seção afirma UMA coisa nova que a anterior
ainda não afirmou; a ordem é a jornada de convencimento do leitor, do gancho à ação.
Antes de codar, escreva a sequência como lista de afirmações ("existe um risco", "nós
resolvemos assim", "outros já confiaram", "custa isto", "aja agora"). Se duas seções
afirmam a mesma coisa, corte uma. Se uma seção não afirma nada ("seção de features
porque toda landing tem"), ela entrou por reflexo e sai.

Regras que valem para todo blueprint abaixo:

- Hero sempre nasce de um arquétipo próprio (skill `fs-archetypes`); nada aqui substitui isso.
- Cada seção do miolo segue o catálogo e as regras anti-clichê de `fs-sections`.
- Toda página fecha com um CTA final claro; nenhuma página termina em seção morna.
- Versão CURTA de cada blueprint é o mínimo defensável; a COMPLETA é o teto, não a meta.

## HOME (produto ou institucional)

1. **Hero (arquétipo)**: a promessa central com tensão real e a peça visual assinatura.
2. **Prova social cedo**: logos de clientes ou 1 número forte logo abaixo do hero; o leitor decide nos primeiros 2 scrolls se confia.
3. **O problema/risco**: nomeia o que dói hoje, com especificidade (prazo, custo, lei, falha).
4. **Como funciona**: 3 a 4 passos legítimos do fluxo real, não etapas inventadas para dar 3.
5. **A peça em destaque (beat)**: a seção "veja em ação": screenshot anotado, demo, diagrama vivo; é o momento de mostrar, não descrever.
6. **Capacidades**: o que o produto cobre, em formato denso (lista, díptico ou tabela; nunca 3 cards idênticos).
7. **Objeções**: FAQ curto ou comparativo honesto; responde o que trava a decisão (segurança, migração, preço, lock-in).
8. **CTA final**: banda de conversão com a promessa reafirmada em outras palavras.

Curta: 1, 2, 4, 5, 8. Completa: as 8. Nunca duas bandas de CTA intermediárias além da final.

## SOBRE

É narrativa, não organograma. Sequência: origem, crença, gente, prova.

1. **Abertura**: por que a empresa existe, em 1 afirmação forte (não "nossa missão é...").
2. **Origem**: o momento ou problema concreto que deu início; datas e lugares reais.
3. **Crença/princípios**: 2 a 4 posições que orientam decisões, escritas como posições ("cobramos por X porque Y"), não valores genéricos ("excelência").
4. **Time**: rostos reais com nome e função; sem stock, sem avatar genérico. Se o time não quer aparecer, corte a seção em vez de simular.
5. **Números honestos**: anos, clientes, volume processado, com fonte; se o número é pequeno, contextualize em vez de inflar.
6. **CTA**: convite proporcional (conhecer o produto, vagas, contato).

Curta: 1, 2, 4, 6. Completa: as 6.

## PREÇOS

1. **Título direto**: "Preços", sem rodeio; subtítulo com a lógica de cobrança em 1 linha.
2. **Tabela de planos**: 2 a 3 tiers com UM destaque visual único (borda de acento, não 3 cards gritando); toggle mensal/anual se existir de verdade.
3. **O que inclui**: tabela de recursos por plano, mono `tabular-nums`, para quem compara linha a linha.
4. **FAQ de compra**: cobrança, upgrade/downgrade, cancelamento, nota fiscal, formas de pagamento.
5. **Garantia/risco reverso**: trial, reembolso ou SLA, se existir; nunca inventar.
6. **CTA final**: repete o plano recomendado.

Curta: 1, 2, 4, 6. Completa: as 6. Preço oculto ("fale conosco" em tudo) exige justificar na própria página por que não há número.

## CONTATO

1. **Título + expectativa**: o que acontece depois do envio e em quanto tempo ("respondemos em até 1 dia útil").
2. **Formulário mínimo**: 3 campos (nome, e-mail, mensagem); cada campo extra precisa pagar seu custo em conversão.
3. **Alternativas**: e-mail clicável, telefone, endereço se físico; quem odeia formulário precisa de saída.
4. **Confirmação**: estado de sucesso na própria página, reafirmando o prazo de resposta.

Curta: 1, 2, 3. Completa: as 4 mais mapa/horários se houver sede física.

## PÁGINA DE PRODUTO/SERVIÇO

1. **Hero (arquétipo)**: o que o produto faz por quem, com a peça visual do próprio produto.
2. **O problema que resolve**: cenário concreto do usuário antes do produto.
3. **Como funciona**: fluxo real em passos ou timeline.
4. **Capacidades em profundidade**: cada capacidade com 1 evidência (print, número, exemplo), não lista de substantivos.
5. **Prova**: depoimento específico ou mini-case com resultado numérico.
6. **Integrações/requisitos**: com o que conversa, o que precisa para rodar.
7. **CTA final**: próxima ação única (demo, trial, contato).

Curta: 1, 3, 5, 7. Completa: as 7.

## CASE STUDY

1. **Contexto**: quem é o cliente, tamanho, setor, em 2 linhas.
2. **Problema**: a dor específica, com o custo dela (tempo, dinheiro, risco).
3. **Solução**: o que foi implantado e como, sem jargão vazio.
4. **Resultado com número**: a métrica antes/depois com período ("de 12 dias para 36 horas em 3 meses"); sem número, não é case, é depoimento.
5. **Depoimento**: citação com nome, cargo e rosto real.
6. **CTA**: "resultados parecidos para o seu caso".

Curta: 1, 2, 4, 6. Completa: as 6. Vários cases: índice filtrável antes, mesmo esqueleto em todos.

## POST/ARTIGO

1. **Título**: afirma a tese, não o tema ("X quebra em produção por Y", não "Sobre X").
2. **Dek**: 1 a 2 linhas que expandem o título e prometem o que o leitor leva.
3. **Meta**: autor com rosto, data, tempo de leitura.
4. **Corpo**: coluna de 65 a 75ch; headings que contam a história sozinhos; imagens com legenda.
5. **TOC**: só se o artigo passa de ~1500 palavras; ancorada, com item atual destacado.
6. **Próximos**: 2 a 3 artigos relacionados de verdade (mesmo tema), não "recentes".

Curta: 1, 2, 3, 4. Completa: as 6.

## DOCS

1. **Sidebar canônica**: a árvore inteira da documentação, igual em toda página, item atual marcado.
2. **Quickstart primeiro**: o caminho do zero ao primeiro resultado em minutos; é a página mais lida.
3. **Guias por tarefa**: "como fazer X", um objetivo por página.
4. **Referência**: exaustiva e seca (API, config, CLI), separada dos guias; tabelas e código, pouca prosa.
5. **Por página**: título, breadcrumb, corpo, prev/next no rodapé, "editar esta página".

Curta: sidebar + quickstart + referência. Completa: tudo, mais busca.

## 404

1. **Reconhecimento honesto**: "esta página não existe", sem drama.
2. **Busca ou links principais**: as 4 a 6 rotas mais úteis do site; a página deve DEVOLVER o usuário ao fluxo.
3. **Humor opcional e discreto**: 1 linha no máximo; a piada nunca substitui a utilidade.

Sempre curta. Uma 404 longa é um erro em si.

## LEGAL/PRIVACIDADE

1. **"Atualizado em"** no topo, com data real.
2. **TOC ancorada**: seções numeradas navegáveis.
3. **Corpo legível**: mesma tipografia do site, 65 a 75ch, headings claros; legal não é desculpa para parede de texto em 12px.
4. **Contato do responsável**: e-mail do DPO/encarregado quando aplicável.

Sempre a versão completa: página legal não tem versão curta, tem versão legível.

## COMING SOON/WAITLIST

1. **Proposta**: o que está vindo e para quem, com a mesma exigência de headline do hero.
2. **Captura**: 1 campo (e-mail) + botão; confirmação inline no envio.
3. **Prova**: quem está por trás, ou quantos já entraram na lista, ou 1 preview real do produto.

Sempre curta: 3 seções. Coming soon com 8 seções é um produto sem página fingindo ter uma.

## Coerência entre páginas

- **Mesmo shell**: nav e footer idênticos em todas as páginas do site; o shell é a camada compartilhada, nunca reescrito por página.
- **Mesma voz**: as regras de `fs-copy` valem do hero da home ao texto da 404.
- **Acentos podem variar**: se o design system do projeto permitir, uma seção ou página pode ter acento próprio (cor, peça visual), mas sempre sobre a mesma base de tokens `--fs-*` e o mesmo tema.
- **Navegação fecha o ciclo**: toda página do blueprint precisa ser alcançável pela nav ou pelo footer; página órfã é bug de arquitetura.

## Resumo: página x seções

| Página | Sequência mínima (curta) |
| --- | --- |
| Home | hero, prova social, como funciona, beat, CTA final |
| Sobre | abertura, origem, time real, CTA |
| Preços | tabela com 1 destaque, FAQ de compra, CTA |
| Contato | expectativa, formulário 3 campos, alternativas |
| Produto/serviço | hero, como funciona, prova, CTA |
| Case study | contexto, problema, resultado com número, CTA |
| Post/artigo | título-tese, dek, meta, corpo 65-75ch |
| Docs | sidebar canônica, quickstart, referência |
| 404 | reconhecimento, busca/links principais |
| Legal | atualizado em, TOC, corpo legível |
| Coming soon | proposta, captura, prova |
