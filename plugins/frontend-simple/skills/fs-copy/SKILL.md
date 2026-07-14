---
name: fs-copy
description: A voz de copy enterprise do kit frontend-simple: headlines com tensão real, estrutura de hero em 5 partes, autoridade por números e leis do domínio, microcopy de interface, formatos de escrita (case study, pricing, FAQ, meta) e hierarquia de CTAs. Usar ao escrever ou revisar qualquer texto de landing page ou interface.
---

# Copy: a voz enterprise

A copy do kit é sólida, específica e com tensão real: fala do risco concreto que o leitor
carrega (o prazo, a glosa, a revelia) e da prova que o produto entrega. Nada de marketing
desbotado. A headline lidera cada seção; o contexto vem na lead.

## Headline: sólida, que lidera

- Sem palavra desbotada ("soluções", "inovador", "eficiência", "moderno").
- Específica: nomeia o ato, o prazo, a lei, o objeto ("a intimação", "o empenho",
  "a rua pulada"), com tensão real (o que acontece se ninguém agir).
- Ênfase por PESO ou por sublinhado no acento, nunca por cor desbotada, gradient-text
  ou serif itálico:

```css
.hl-mark{ font-style:normal; font-weight:600; color:var(--fs-ink);
  box-shadow:inset 0 -0.14em 0 color-mix(in srgb, var(--fs-accent) 34%, transparent);
  padding-bottom:.02em }
```

- A headline abre a seção. Eyebrow tracked em mono uppercase abrindo toda seção é cara
  de IA e está banido como padrão (um kicker mono discreto é aceitável só no hero).

## Exemplares reais (o nível a atingir) e o mecanismo de cada um

Headlines reais de um lote govtech, anonimizadas. O valor está no mecanismo, que se
transporta para qualquer domínio:

1. "O prazo que vira revelia foi publicado hoje." (monitoramento de diário oficial, hero)
   Mecanismo: consequência jurídica + urgência de "hoje". O risco já está correndo.
2. "Empenho, medição e pagamento travados no instante, cada um encadeado ao anterior
   por hash." (integridade de despesa, hero)
   Mecanismo: nomeia os três objetos do domínio e o COMO técnico numa frase só.
3. "A coleta passou nesta rua? O mapa prova, rua por rua." (fiscalização de rota, hero)
   Mecanismo: a pergunta que o leitor já faz + resposta com prova, não com promessa.
4. "A denúncia chega. Ninguém descobre quem falou." (canal de denúncias, hero)
   Mecanismo: duas frases curtas, a segunda mata o medo central do usuário.
5. "Vinte e sete produtos de governança. Uma plataforma só para o setor público."
   (home de portfólio, hero)
   Mecanismo: número por extenso dá peso; o contraste muitos/um organiza a oferta.
6. "Você diz o que vigiar. O radar dispara sozinho." (seção de regras de monitoramento)
   Mecanismo: divisão de trabalho humano/máquina; "sozinho" é a promessa de autonomia.
7. "Ler o diário é de graça. A publicação perdida sai caro." (seção de custo)
   Mecanismo: contraste de preço em duas frases; reframa a objeção "isso eu faço de graça".
8. "Sem caso de vitrine. Só o método, na mesa." (seção de método, produto sem case)
   Mecanismo: honestidade que vira força; admite a fraqueza antes do leitor apontar.
9. "O preço pelo risco que sai da mesa, não pelo acesso ao diário." (seção de preço)
   Mecanismo: ancora o preço no valor removido, não na feature entregue.
10. "Do alerta à tarefa roteada, sozinho." (beat "Veja em ação")
    Mecanismo: fórmula "Do X ao Y" comprime o fluxo inteiro; "sozinho" fecha.
11. "Construído sobre as normas que o controle externo cobra." (matriz de normas)
    Mecanismo: autoridade emprestada do auditor; fala a língua de quem aprova a compra.

Repare nos padrões: frase curta com consequência, pergunta + resposta com prova, contraste
em duas frases, promessa de autonomia. Cada produto tem a SUA tensão.

## Estrutura do hero copy (5 partes)

1. **Kicker mono discreto (opcional)**: fatos em mono separados por marcadores
   ("Plataforma govtech · 27 produtos em operação · 7 famílias"). Sem uppercase gritado.
2. **Headline** com 1 trecho enfatizado (`.hl-mark` ou peso).
3. **Lead de 2-3 linhas**, concreta: o cenário real + o que o produto faz, com objeto e
   verbo ("Lê o diário todo dia, dispara quando casa um termo vigiado, extrai o prazo e
   avisa a área certa.").
4. **CTAs**: 1 primário específico ("Pedir piloto no meu município") + 1 ghost que aponta
   para o instrumento ("Ver o radar por dentro"). Nunca "Agendar 20min". O verbo do CTA
   vem do domínio, não do marketing.
5. **1 linha de garantia** com ícone pequeno: remove o medo da compra ("Piloto sem
   compromisso. O diário é público e gratuito. O que custa é a publicação que escapou.").

## Números e leis reais dão autoridade

Cite a norma com número e o dado com precisão: LAI 12.527 e o prazo de 20 dias, LGPD
13.709, Lei 13.460, CPC art. 335, RFC 3161, SHA-256, WCAG 2.1 AA. "4.812 publicações
lidas" convence; "milhares de publicações" não. A base legal aparece ao lado do dado que
ela fundamenta, não num rodapé genérico.

Falar a língua do comprador do domínio. No setor público: revelia, glosa, apontamento do
tribunal de contas, empenho, medição, protocolo, acórdão. É o vocabulário que prova que o
produto entende a dor. Em outro domínio, troque pelo jargão equivalente (churn, SLA,
chargeback, auditoria SOC 2).

## Depoimentos e disclaimers

- Depoimentos com persona plausível (nome, cargo real do setor: "Procuradora-geral,
  município de médio porte"), texto que conta um episódio concreto com 1 trecho em `<b>`.
- SEMPRE a nota de honestidade: "Cenários ilustrativos com personas de exemplo" (junto
  aos depoimentos) e o disclaimer completo no footer ("Demonstração de produto. Os
  números e cenários exibidos são ilustrativos e anonimizados.").
- Quando não há case real, diga isso com elegância e vire força:
  "Sem caso de vitrine. Só o método, na mesa."

## Proibições (gate de copy)

- **Travessão (o traço longo e o médio) em qualquer texto.** Use hífen simples, dois
  pontos ou reformule a frase.
- **Emoji**, em qualquer lugar, inclusive comentários e commits do projeto.
- Eyebrow tracked abrindo seções.
- Copy genérica: "soluções inovadoras", "transforme sua gestão", "tecnologia de ponta",
  "leve X para o próximo nível".
- Repetição de bordão entre páginas: se duas páginas do lote têm a mesma headline-fórmula,
  uma delas está errada. Cada produto tem a sua tensão.
- Superlativo sem prova ("o melhor", "líder"). A prova substitui o adjetivo.

## FAQ e CTA final

- Perguntas do FAQ na voz do comprador cético, inclusive a objeção dura ("O diário é
  público, o servidor mesmo consegue ler."), respondida com respeito e um argumento real.
- CTA final em banda escura: repete a oferta com o cenário concreto ("Veja o radar rodar
  com os diários do seu município, antes de assinar.") + linha de condições em mono
  ("Piloto sem compromisso · cobertura calibrada com você · fonte sempre citável").

## Fórmulas de headline por tipo de site

As fórmulas abaixo transportam os mecanismos dos exemplares para outros tipos de site.
Duas por tipo, com exemplo preenchido: troque os substantivos pelos do domínio real.

**Produto / SaaS**
- Objeto + estado: "Pedido, estoque e nota conciliados no instante."
- Divisão humano/máquina: "Você define a regra. O sistema cobra sozinho."

**Portfólio**
- Manifesto curto: "Menos telas. Mais decisão."
- Prova em número: "Catorze projetos entregues. Onze ainda no ar."

**Blog / editorial**
- Tese que divide: "Reunião de status é sintoma, não ferramenta."
- Pergunta + prova: "O onboarding funciona? Os dados dos primeiros 90 dias respondem."

**Restaurante / local**
- Apetite / sentido: "Massa aberta na hora, molho que ferveu o dia inteiro."
- Origem + tempo: "O mesmo pão, a mesma fornada, desde 1987."

**Evento**
- Consequência temporal: "Em dois dias, o assunto que vai ocupar o seu ano inteiro."
- Quem estará na sala: "As trezentas pessoas que decidem esse mercado, numa sala só."

**Agência**
- Manifesto curto: "Fazemos menos projetos. Entregamos cada um inteiro."
- Aposta com prova: "Se a página não converter mais que a atual, o refação é nosso."

**Docs**
- Utilidade direta: "Do zero ao primeiro deploy em dez minutos."
- Objeto + estado: "Toda rota, todo parâmetro, toda resposta de erro. Nesta página."

**E-commerce**
- Objeção morta: "Troca grátis em 30 dias. O risco da compra é nosso."
- Especificidade material: "Algodão penteado de 210 gramas. Dura mais que a tendência."

**Pessoal**
- Identidade + prova: "Escrevo sobre dados. Doze anos limpando planilha alheia."
- Convite direto: "Um ensaio por semana sobre o que ninguém documenta."

## Microcopy (a interface fala)

Toda string da interface é copy: botão, label, erro, toast, estado vazio. As mesmas
regras da headline valem aqui, em escala menor: específico, verbo do domínio, sem drama.

**Botões**
- Verbo do domínio + objeto: "Publicar edital", "Exportar relatório", "Reservar mesa".
- Nunca "Saiba mais", "Clique aqui", "Enviar" seco. O rótulo diz o que acontece depois.
- O mesmo rótulo acompanha o fluxo do início ao fim: botão "Publicar" gera modal
  "Publicar agora?" e toast "Publicado". Trocar o verbo no meio ("Enviar" vira
  "Concluído com sucesso") quebra a confiança de que foi a mesma ação.

**Formulários**
- Label visível sempre, acima do campo. Placeholder não é label: ele some ao digitar
  e leva a instrução junto. Placeholder serve só para formato ("nome@empresa.com").
- Ajuda antes do erro: se o campo tem regra (mínimo de caracteres, formato de CNPJ),
  a dica aparece junto do label, não como surpresa depois do submit.
- Um pedido por campo. "Nome completo e cargo" em um campo só vira dado sujo.

**Erros**
- Fórmula: o que houve + como resolver, no campo onde houve. Específico, sem culpar o
  usuário, sem desculpa dramática.
- Bom: "Esse CNPJ tem 13 dígitos. O formato é 00.000.000/0000-00."
- Ruim: "Ops! Algo deu errado :( Tente novamente." (não diz o quê, não diz como, e o
  tom de pedido de desculpas não conserta nada).
- Erro de sistema (não do usuário): admita o lado de cá e dê saída. "Não conseguimos
  salvar agora. Suas alterações estão no rascunho; tente de novo em instantes."

**Empty states**
- Estado vazio é convite a agir, não tristeza. Nada de "Nenhum item encontrado" seco
  nem ilustração melancólica.
- Fórmula: o que este espaço vai mostrar + o primeiro passo. "Seus relatórios aparecem
  aqui. Crie o primeiro a partir de um modelo." Com o botão da ação junto.

**Confirmações e toasts**
- Curtos, no particípio, fato consumado: "Publicado", "Exportado", "Convite enviado".
- Sem celebração ("Uhu! Tudo certo!") e sem repetir o óbvio em duas frases.
- Se a ação é reversível, a saída mora no toast: "Item arquivado. Desfazer".

**Loading**
- Acima de 1 segundo, diga o que está acontecendo: "Gerando o PDF...", "Conferindo o
  estoque...". Spinner mudo só até 1s. Acima de 10s, mostre progresso ou estimativa.

**Tabela bom vs ruim**

| Ruim | Bom |
| --- | --- |
| Saiba mais | Ver o método completo |
| Enviar | Pedir orçamento |
| Ops! Algo deu errado | Não conseguimos carregar os pedidos. Recarregue a página. |
| Campo inválido | A data final vem antes da inicial. Inverta o período. |
| Nenhum resultado encontrado | Nada com "fiscal" no nome. Busque por número do processo. |
| Sucesso! | Relatório exportado |
| Carregando... (30s mudo) | Conciliando 4.200 lançamentos... isso leva um minuto. |
| Tem certeza que deseja excluir? | Excluir "Contrato 042"? Os anexos vão junto. |

## Estruturas de formato (esqueletos de escrita)

Esqueletos prontos para os formatos que toda landing acaba pedindo. A ordem das partes
importa tanto quanto o texto.

**CASE STUDY**
1. Contexto em 2 linhas: quem é o cliente, tamanho, setor. Sem biografia.
2. Problema com número: "perdia 14 horas por semana conferindo planilha na mão".
3. Abordagem: o que foi feito, em 3-4 frases com os objetos do domínio.
4. Resultado com número e prazo: "de 14 horas para 40 minutos, no segundo mês".
5. Citação do cliente: uma frase que conta episódio, não elogio ("No fechamento de
   março a auditoria pediu o histórico e saiu em uma tarde.").

**SOBRE**
- Origem em 1 parágrafo: o problema que fez a empresa existir, não a linha do tempo.
- Crença / como trabalhamos em 3 bullets concretos ("Entregamos em produção toda
  sexta", não "Valorizamos a excelência").
- Time com nome + papel real ("Ana Souza, responde pelo suporte"), não cargo inflado.

**PRICING**
- Nome do plano diz quem é o usuário ("Para um município", "Para consórcios"), não
  metal precioso ("Gold", "Platinum").
- Preço com unidade clara: por mês, por usuário, por unidade gestora. Sem asterisco
  que esconde a conta.
- 5-7 itens por tier, em ordem de valor (o motivo da compra primeiro), não em ordem
  alfabética de feature.
- Nota de garantia embaixo da tabela: cancelamento, piloto, migração. Remove o medo
  no ponto exato onde ele nasce.

**FAQ**
- Pergunta escrita como o usuário pergunta ("Preciso trocar meu sistema atual?"), não
  como a empresa gostaria ("Quais as sinergias da plataforma?").
- Resposta em 2-4 linhas começando pela resposta ("Não. A integração lê o que já
  existe...") e só depois o detalhe.

**POST / ARTIGO**
- Título específico com a tese ("Por que o backlog de 200 itens é um cemitério"), não
  tema ("Sobre gestão de backlog").
- Dek de 1 frase abaixo do título: a promessa do texto.
- Intro que promete: em 3 linhas o leitor sabe o que vai levar se ler até o fim.
- Subtítulos que contam a história sozinhos: quem só escaneia os H2 entende o argumento.

**META / SEO**
- Title com 50-60 caracteres e a promessa dentro: "Controle de empenho com trilha de
  auditoria | NomeDoProduto".
- Description com 140-155 caracteres começando por verbo: "Concilie empenho, medição e
  pagamento em uma tela. Trilha completa para a prestação de contas."

## Presets de tom

Escolha 1 preset por site e sustente em toda string, do hero ao erro 404. Misturar tons
entre seções é o sintoma mais comum de copy escrita por partes.

**Sóbrio institucional** (governo, jurídico, saúde)
- Preciso, calmo, responsável.
- Headline: "O processo inteiro, com trilha de auditoria desde o protocolo."
- CTA: "Solicitar demonstração técnica"
- Nunca faz: piada, gíria, exclamação.

**Técnico confiante** (devtools, infraestrutura, dados)
- Direto, denso, verificável.
- Headline: "Deploy atômico com rollback em um comando."
- CTA: "Ler a documentação"
- Nunca faz: promessa sem número ou prova reproduzível.

**Editorial autoral** (blog, newsletter, portfólio de escrita)
- Opinativo, específico, em primeira pessoa.
- Headline: "Parei de estimar em horas. O projeto agradeceu."
- CTA: "Assinar os ensaios"
- Nunca faz: voz neutra de assessoria de imprensa.

**Comercial enérgico** (e-commerce, apps de consumo, fitness)
- Vivo, concreto, urgente sem gritar.
- Headline: "Sai do forno às 18h. Às 18h40 está na sua mesa."
- CTA: "Pedir agora"
- Nunca faz: urgência falsa ("últimas unidades!" sem estoque real).

**Comunitário próximo** (associações, educação, projetos locais)
- Caloroso, direto, no plural.
- Headline: "A horta é do bairro. A colheita de sábado também."
- CTA: "Participar do próximo mutirão"
- Nunca faz: jargão corporativo ("stakeholders", "sinergia").

## Ações e CTAs (hierarquia)

- **1 CTA primário por dobra, no máximo.** Dois botões sólidos lado a lado é empate,
  e empate ninguém clica. O secundário é ghost e aponta para o caminho de quem ainda
  não está pronto ("Ver o método", "Comparar planos").
- Hierarquia visual = hierarquia de intenção: o botão mais forte da tela é a ação que
  o negócio mais quer, e só ele. Ações destrutivas nunca herdam o estilo primário.
- O CTA final da página repete o primário com contexto novo: quem rolou até o fim já
  leu os argumentos, então o rótulo pode assumir mais ("Pedir piloto no meu município"
  no hero vira "Começar o piloto com os dados de janeiro" no rodapé).
- Formulário de captura pede o mínimo: e-mail só, quando possível. Cada campo a mais
  derruba conversão; cargo e telefone se pedem depois, quando já há relação.
- O verbo vem do domínio, não do marketing:

| Domínio | Verbos certos |
| --- | --- |
| SaaS B2B | Pedir piloto, Agendar demonstração técnica, Testar com meus dados |
| E-commerce | Adicionar à sacola, Calcular frete, Finalizar compra |
| Restaurante | Reservar mesa, Ver o cardápio, Pedir para hoje |
| Evento | Garantir vaga, Ver a programação, Inscrever minha equipe |
| Docs / devtools | Ler o guia, Copiar o snippet, Rodar o exemplo |
| Editorial | Assinar, Ler o ensaio, Receber toda sexta |
| Serviço local | Pedir orçamento, Chamar no WhatsApp, Ver trabalhos na região |
