---
name: fs-copy
description: A voz de copy enterprise do kit frontend-simple: headlines com tensão real, estrutura de hero em 5 partes, autoridade por números e leis do domínio, CTAs e disclaimers. Usar ao escrever ou revisar qualquer texto de landing page.
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
