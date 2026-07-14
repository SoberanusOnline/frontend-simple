# frontend-simple

**Frontend premium sem cara de IA.** Um plugin do Claude Code com o metodo
completo para criar landing pages e sites com identidade propria por pagina:
arquetipos de composicao, design system em camadas, motion em loop com pausa,
copy enterprise, auditoria de-slop e gates de qualidade. Nascido de um projeto
real de 27 landing pages construidas de uma vez, onde a maior licao foi:
**brief aberto gera clones; identidade vem de prescricao.**

## Instalacao

```bash
claude plugin marketplace add SoberanusOnline/frontend-simple
claude plugin install frontend-simple@frontend-simple
```

Reinicie o Claude Code e peca: *"crie uma LP para meu produto com o
frontend-simple"*. A skill `fs-build` assume dali em diante.

**Claude Code na web (claude.ai/code):** instale no escopo do projeto para o
plugin viajar com o repositorio e funcionar tambem nas sessoes web:

```bash
claude plugin install frontend-simple@frontend-simple --scope project
```

**Atualizacoes:** o plugin usa versao semantica pinada. Para receber novidades:

```bash
claude plugin marketplace update frontend-simple
claude plugin update frontend-simple
```

## O que vem dentro

### 7 skills

| Skill | O que faz |
|---|---|
| `fs-build` | O metodo em 7 passos, do briefing ao gate final. E a porta de entrada; roteia as demais |
| `fs-archetypes` | Catalogo de ~27 arquetipos de composicao de hero (MEDIDOR, FEED AO VIVO, MAPA, CADEIA, DOSSIE, PORTAL, DIARIO...) e a regra anti-clone |
| `fs-design-system` | Arquitetura em camadas (base, marca, pagina), tokens `--fs-*`, nav e footer premium, 3 temas prontos |
| `fs-motion` | Animacao-assinatura em loop com pausa de leitura, reveal blindado sem JS, fluidez sem jank |
| `fs-copy` | Voz enterprise: headlines com tensao real, estrutura de hero, o que nunca escrever |
| `fs-deslop` | Auditoria "tirar cara de IA": os tells de design e copy de 2026 e a correcao de cada um |
| `fs-quality` | Gates finais: alinhamento (os "tortos" classicos), overflow, contraste AA, links e imagens |

### 2 agents

| Agent | O que faz |
|---|---|
| `fs-page-builder` | Constroi uma pagina a partir de um arquetipo prescrito. Um por pagina, em paralelo, sem tocar em arquivos compartilhados |
| `fs-critic` | Critico adversario: caca slop, tortos e quebras por renderizacao, e da o veredito antes da entrega |

### Template starter

`skills/fs-build/templates/starter/`: pagina funcional com a base inteira
(tokens, nav, footer, sistema de reveal, helper de loop, servidor local sem
cache). Copie, troque os tokens e a marca, e construa por cima.
`templates/themes/`: tres pontos de partida de identidade (enterprise-sharp,
editorial, dark-tech).

## Filosofia

1. **Arquetipo por pagina.** A composicao do hero nasce do que o produto E
   (um feed, um mapa, um documento, uma cadeia), nunca de um template.
2. **Conteudo visivel sem JS.** Animacao realca; nunca esconde.
3. **Verificar renderizado.** Screenshot antes de entregar, sempre. Codigo
   que "parece certo" nao prova nada.
4. **Especificidade mata slop.** No design e na copy, a correcao nunca e
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
