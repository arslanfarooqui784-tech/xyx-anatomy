<p align="center"><img src="icon-512.png" width="120" alt="XYX Anatomy logo"></p>

# XYX Anatomy — Interactive 3D Human Anatomy Atlas

A browser-based 3D human anatomy atlas for research and study. It has a full **male body (935 structures)** and a full **female body (1,522 structures)** that you can rotate, peel layer by layer, cut, take apart and quiz yourself on — on a phone, tablet or laptop.

**Live app:** https://xyx-anatomy.netlify.app

> ⚠️ This repository contains the **production build** (the compiled app, 3D models and anatomy database) that is deployed on Netlify. The original source code is not included.

> Screenshots: _add 3–4 screenshots here (home screen, layers, cross-section, quiz)._

The name **XYX** brings together the female (**XX**) and male (**XY**) chromosomes — one atlas for both bodies.

## What it does

| Feature | Details |
|---|---|
| Two complete bodies | Male (935 structures) and female (1,522 structures), plus a side-by-side compare mode |
| 13 body systems | Skin, muscles, tendons & ligaments, bones, nervous, heart & vessels, respiratory, digestive, urinary, reproductive, endocrine, lymphatic, sense organs |
| Layers | Toggle any layer, set its transparency, isolate a system, one-tap presets, and "zoom reveal" that peels skin → muscles → organs → bones as you zoom in |
| Ways to look inside | Realistic, X-ray and transparent modes; exploded view; sagittal / coronal / transverse cross-sections; CT/MRI-style slice explorer |
| Structure details | Definition, Latin name, location, origin, insertion, innervation, blood supply, relations, linked conditions, personal notes and references |
| Smart search | Understands everyday words and synonyms ("thigh bone" → femur, "kneecap" → patella) and forgives spelling mistakes |
| Learning tools | Auto-generated quizzes (structure ID, muscle origins, innervation, systems, Latin terms), flashcards and per-system progress tracking |
| Extras | 210 linked clinical conditions, a microscopic lab with 130 cell/tissue entries and 10 schematic 3D models, heartbeat and breathing animations, snapshots |
| Performance | 4 graphics-quality tiers (about 0.4M to 3.2M triangles); models and database are cached in the browser for faster, offline-capable repeat visits |

## How it's built

- **Single-page web app** (React, compiled with a modern JavaScript bundler) rendering 3D models with **WebGL** in the browser
- **Progressive Web App**: installable on any device, with a service worker (`sw.js`) for caching
- **Anatomy database** in `db/` (JSON): structures, groups, conditions, microscopic anatomy and data-coverage statistics
- **3D models** in `models/`, split by body system and by quality level (`lite`, `full`, `ultra`) so phones download only what they need
- Hosted on **Netlify**; also packaged as an Android app
- Built with AI-assisted development; product design, data choices, testing and deployment by me

## Repository layout

| Path | Contents |
|---|---|
| `index.html` | App entry point |
| `assets/` | Compiled JavaScript and CSS |
| `db/` | Anatomy database (structures, groups, diseases, microscopic anatomy, sources, coverage) |
| `models/` | 3D models per body system and quality level (no prefix = male, `f-` = female, `fx-` = female fitted from the male atlas) |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Offline support and install settings |

## Run it locally

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Data sources and licences

This project stands on open scientific data. Full credits are in [DATA_LICENSES.md](DATA_LICENSES.md).

- **Male body:** BodyParts3D 3.0 (DBCLS, Japan) — CC BY-SA 2.1 JP
- **Female body:** Human Reference Atlas 3D library (HuBMAP), from the US National Library of Medicine Visible Human Female — CC BY 4.0
- **Names, definitions and relations:** Uberon anatomy ontology; **conditions:** Mondo; **cells and tissues:** Cell Ontology and Gene Ontology

**For education only — not for diagnosis or treatment.**

## Author

**Arslan Farooqui** — [GitHub](https://github.com/arslanfarooqui784-tech) · [LinkedIn](https://www.linkedin.com/in/arslan-farooqui-7734a126b)
