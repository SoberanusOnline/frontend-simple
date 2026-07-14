# frontend-simple

**Frontend premium sem cara de IA.** Um plugin do Claude Code com o metodo
completo para criar sites e paginas web com identidade propria: descoberta
com referencias e opcoes A/B/C, arquetipos de composicao, design system em
camadas, tipografia premium, motion em loop, copy enterprise, auditoria
de-slop e gates de qualidade. Nascido de um projeto real de 27 landing pages
construidas de uma vez, onde a maior licao foi: **brief aberto gera clones;
identidade vem de prescricao.**

## Instalacao

```bash
claude plugin marketplace add SoberanusOnline/frontend-simple
claude plugin install frontend-simple@frontend-simple
```

Reinicie o Claude Code (ou rode `/reload-plugins`). Pronto: nao precisa citar
o plugin. Peca do seu jeito:

> *"quero fazer um site para meu produto"* · *"preciso de uma pagina web"* ·
> *"monta um portfolio pra mim"* · *"cria a landing do lancamento"*

A skill `fs-build` reconhece o pedido e assume: começa perguntando suas
referencias (cole prints de sites que voce acha bonitos, ou mande URLs) e
apresenta direcoes A/B/C renderizadas para voce escolher antes de construir.

**Claude Code na web (claude.ai/code):** instale no escopo do projeto para o
plugin viajar com o repositorio:

```bash
claude plugin install frontend-simple@frontend-simple --scope project
```

## Atualizacoes automaticas

O plugin usa versao rolante: todo push neste repositorio ja e uma versao
nova. Para receber tudo automaticamente, ligue o auto-update do marketplace
(uma vez so):

1. Rode `/plugin` e abra a aba **Marketplaces**
2. Selecione **frontend-simple**
3. Escolha **Enable auto-update**

Com isso o Claude Code atualiza o kit em background e avisa quando ha
novidade (basta rodar `/reload-plugins`). Sem o toggle, atualize manualmente:

```bash
claude plugin marketplace update frontend-simple
claude plugin update frontend-simple
```

## O que vem dentro

### 9 skills

| Skill | O que faz |
|---|---|
| `fs-build` | O metodo completo, do briefing ao gate final. Porta de entrada; roteia as demais |
| `fs-discovery` | Descoberta com o usuario: prints e URLs de referencia, 4 perguntas certas, direcoes A/B/C renderizadas para escolher |
| `fs-archetypes` | Catalogo de ~27 arquetipos de composicao de hero (MEDIDOR, FEED AO VIVO, MAPA, CADEIA, DOSSIE, PORTAL, DIARIO...) e a regra anti-clone |
| `fs-design-system` | Camadas (base, marca, pagina), tokens `--fs-*`, 3 temas, e CSS moderno 2026 (@layer, container queries, OKLCH) |
| `fs-typography` | Tipografia premium: pares com intencao, catalogo curado com licenca livre, self-host de variable fonts, escala fluida |
| `fs-motion` | Assinatura em loop com pausa, reveal blindado sem JS, fluidez, e motion nativo (scroll-driven animations, View Transitions) |
| `fs-copy` | Voz enterprise: headlines com tensao real, estrutura de hero, o que nunca escrever |
| `fs-deslop` | Auditoria "tirar cara de IA": os tells de design e copy de 2026 e a correcao de cada um |
| `fs-quality` | Gates finais: alinhamento (os "tortos" classicos), overflow, contraste AA, links e imagens |

### 2 agents

| Agent | O que faz |
|---|---|
| `fs-page-builder` | Constroi uma pagina a partir de um arquetipo prescrito. Um por pagina, em paralelo, sem tocar em arquivos compartilhados |
| `fs-critic` | Critico adversario: caca slop, tortos e quebras por renderizacao, e da o veredito antes da entrega |

### Template starter e temas

`skills/fs-build/templates/starter/`: pagina funcional com a base inteira
(tokens, nav, footer, sistema de reveal, helper de loop, servidor local sem
cache). `templates/themes/`: tres pontos de partida (enterprise-sharp,
editorial, dark-tech).

## Filosofia

1. **Referencia antes de codigo.** O usuario reconhece o que acha bonito;
   a descoberta transforma isso em direcao concreta (A/B/C) antes de construir.
2. **Arquetipo por pagina.** A composicao nasce do que o produto E (um feed,
   um mapa, um documento, uma cadeia), nunca de um template.
3. **Conteudo visivel sem JS.** Animacao realca; nunca esconde.
4. **Verificar renderizado.** Screenshot antes de entregar, sempre.
5. **Especificidade mata slop.** No design e na copy, a correcao nunca e
   "estilizar mais": e ancorar cada decisao no dominio real.

## Skills companheiras (recomendadas)

```bash
claude plugin marketplace add freshtechbro/claudedesignskills
claude plugin install gsap-scrolltrigger@claude-design-skillstack
```

E o [impeccable](https://github.com/matteing/impeccable), cujo detector de
anti-padroes e usado como gate automatico quando presente.

---

Feito pela **NEXUS**. Licenca MIT. Use, adapte e crie os seus proprios
templates.
