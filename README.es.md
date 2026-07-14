<div align="center">

[English](README.md) · [Português (BR)](README.pt-BR.md) · **Español**

# frontend-simple

**Frontend premium sin cara de IA.**

Metodo completo para crear sitios y paginas web con identidad propia:
descubrimiento con referencias, arquetipos de composicion, design system en
capas, tipografia premium, motion en loop, copy enterprise, auditoria
de-slop y gates de calidad.

[![CI](https://github.com/SoberanusOnline/frontend-simple/actions/workflows/validate.yml/badge.svg)](https://github.com/SoberanusOnline/frontend-simple/actions/workflows/validate.yml)
![Skills](https://img.shields.io/badge/skills-10-0f62fe)
![Agents](https://img.shields.io/badge/agents-2-161616)
![Licencia](https://img.shields.io/badge/licencia-MIT-3ddbd9)
![by NEXUS](https://img.shields.io/badge/by-NEXUS-0043ce)

<img src="docs/starter.png" alt="Template starter del kit renderizado" width="820">

*El template starter del kit, tal como sale de la caja.*

</div>

---

## Por que existe

Nacio de un proyecto real: 27 landing pages construidas a la vez. La mayor
leccion no fue de estetica sino de proceso: **el brief abierto genera clones;
la identidad viene de la prescripcion.** El kit convierte eso en metodo: cada
pagina recibe un arquetipo propio de composicion, y nada llega al usuario sin
pasar los gates (alineacion, contraste, overflow, cara de IA).

> Nota: las skills estan escritas en portugues de Brasil. Claude las sigue
> sin importar el idioma de tu conversacion, y trabaja contigo en espanol,
> ingles o cualquier otro idioma.

## Instalar

### Claude Code (terminal) recomendado

Un comando: instala y deja el **auto-update encendido**.

```bash
curl -fsSL https://raw.githubusercontent.com/SoberanusOnline/frontend-simple/main/install.sh | bash
```

Prefieres manual?

```bash
claude plugin marketplace add SoberanusOnline/frontend-simple
claude plugin install frontend-simple@frontend-simple
```

Despues reinicia Claude Code (o ejecuta `/reload-plugins`).

### Claude Code en la web (claude.ai/code)

Instala en el scope del PROYECTO dentro de un repositorio. La configuracion
va a `.claude/settings.json`, viaja en el commit, y el plugin carga tambien
en las sesiones web de ese repositorio:

```bash
claude plugin install frontend-simple@frontend-simple --scope project
git add .claude/settings.json && git commit -m "chore: agregar frontend-simple"
```

### Codex, ChatGPT, Cursor y otros agentes

Todo el conocimiento del kit es Markdown puro. Ver [AGENTS.md](AGENTS.md):
clona el repositorio y apunta tu agente a los archivos `SKILL.md`. En
ChatGPT, adjuntalos como conocimiento de un GPT personalizado.

## Usar

No hace falta mencionar el plugin. Habla natural:

> "quiero un sitio web para mi producto"
> "necesito una pagina web para el lanzamiento"
> "hazme un portafolio"
> "este sitio parece hecho por IA, arreglalo"

El kit toma el control: pide tus referencias (**pega capturas** de sitios que
te parezcan bonitos, o envia URLs), hace las 4 preguntas que importan y te
muestra **direcciones A/B/C renderizadas** para elegir antes de construir.

## Como llegan las actualizaciones

Simple: **publicamos en este repositorio (push) y listo**. El plugin usa
version rodante: cada actualizacion en GitHub ya es una version nueva.

- Instalaste con el **instalador de un comando**: el auto-update ya esta
  encendido. Claude Code descarga en segundo plano y avisa; solo ejecuta
  `/reload-plugins`.
- Instalaste **manual**: enciendelo una vez (`/plugin` > Marketplaces >
  frontend-simple > Enable auto-update) o actualiza cuando quieras:

```bash
claude plugin marketplace update frontend-simple
claude plugin update frontend-simple@frontend-simple
```

## Que hay adentro

### 10 skills

| Skill | Que hace |
|---|---|
| `fs-build` | El metodo completo en 7 pasos, del brief al gate final. Puerta de entrada; enruta las demas |
| `fs-discovery` | Descubrimiento con el usuario: capturas y URLs de referencia, las 4 preguntas correctas, direcciones A/B/C renderizadas |
| `fs-archetypes` | Catalogo de ~27 arquetipos de hero (MEDIDOR, FEED EN VIVO, MAPA, CADENA, DOSSIER, PORTAL, GACETA...) y la regla anti-clon |
| `fs-design-system` | Capas (base, marca, pagina), tokens `--fs-*`, 3 temas, CSS moderno (@layer, container queries, OKLCH) |
| `fs-typography` | Pares con intencion, catalogo curado con licencia, variable fonts self-hosted, escala fluida |
| `fs-sources` | Donde buscar en vivo: 6 acervos de fuentes, 7 de iconos (Iconify API, LobeHub...), 9 galerias de referencia, colores, fotos |
| `fs-motion` | Animacion firma en loop con pausa de lectura, reveal a prueba de JS, scroll-driven animations y View Transitions |
| `fs-copy` | Voz enterprise: headlines con tension real, estructura de hero, lo que nunca escribir |
| `fs-deslop` | Auditoria "quitar la cara de IA": los tells de diseno y copy de 2026, cada uno con su correccion |
| `fs-quality` | Gates finales: alineacion (las roturas clasicas), overflow, contraste AA, links e imagenes |

### 2 agents

| Agent | Que hace |
|---|---|
| `fs-page-builder` | Construye una pagina desde un arquetipo prescrito. Uno por pagina, en paralelo |
| `fs-critic` | Critico adversario: caza slop, desalineaciones y roturas por renderizado, antes de la entrega |

### Template starter y 3 temas

`skills/fs-build/templates/starter/` es una pagina FUNCIONAL (la de la
captura de arriba): tokens, nav premium, footer de 4 columnas, un sistema de
reveal que nunca esconde contenido sin JS, helper de loop con pausa y
servidor local sin cache. `templates/themes/`: enterprise-sharp, editorial y
dark-tech como puntos de partida de identidad.

## Filosofia

1. **Referencias antes que codigo.** Nadie sabe describir el sitio que
   quiere, pero todos reconocen lo que les parece bonito.
2. **Un arquetipo por pagina.** La composicion nace de lo que el producto ES
   (un feed, un mapa, un documento, una cadena), nunca de un template.
3. **Fuentes vivas, no bibliotecas muertas.** El kit ensena donde buscar y
   como traer el material, en vez de embarcar acervos viejos.
4. **Contenido visible sin JS.** La animacion realza; nunca esconde.
5. **Verificar renderizado.** Captura de pantalla antes de entregar, siempre.
6. **La especificidad mata el slop.** La correccion nunca es "estilizar mas":
   es anclar cada decision en el dominio real del producto.

## Preguntas rapidas

**Funciona fuera de Claude Code?** Si. Las skills son Markdown puro: Codex,
Cursor y similares las usan via [AGENTS.md](AGENTS.md); en ChatGPT, como
conocimiento de un GPT personalizado.

**Puedo usar solo una parte?** Si. Cada skill es autosuficiente: puedes
invocar solo `fs-deslop` en un sitio existente, o solo `fs-typography`.

**Como contribuyo?** Abre un issue o PR. El CI valida manifests y frontmatter,
y hasta prohibe rayas (em-dash) en el contenido.

## Skills companeras (recomendadas)

```bash
claude plugin marketplace add freshtechbro/claudedesignskills
claude plugin install gsap-scrolltrigger@claude-design-skillstack
```

Y [impeccable](https://github.com/matteing/impeccable), cuyo detector de
anti-patrones se usa como gate automatico cuando esta presente.

---

<div align="center">

Hecho por **NEXUS** · Licencia MIT · Usalo, adaptalo y crea tus propios templates

</div>
