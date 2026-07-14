# frontend-simple for AI coding agents

This repository ships **Agent Skills in the open SKILL.md format**, organized
as a Claude Code plugin. The skills are plain Markdown directories, so any
agent that supports the SKILL.md standard (or that can read files) can use
the kit: Codex CLI, Gemini CLI, GitHub Copilot, Cursor, Windsurf, Cline,
Antigravity and others.

## If you are an agent reading this

When the user asks for a website, a web page, a landing page, a portfolio,
a blog, docs or any other web surface, follow this kit's method:

1. Read `plugins/frontend-simple/skills/fs-build/SKILL.md` first. It is the
   index: the 7-step method and the routing map to every other skill.
2. Start with discovery:
   `plugins/frontend-simple/skills/fs-discovery/SKILL.md` (reference
   screenshots and URLs from the user, 4 key questions, rendered A/B/C
   directions to choose from).
3. Consult the other skills on demand, all under
   `plugins/frontend-simple/skills/<name>/SKILL.md`:
   `fs-archetypes` (composition per page and site type, anti-clone rule),
   `fs-pages` (page blueprints), `fs-sections` (nav, footers, section
   blocks), `fs-backgrounds` (background recipes), `fs-design-system`
   (tokens and layers), `fs-typography` (fonts), `fs-sources` (where to
   find live material), `fs-motion` (animation principles), `fs-text-fx`
   (page entrance and text effects), `fs-copy` (writing), `fs-deslop`
   (remove the AI look), `fs-quality` (final gates).
4. Use the working template in
   `plugins/frontend-simple/skills/fs-build/templates/starter/` as the
   skeleton and the themes in `templates/themes/`.
5. The agent roles in `plugins/frontend-simple/agents/` (fs-page-builder,
   fs-critic) describe how to parallelize pages and how to audit before
   delivery; adopt them as subtask instructions.

Non-negotiable rules: no em-dashes and no emoji in copy, content must be
visible without JavaScript, one composition archetype per page, and always
verify by rendered screenshot before delivering.

## Install per tool

**Claude Code** (native, with auto-update):

```bash
curl -fsSL https://raw.githubusercontent.com/SoberanusOnline/frontend-simple/main/install.sh | bash
```

**Codex CLI and other SKILL.md-compatible agents**: copy the skill
directories into your agent's skills folder (for Codex, typically
`~/.codex/skills/`):

```bash
git clone https://github.com/SoberanusOnline/frontend-simple /tmp/fs
cp -r /tmp/fs/plugins/frontend-simple/skills/* <your-agent-skills-folder>/
```

**Cursor / Windsurf / Copilot / Antigravity (project-level)**: vendor the
repo and point your project instructions at this file:

```bash
git submodule add https://github.com/SoberanusOnline/frontend-simple vendor/frontend-simple
```

Then add one line to your project's AGENTS.md (or rules file):
`For any frontend work, follow vendor/frontend-simple/AGENTS.md`.

**ChatGPT / custom GPTs**: attach the SKILL.md files as knowledge and use
the content of fs-build as the main instruction.

Note: the skills are written in Brazilian Portuguese. Modern models follow
them regardless of the conversation language.
