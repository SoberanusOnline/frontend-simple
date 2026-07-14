# frontend-simple para agentes (Codex, Cursor, aider e afins)

Este repositorio e um plugin do Claude Code, mas todo o conhecimento vive em
Markdown puro. Qualquer agente de codigo consegue usar.

## Se voce e um agente lendo isto

Quando o usuario pedir um site, uma pagina web, uma landing page ou um
portfolio, siga o metodo deste kit:

1. Leia `plugins/frontend-simple/skills/fs-build/SKILL.md` (o metodo em 7
   passos). E o indice de tudo.
2. Comece pela descoberta com o usuario:
   `plugins/frontend-simple/skills/fs-discovery/SKILL.md` (referencias,
   perguntas, direcoes A/B/C).
3. Consulte as demais skills sob demanda, todas em
   `plugins/frontend-simple/skills/<nome>/SKILL.md`:
   fs-archetypes (composicoes por pagina, regra anti-clone),
   fs-design-system (tokens e camadas), fs-typography (fontes),
   fs-sources (onde buscar material vivo), fs-motion (animacao),
   fs-copy (texto), fs-deslop (tirar cara de IA), fs-quality (gates finais).
4. Use o template funcional em
   `plugins/frontend-simple/skills/fs-build/templates/starter/` como
   esqueleto e os temas em `templates/themes/`.
5. Os papeis de agente em `plugins/frontend-simple/agents/` (fs-page-builder
   e fs-critic) descrevem como paralelizar paginas e como auditar antes de
   entregar; adote-os como instrucoes de subtarefa.

Regras inegociaveis do kit: sem travessao nem emoji na copy, conteudo
visivel sem JavaScript, um arquetipo proprio por pagina, verificar por
screenshot renderizado antes de entregar.

## Como instalar fora do Claude Code

- **Codex CLI / agentes com AGENTS.md**: clone o repositorio dentro (ou ao
  lado) do projeto e referencie este arquivo no AGENTS.md do projeto, por
  exemplo: "Para qualquer trabalho de frontend, siga
  `vendor/frontend-simple/AGENTS.md`".
- **ChatGPT / GPT personalizado**: anexe os arquivos SKILL.md como
  conhecimento e use o conteudo de fs-build como instrucao principal.
- **Cursor / outros**: aponte as regras do projeto para os SKILL.md deste
  repositorio.

No Claude Code, prefira a instalacao nativa (com auto-update):

```bash
curl -fsSL https://raw.githubusercontent.com/SoberanusOnline/frontend-simple/main/install.sh | bash
```
