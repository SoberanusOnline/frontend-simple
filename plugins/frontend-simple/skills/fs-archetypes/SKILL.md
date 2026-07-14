---
name: fs-archetypes
description: Catálogo de arquétipos de composição organizado por tipo de site (landing, institucional, portfólio, blog, docs, dashboard, e-commerce, restaurante, evento, agência e mais) + a regra de ouro anti-clone. Usar SEMPRE antes de compor qualquer página, seja qual for o tipo. Primeiro identifique o tipo de site, depois prescreva o arquétipo, só então escreva HTML.
---

# Arquétipos: a regra de ouro anti-clone

## A regra de ouro (por que este arquivo existe)

Um projeto real portou 27 produtos com brief aberto ("crie a composição que quiser") e os 27
saíram CLONES: o mesmo hero, as mesmas seções, o mesmo gráfico. Tudo rejeitado. A correção
foi prescrever, para cada página, uma composição concreta e distinta (o arquétipo), ancorada
no que a página É. Só então as páginas divergiram de verdade.

**Regra de ouro:** cada página = arquétipo de layout próprio + animação-assinatura própria +
desenho/ilustração própria. Compartilhado, só a base (tokens, nav, footer). A diversidade vem
da prescrição, nunca do acaso: brief aberto faz o agente reverter ao template banido.

O arquétipo nasce do que a página é e faz, não de preferência estética. Pergunte: "qual é o
objeto central desta página no mundo real?" (o instrumento do produto, a obra do portfólio,
o prato do restaurante, a matéria do blog) e faça desse objeto o herói do hero, vivo, com
conteúdo de exemplo realista. Prescreva por escrito ANTES de abrir o editor.

## Passo 1: identifique o tipo de site

Classifique o pedido em um destes tipos. Cada tipo tem seção própria abaixo com arquétipos
prontos. Se o pedido mistura tipos (loja + blog, evento + comunidade), prescreva um arquétipo
por página, cada um dentro do seu tipo.

| Tipo | Sinais no pedido |
|---|---|
| Landing de produto / SaaS | "página do meu produto", conversão, planos, demo, trial |
| Site institucional / corporativo | empresa, "quem somos", unidades, credibilidade, RI |
| Portfólio criativo | designer, fotógrafo, arquiteto, "mostrar meus trabalhos" |
| Site pessoal / CV | "meu site pessoal", currículo, bio, presença profissional |
| Blog / editorial / revista | posts, artigos, colunas, "escrever sobre" |
| Documentação / docs técnicas | API, guia, referência, developer docs, wiki |
| Dashboard / aplicação web | painel, admin, métricas, ferramenta interna, SaaS logado |
| E-commerce / catálogo | loja, produtos, carrinho, coleção, "vender online" |
| Restaurante / negócio local | cardápio, reserva, horário, barbearia, clínica, oficina |
| Evento / conferência | data, inscrição, palestrantes, lineup, festival |
| Agência / estúdio | serviços criativos, cases, "nossa abordagem", showreel |
| App mobile showcase | "página do meu app", App Store, Google Play, download |
| Comunidade / curso | alunos, membros, aulas, trilha, mentoria, assinatura |
| Link-in-bio | "todos os meus links", perfil de rede social, atalhos |
| Coming soon / waitlist | "ainda não lançou", lista de espera, teaser, contagem |

## Site institucional / corporativo

- **FACHADA EDITORIAL**: manchete institucional forte sobre foto ou textura da operação real em full-bleed; números da empresa (anos, clientes, unidades) contam ao entrar na viewport. Evita o hero corporativo de banco de imagem com trio de ícones.
- **LINHA DO TEMPO VIVA**: a história da empresa como timeline horizontal que se desenha no scroll, marcos acendendo um a um até o presente. Evita a seção "sobre nós" em três colunas.
- **MOSAICO DE FRENTES**: áreas de atuação em mosaico assimétrico (células de tamanhos distintos); hover expande a célula e revela um dado concreto da frente. Evita grade 3x2 uniforme de cards com ícone.
- **CARTA ABERTA**: texto do fundador em serif grande, primeira pessoa, com assinatura SVG que se desenha ao final; prova social discreta na margem. Evita o vídeo institucional embedado como muleta.

## Portfólio criativo

- **GRADE DE OBRAS**: grid full-bleed de projetos sem moldura nem gap decorativo; hover revela título, ano e cliente com leve zoom da peça. Evita cards com sombra e botão "ver mais".
- **CASE ÚNICO**: um único projeto ocupa a home em scroll longo (problema, processo, resultado); o restante do portfólio vira índice no fim. Evita a home-vitrine rasa com dezenas de thumbnails iguais.
- **ÍNDICE EDITORIAL**: lista tipográfica pura (títulos grandes, numeração, ano); o preview da obra aparece flutuando junto ao cursor no hover da linha. Evita qualquer thumbnail fixo na lista.
- **DIÁRIO DE PROCESSO**: sketches, versões descartadas e bastidores em colagem; a peça final se monta a partir dos fragmentos ao rolar. Evita mostrar só o resultado polido sem o caminho.

## Site pessoal / CV

- **MONOGRAMA E MANIFESTO**: nome em corpo gigante, uma frase de posicionamento e três links; a frase se escreve com cursor de digitação uma única vez, sem loop infinito. Evita foto de perfil circular + lista de badges de tecnologia.
- **TERMINAL DE APRESENTAÇÃO** (para quem é dev): prompt que executa comandos fictícios (whoami, historico, contato) e imprime a bio como saída. Evita virar piada: no máximo três comandos, resto da página em prosa normal.
- **DOSSIÊ DE CARREIRA**: a trajetória como fichas empilhadas (cargo, período, uma conquista mensurável cada); a ficha ativa abre, as demais ficam em resumo. Evita a timeline vertical genérica com bolinhas.
- **CARTÃO VIVO**: um cartão de visita central que gira ao hover revelando o verso com contatos; ao redor, só espaço em branco e uma linha de apresentação. Evita entulhar a dobra com seções de skills.

## Blog / editorial / revista

- **CAPA DE REVISTA**: matéria principal em destaque tipográfico dominante + 3 ou 4 secundárias em hierarquia clara de tamanho; a manchete entra com reveal de linha a linha. Evita grid uniforme de cards de post com imagem 16:9.
- **FLUXO CRONOLÓGICO DENSO**: lista compacta estilo arquivo (data, título, tag), dezenas de posts visíveis sem paginação preguiçosa; hover destaca a linha inteira. Evita excerpt de três linhas repetido em todo item.
- **EDIÇÕES / COLEÇÕES**: posts agrupados em edições numeradas como fascículos; cada edição tem capa própria com cor e tipografia levemente distintas dentro do sistema. Evita a sidebar de "posts recentes + tags + newsletter".
- **AUTOR EM PRIMEIRO PLANO**: para blog pessoal, a voz lidera: um parágrafo de abertura em serif grande apresentando a tese do blog, e os textos entram como continuação natural. Evita hero com headline de marketing num blog que é pessoal.

## Documentação / docs técnicas

- **HUB DE BUSCA**: a busca é o hero (campo central grande, atalho de teclado visível); abaixo, os 6 destinos mais procurados como links diretos. Evita hero de marketing em site de docs.
- **SIDEBAR CANÔNICA**: hero mínimo (título + uma frase + versão) e a navegação lateral completa já visível na primeira dobra; o conteúdo é o protagonista. Evita esconder o sumário atrás de menu hambúrguer no desktop.
- **QUICKSTART EM 3 PASSOS**: instalar, configurar, rodar, cada passo com bloco de código copiável; um terminal simulado executa os três em loop com pausa de leitura. Evita a página inicial que só descreve o produto sem deixar o dev começar.
- **MAPA DE API**: endpoints ou módulos organizados como mapa navegável por categoria, com badge de método/tipo; a categoria ativa acende ao rolar. Evita despejar a referência inteira numa página só sem hierarquia.

## Dashboard / aplicação web

- **SHELL COM DADOS REAIS**: a própria aplicação (top-bar, navegação, painel) preenchida com dados de exemplo plausíveis e nomeados; um fluxo curto se executa em loop. Evita placeholder "Lorem" e gráficos sem legenda.
- **CARD-INSTRUMENTO**: o widget central do produto (o gráfico, o medidor, a fila) isolado como objeto-herói em tamanho grande, vivo; o shell completo aparece só depois. Evita mostrar 12 painéis minúsculos ilegíveis de uma vez.
- **COCKPIT DENSO**: para ferramenta de operação, densidade é virtude: multi-painel com hierarquia clara (um painel dominante, satélites menores), atualizações pontuais piscando. Evita respiro decorativo onde o usuário quer informação.
- **FLUXO DE TRABALHO**: quando o produto é processo (kanban, fila, aprovação), o hero é um item atravessando as etapas de ponta a ponta, com carimbo no desfecho. Evita ilustrar processo com setas genéricas entre ícones.

## E-commerce / catálogo

- **VITRINE EDITORIAL**: poucos produtos por dobra, fotografia grande, direção de arte de revista; o produto em destaque troca com transição de cor de fundo coordenada. Evita grade apertada de cards com preço em vermelho.
- **PRODUTO-HERÓI**: um único produto carrega a home (marca de produto único ou lançamento); o objeto gira, abre ou se desmonta em variações ao rolar. Evita distribuir a atenção entre dezenas de itens quando um só importa.
- **GRADE DENSA COM FILTROS VIVOS**: catálogo grande assumido como catálogo: grade densa e rápida, filtros que reordenam com animação FLIP visível, contagem de resultados atualizando. Evita paginação lenta e filtros escondidos em drawer no desktop.
- **LOOKBOOK NARRATIVO**: a coleção contada como história em scroll (cenário, peça, detalhe, peça); o botão de compra acompanha discreto e fixo. Evita separar "inspiração" da compra em páginas distintas.

## Restaurante / negócio local

- **MENU COMO OBJETO**: o cardápio é o hero, diagramado como peça gráfica de verdade (categorias, pratos, preços em tipografia cuidada); um prato em destaque troca por dia/seção. Evita PDF linkado e foto de stock de comida.
- **MESA POSTA**: fotografia full-bleed do ambiente ou da mesa em uso real, com o bloco de reserva (data, pessoas, horário) sobreposto e funcional na primeira dobra. Evita carrossel automático de fotos com texto por cima.
- **BALCÃO EM AÇÃO**: o preparo em close (massa aberta, corte, chapa); ingredientes ou etapas legendados entram em cadência sincronizada. Serve a qualquer negócio de ofício: barbearia, ateliê, oficina. Evita glorificar o genérico ("qualidade e tradição") sem mostrar o fazer.
- **PONTO NO BAIRRO**: para negócio de vizinhança, o mapa é protagonista: o trajeto até a porta se desenha, horário de hoje em destaque, telefone e rota em um toque. Evita enterrar endereço e horário no footer.

## Evento / conferência

- **COUNTDOWN E LINEUP**: contagem regressiva real + os 3 ou 4 nomes principais em tipografia de cartaz; os demais entram em letreiro contínuo pausável. Evita grade uniforme de avatares circulares dos palestrantes.
- **CRONOGRAMA COMO TIMELINE**: a programação é o hero: trilhas paralelas navegáveis por dia e horário, o slot ativo acende conforme o usuário percorre. Evita tabela de horários em imagem estática.
- **CARTAZ VIVO**: a identidade do evento como poster tipográfico animado de dobra inteira (data, cidade, nome se recompondo); inscrição fixa e visível. Evita hero de foto de plateia desfocada com gradiente por cima.
- **PROVA DA ÚLTIMA EDIÇÃO**: abre com o melhor momento da edição anterior (foto forte ou métrica: 2.400 presentes) e converte em cima da prova. Evita promessas abstratas em evento que já tem histórico.

## Agência / estúdio

- **MANIFESTO TIPOGRÁFICO**: a tese da agência em corpo gigante ocupando a dobra, montando-se palavra a palavra uma única vez; cases vêm logo abaixo como prova. Evita abrir com "somos uma agência full-service".
- **SHOWREEL CONTIDO**: uma única janela de mídia central com fragmentos curtos dos trabalhos; clique expande, nunca autoplay com som. Evita vídeo de fundo em loop atrás do texto.
- **CASES COM RESULTADO**: cada case entra com o número que gerou (o resultado lidera, a peça ilustra); a lista de clientes é rodapé, não hero. Evita parede de logos como prova principal.
- **LISTA CRUA**: trabalhos como lista tipográfica sem imagem fixa, preview flutuante no hover, informação seca (cliente, escopo, ano). Confiança pela contenção. Evita adjetivos ("incrível", "único") no lugar de evidência.

## App mobile showcase

- **CELULAR-HERÓI**: o device como objeto central ciclando 3 ou 4 telas do fluxo principal, com pausa legível em cada uma; badges das lojas junto ao CTA. Evita mockup 3D flutuando em ângulo impossível.
- **FLUXO EM TRÊS TELAS**: três devices lado a lado narrando a jornada (abrir, agir, resultado), cada tela com uma legenda de uma linha; a sequência acende da esquerda para a direita. Evita telas soltas sem ordem que não contam história.
- **FEATURE POR SCROLL**: o device fica fixo enquanto o scroll troca a tela e o texto ao lado, uma feature por seção; no mobile real, vira sequência vertical simples. Evita scroll-jacking que prende o usuário.
- **A NOTIFICAÇÃO QUE IMPORTA**: quando o valor do app é um aviso na hora certa, o hero é a notificação chegando na lockscreen e o desfecho que ela evita. Evita mostrar 20 telas quando o produto é um momento.

## Comunidade / curso

- **TRILHA DE APRENDIZADO**: o percurso do aluno como trilha que se desenha (módulos como estações, progresso enchendo, certificado no fim em micro-pop). Evita grade de cards de módulo com cadeado.
- **SALA AO VIVO**: a atividade real da comunidade como prova: feed de discussões, dúvidas respondidas com tempo de resposta, projetos postados, tudo com dados de exemplo plausíveis. Evita "junte-se a milhares de alunos" sem mostrar a vida interna.
- **MÉTODO EM CENA**: quem ensina demonstra: um trecho real de aula ou uma explicação de quadro reproduzida na página, com o método visível. Evita bio de autoridade com foto de palco e cifras de faturamento.
- **RESULTADO DO ALUNO**: antes e depois de alunos reais (projeto, cargo, portfólio) como objeto central; o curso aparece como o caminho entre os dois estados. Evita depoimento genérico sem artefato verificável.

## Link-in-bio

- **PILHA DE CARTÕES**: links como cartões empilhados com leve profundidade; o cartão sob o cursor sobe 2px e ganha o acento. Um destaque no topo (o link do momento) maior que os demais. Evita a lista de botões idênticos de gerador pronto.
- **CARTAZ ÚNICO**: a página inteira como uma composição de poster (nome, frase, links integrados à diagramação); tipografia faz o trabalho da imagem. Evita foto de fundo com overlay escuro e botões brancos.
- **BALCÃO DE ATALHOS**: grade compacta 2x3 de destinos com ícone próprio desenhado (não emoji, não biblioteca default); um contador discreto no destino principal. Evita passar de 8 links: link-in-bio é curadoria.

## Coming soon / waitlist

- **CONTAGEM E PROMESSA**: uma frase forte que diz o que vem + countdown real + campo de email; após inscrever, a página confirma com o número de posição na fila. Evita "algo incrível está chegando" sem dizer o quê.
- **TEASER RECORTADO**: um fragmento real do produto (um canto da interface, um detalhe do objeto) nítido, o resto fora do quadro; a cada semana o recorte abre mais. Evita blur genérico sobre screenshot inteiro.
- **FILA VIVA**: a própria waitlist como hero: contador subindo, últimas entradas anonimizadas pingando, mecânica de pular posições por indicação explicada em uma linha. Evita prometer acesso "em breve" sem critério.
- **DIÁRIO DE CONSTRUÇÃO**: building in public: changelog vivo com as últimas entregas datadas e a próxima meta; o email entra como "acompanhe o progresso". Evita página estática que nunca muda até o lançamento.

## Landing de produto / SaaS (catálogo estendido)

Para landing de produto, pergunte "qual é o instrumento central deste produto no dia a dia?"
e faça dele o objeto-herói do hero, vivo e com dados de exemplo realistas. Catálogo validado
em um lote real de 27 páginas (exemplos de origem govtech; cada arquétipo serve a qualquer
produto do mesmo tipo):

- **MEDIDOR/DIAL** (mede e dá nota): gauge 0-100 com arco de valor, anel de ticks e critérios que acendem em loop.
- **PORTAL/BROWSER** (gera um site/portal): o resultado dentro de um mockup de navegador, seções em tiles, varredura pulsando.
- **TRACKER DE PRAZO** (controla prazo legal): cartão de protocolo com contador de dias caindo e timeline em cascata.
- **SCANNER/AUDITORIA** (varre e aponta problemas): varredura descendo a página, pinos de achado surgindo, índice fechando.
- **PLAYER/MÍDIA** (áudio, vídeo, tradução): janela de mídia com barra AO VIVO e legenda acendendo palavra por palavra.
- **DOSSIÊ SIGILOSO** (protege identidade/denúncia): dossiê confidencial com tarja de redação varrendo e mascarando dados.
- **PORTA ÚNICA/INBOX** (centraliza canais): fluxos convergindo por um funil num item classificado, fila com prazos.
- **ESCUDO/PROTETIVA** (protege alguém/algo): escudo SVG que se preenche enquanto uma linha do tempo acende e sela.
- **FEED AO VIVO** (monitora fluxo contínuo): console com linhas entrando em cascata; a que casa o termo vigiado acende em alerta, contador sobe.
- **APP CELULAR** (app do usuário final): o celular ciclando as telas do fluxo, com pausa na tela final.
- **MAPA/COCKPIT** (rotas, campo, logística): mapa escuro onde a rota se desenha, o veículo percorre, a falha acende em vermelho.
- **DASHBOARD FÍSICO-FINANCEIRO** (acompanha execução): KPIs e barras duplas comparadas; o aviso acende quando divergem.
- **CONSULTA/TERMÔMETRO** (vota, opina): enquete preenchendo em cascata, contador de votos, termômetro que enche.
- **HEATMAP DE TEMAS** (escuta e agrega): mapa de calor regiões x temas acendendo por intensidade, top 3 se montando.
- **QUADRO DE PROPOSTAS** (delibera): kanban com barra de votos enchendo, flash ao cruzar o quórum, carimbo assentando.
- **DOSSIÊ FUNDAMENTADO** (relatório com base legal/técnica): documento que se fundamenta cláusula a cláusula, medidor de conformidade, selo.
- **CHECKLIST/TRILHA** (controle e conformidade): papel de trabalho com índice contando e cada item carimbando check em cascata.
- **REGISTRO DE BENS** (inventaria ativos): livro de registro etiquetando itens; a linha em divergência acende em vermelho.
- **CARIMBO/VERIFICAÇÃO** (aprova/reprova cadastro): cartão que se carimba APROVADO em loop: barra, varredura de fontes, selo.
- **TRILHA DE CURSO** (capacita): barra de progresso enchendo, módulos em cascata, certificado emitindo em pop.
- **SELO/BADGE** (certifica): requisitos acendem e um selo desce, gira e assenta com veredito e código verificável.
- **CONCILIAÇÃO/DIFF** (cruza duas fontes): linhas que casam ou divergem; o item em risco pulsa como sinal vital.
- **FICHA GEORREFERENCIADA** (cadastra com localização): ficha com mini-mapa onde o lote se desenha, pino cai, campos entram.
- **CARTÃO DE VERIFICAÇÃO** (autentica por hash): documento -> impressão digital -> carimbo temporal -> selo VERIFICADO, com scramble do hash.
- **SCAN-QR** (verifica por QR): retículo de câmera lê o QR, confere emissor e hash, veredito assenta (real vs. forjado).
- **CADEIA/ELOS** (prova integridade de sequência): blocos ligados por elos de hash; o ato inserido depois quebra o elo em vermelho.
- **DIÁRIO OFICIAL** (publica oficialmente): primeira página que se compõe sozinha: manchete entra, tinta seca, selo prensa.

## O TEMPLATE BANIDO (o clichê que denuncia página de IA)

Nada disto pode aparecer, em nenhuma página, de nenhum tipo:

- Hero "copy à esquerda + card à direita + 2 chips flutuantes + CTA 'Agendar 20min' +
  2 linhas de garantia com escudo". É o esqueleto que todo agente gera por default.
- As seções de recheio: banda de imagem decorativa, número oversized entre seções,
  benchmark genérico, a seção de "caso" fabricado.
- O gráfico "X é uma linha que sobe": evolução genérica com linha ascendente e área.
- "Tabela escura + a prova já vem ao lado + 3 checks": a banda escura com tabela e coluna
  de checkmarks.
- Eyebrow tracked ("· TÍTULO ·" em mono espaçado) abrindo TODA seção. Headline lidera.

Se a composição desenhada puder ser descrita por qualquer item acima, volte à prescrição e
escolha o arquétipo de novo.

## Beat "Veja em ação": a peça em destaque

Toda página ganha uma seção `id="acao"` no meio mostrando a coisa real funcionando de ponta a
ponta. Em produto/SaaS, é a APLICAÇÃO por dentro executando um fluxo do dia a dia (diferente
do hero: o hero é o instrumento, o beat é o produto em uso). Em sites que não são de produto,
o beat vira **a peça em destaque**: o prato assinatura do restaurante em preparo, o case
aberto do portfólio com processo e resultado, o post em leitura no blog com o texto correndo,
a palestra principal do evento, o projeto de aluno no curso.

### Formato (versão produto)

- `<section class="sec" id="acao">` no meio da página, depois do "como funciona".
- **Headline lidera**, sem eyebrow. Padrão que funciona: "Do X ao Y, sozinho." + lead curto.
- O palco é um mockup realista da aplicação: top-bar com mark + breadcrumb, sinal "ao vivo",
  cliente de exemplo; corpo master/detail (lista lateral em cinza + painel onde o fluxo
  acontece). Cantos retos, linhas 1px, acento só nos tokens da página.
- O fluxo em **3-4 passos numerados** dentro do detalhe (numerar aqui é legítimo: é causa e
  efeito real, não scaffolding decorativo). Sempre: entrada -> processamento -> decisão ->
  desfecho com prova.
- Acessibilidade: o mockup leva `role="img"` com `aria-label` narrando o fluxo em uma frase;
  painéis decorativos levam `aria-hidden`. Feche com "Aplicação ilustrativa com dados de
  exemplo."

### Timing (o mesmo contrato do hero)

- Loop: toca o fluxo (~5-7s, legível) -> segura no estado final ~3,5s -> reseta -> repete.
- Uma timeline GSAP (`repeat:-1, repeatDelay:3.5`, `fromTo` em tudo), pausada fora da
  viewport via ScrollTrigger `onToggle`.
- Só transform/opacity/scaleX; passos entram com `expo.out`, itens em stagger, o que
  "assenta" (status, selo, carimbo) com micro-pop `back.out(2)`.
- Estado final visível sem JS e sob reduced-motion: o CSS só esconde passos sob
  `html.fs-gsap` (ver a skill fs-motion).

### Travas do beat

- Sem eyebrow tracked, sem travessão, sem emoji, sem gradient-text, sem glass.
- `min-width:0` nos filhos do grid master/detail; a lista lateral colapsa abaixo de ~768px;
  nada de overflow horizontal.
- Contraste AA nos textos do mockup (é UI simulada, mas é texto lido de verdade).
- Gate: detector retorna `[]` na página + CSS; `node --check` no JS do beat.
