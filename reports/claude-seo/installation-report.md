# Claude SEO installation report

Date: 13 November 2026

## Summary

| Item | Result |
|---|---|
| Tool | Claude SEO (github.com/AgriciDaniel/claude-seo) |
| Installed version | **2.6.0** (plugin manifest), repository commit `cca7e4a` (11 Nov 2026) |
| Installation method | Official plugin marketplace, user scope: `claude plugin marketplace add AgriciDaniel/claude-seo` then `claude plugin install claude-seo@agricidaniel-claude-seo`. These are the CLI equivalents of `/plugin marketplace add` and `/plugin install`. |
| Runtime setup | `claude-seo setup` → "Claude SEO runtime is ready." |
| Doctor | `Runtime: ready`, `Install mode: plugin-fallback`, `Python: 3.13`, `Chromium: ready` |
| Claude Code | 2.1.323 (requirement: 1.0.33+) |
| Git | 2.50.1 |
| Python | System `python3` is **3.9.6, below the supported 3.11–3.14 range**. The launcher automatically chose Homebrew `python3.13`. Nothing was installed globally. |
| Isolated venv | `~/Library/Application Support/claude-seo/.venv` (plugin-fallback data directory) |
| ZSpace repo impact | None. No dependency, lockfile or config in the website repo was changed to install the tool. |

## Security review before installing

- Cloned the repository to a scratch directory and read `docs/INSTALLATION.md`, `SECURITY.md`, `.claude-plugin/plugin.json` and `marketplace.json` before installing.
- No `curl | bash` was used. The documented install route doesn't run package managers. `setup` writes only to the plugin data directory.
- The plugin registers one **PostToolUse hook** on every `Edit`/`Write`: `hooks/run-python-hook.js` → `hooks/validate-schema.py <file>`. It reads the edited file locally to validate JSON-LD, makes no network calls and skips non-markup files. Note: if no supported Python is on `PATH` as `python3`, the hook may fall through. Setting `CLAUDE_SEO_PYTHON=/opt/homebrew/bin/python3.13` makes this deterministic.
- `requirements.txt` pins floors for known CVEs (urllib3, lxml, pillow, weasyprint and others).
- No credentials were requested, stored or logged. The Google, Moz and Bing checks report "not configured".

## Available commands (installed 2.6.0, from `skills/seo/SKILL.md`)

`/seo audit`, `page`, `sitemap`, `schema`, `images`, `technical`, `content`, `content-brief`, `geo`, `agentic [audit|fix|lighthouse|refresh]`, `plan`, `programmatic`, `competitor-pages`, `local`, `maps`, `hreflang`, `google [command]`, `backlinks`, `cluster <seed-keyword>`, `sxo`, `drift baseline|compare|history`, `ecommerce`, `flow`, `setup`, `doctor`. These are available only after installing the matching extension: `matomo`, `firecrawl`, `dataforseo`, `image-gen`, `ahrefs`, `bing`, `profound`, `seranking`, `unlighthouse`.

## Specialist agents (19)

seo-agentic, seo-backlinks, seo-cluster, seo-content, seo-dataforseo, seo-drift, seo-ecommerce, seo-flow, seo-geo, seo-google, seo-image-gen, seo-local, seo-maps, seo-performance, seo-schema, seo-sitemap, seo-sxo, seo-technical, seo-visual.

## How the tool was used in this session

The plugin was installed partway through the session, so `/seo …` slash commands and its agent types were not registered in that running session. They become available in the next Claude Code session. In this session, the same workflows were run by:

1. Running the plugin's bundled deterministic scripts through its own launcher (`scripts/claude-seo run <script>.py`): `page_checks.py` (all 1,165 URLs, before and after), `sitemap_discovery.py --expand`, `transport_check.py`, `agentic_check.py`, `preload_check.py`, `pagespeed_check.py`, and the `agentic_check` llms.txt validator.
2. Running two subagents briefed to follow the plugin's `agents/seo-content.md` + `skills/seo-content` (with `seo-sxo`) and `skills/seo-hreflang`. Their full outputs are in the appendices.

## Missing dependencies and optional integrations

| Integration | Status | What enables it |
|---|---|---|
| Google Search Console / URL Inspection / Indexing / GA4 | Not configured | OAuth client or service account in `~/.config/claude-seo/google-api.json`. Run `/seo google` setup. Add the service account as a user on the GSC property and GA4. |
| PageSpeed Insights / CrUX API | Keyless calls failed with "PSI rate limit exceeded" (shared quota) | A Google Cloud API key with the PageSpeed Insights and Chrome UX Report APIs enabled, stored as `api_key` in the same config file |
| Moz / Bing Webmaster | Not configured | API keys (optional) |
| DataForSEO, Firecrawl | Not installed | Paid extensions. Firecrawl is optional here because the full sitemap was fetched directly. |

Workaround used for performance: Lighthouse 12.8.2 run locally through `npx` in a scratch directory (not added to the project) against production and against a local production build.

## Installation issues

- System Python 3.9.6 is too old. It was handled automatically by the launcher (Homebrew 3.13).
- `doctor` reports `plugin-fallback` mode because the CLI ran outside a Claude Code plugin context. Inside Claude Code, `CLAUDE_PLUGIN_DATA` may point to a different data directory and `/seo setup` may need to run once more there.
