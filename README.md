<div align="center">

**English** · [Português (BR)](README.pt-BR.md) · [Español](README.es.md)

# frontend-simple

**Premium frontend without the AI look.**

A complete method for building websites and web pages with real identity:
reference-driven discovery, composition archetypes, layered design system,
premium typography, looped motion, enterprise copy, de-slop auditing and
quality gates.

[![CI](https://github.com/SoberanusOnline/frontend-simple/actions/workflows/validate.yml/badge.svg)](https://github.com/SoberanusOnline/frontend-simple/actions/workflows/validate.yml)
![Skills](https://img.shields.io/badge/skills-10-0f62fe)
![Agents](https://img.shields.io/badge/agents-2-161616)
![License](https://img.shields.io/badge/license-MIT-3ddbd9)
![by NEXUS](https://img.shields.io/badge/by-NEXUS-0043ce)

<img src="docs/starter.png" alt="The kit starter template, rendered" width="820">

*The kit's starter template, straight out of the box.*

</div>

---

## Why it exists

Born from a real project: 27 landing pages built at once. The biggest lesson
was not about aesthetics but about process: **open briefs produce clones;
identity comes from prescription.** The kit turns that into a method: every
page gets its own composition archetype, and nothing reaches the user before
passing the gates (alignment, contrast, overflow, AI-look).

> Note: the skills themselves are currently written in Brazilian Portuguese.
> Claude follows them regardless of your conversation language, and works
> with you in English, Spanish or any other language.

## Install

### Claude Code (terminal) recommended

One command: installs and turns **auto-update on**.

```bash
curl -fsSL https://raw.githubusercontent.com/SoberanusOnline/frontend-simple/main/install.sh | bash
```

Prefer manual?

```bash
claude plugin marketplace add SoberanusOnline/frontend-simple
claude plugin install frontend-simple@frontend-simple
```

Then restart Claude Code (or run `/reload-plugins`).

### Claude Code on the web (claude.ai/code)

Install at PROJECT scope inside a repository. The configuration goes into
`.claude/settings.json`, travels with the commit, and the plugin loads in web
sessions of that repository too (for every collaborator who trusts the repo):

```bash
claude plugin install frontend-simple@frontend-simple --scope project
git add .claude/settings.json && git commit -m "chore: add frontend-simple"
```

### Codex, ChatGPT, Cursor and other agents

All of the kit's knowledge is plain Markdown. See [AGENTS.md](AGENTS.md):
clone the repository and point your agent at the `SKILL.md` files. In
ChatGPT, attach them as knowledge for a custom GPT.

## Use

No need to mention the plugin. Just say it naturally:

> "I want a website for my product"
> "I need a web page for the launch"
> "build me a portfolio"
> "this site looks AI-generated, fix it"

The kit takes over: it asks for your references (**paste screenshots** of
sites you find beautiful, or send URLs), asks the 4 questions that matter,
and shows you **rendered directions A/B/C** to choose from before building.
Only then it builds, with visual verification and gates before showing you
anything.

## How updates arrive

Simple: **we publish to this repository (push) and that is it**. The plugin
uses rolling versions: every update on GitHub is already a new version.

- Installed via the **one-command installer**: auto-update is already on.
  Claude Code downloads in the background and notifies you; just run
  `/reload-plugins`.
- Installed **manually**: enable it once (`/plugin` > Marketplaces >
  frontend-simple > Enable auto-update) or update whenever you want:

```bash
claude plugin marketplace update frontend-simple
claude plugin update frontend-simple@frontend-simple
```

## What is inside

### 10 skills

| Skill | What it does |
|---|---|
| `fs-build` | The complete 7-step method, from brief to final gate. Entry point; routes the others |
| `fs-discovery` | Discovery with the user: reference screenshots and URLs, the 4 right questions, rendered A/B/C directions |
| `fs-archetypes` | Catalog of ~27 hero archetypes (GAUGE, LIVE FEED, MAP, CHAIN, DOSSIER, PORTAL, GAZETTE...) and the anti-clone rule |
| `fs-design-system` | Layers (base, brand, page), `--fs-*` tokens, 3 themes, modern CSS (@layer, container queries, OKLCH) |
| `fs-typography` | Intentional pairings, curated catalog with licensing, self-hosted variable fonts, fluid scale |
| `fs-sources` | Where to search live: 6 font libraries, 7 icon sources (Iconify API, LobeHub...), 9 design galleries, colors, photos |
| `fs-motion` | Signature animation looping with a read pause, JS-proof reveal, scroll-driven animations and View Transitions |
| `fs-copy` | Enterprise voice: headlines with real tension, hero structure, what never to write |
| `fs-deslop` | "Remove the AI look" audit: the 2026 design and copy tells, each with its fix |
| `fs-quality` | Final gates: alignment (the classic breakages), overflow, AA contrast, links and images |

### 2 agents

| Agent | What it does |
|---|---|
| `fs-page-builder` | Builds one page from a prescribed archetype. One per page, in parallel |
| `fs-critic` | Adversarial critic: hunts slop, misalignments and breakage by rendering, before delivery |

### Starter template and 3 themes

`skills/fs-build/templates/starter/` is a WORKING page (the one in the
screenshot above): tokens, premium nav, 4-column footer, a reveal system that
never hides content without JS, a loop-with-pause helper and a no-cache local
server. `templates/themes/`: enterprise-sharp, editorial and dark-tech as
identity starting points.

## Philosophy

1. **References before code.** Nobody can describe the site they want, but
   everyone recognizes what they find beautiful. Discovery turns that into
   direction.
2. **One archetype per page.** Composition comes from what the product IS
   (a feed, a map, a document, a chain), never from a template.
3. **Living sources, not dead libraries.** The kit teaches where to search
   (fonts, colors, references, icons) and how to bring material in, instead
   of shipping stale collections.
4. **Content visible without JS.** Animation enhances; it never hides.
5. **Verify rendered.** Screenshot before delivering, always.
6. **Specificity kills slop.** In design and copy, the fix is never "style
   it more": it is anchoring every decision in the product's real domain.

## Quick questions

**Does it work outside Claude Code?** Yes. The skills are plain Markdown:
Codex, Cursor and similar tools use them via [AGENTS.md](AGENTS.md); in
ChatGPT, as knowledge for a custom GPT. What stays Claude Code exclusive:
native install, auto-update and the 2 agents as automatic subagents.

**Can I use just a part of it?** Yes. Every skill is self-contained: you can
invoke only `fs-deslop` on an existing site, or only `fs-typography`.

**How do I contribute?** Open an issue or PR. The CI validates manifests and
frontmatter, and even forbids em-dashes in the content (the standard applies
to itself).

## Companion skills (recommended)

```bash
claude plugin marketplace add freshtechbro/claudedesignskills
claude plugin install gsap-scrolltrigger@claude-design-skillstack
```

And [impeccable](https://github.com/matteing/impeccable), whose anti-pattern
detector is used as an automatic gate when present.

---

<div align="center">

Made by **NEXUS** · MIT License · Use it, adapt it, and build your own templates

</div>
