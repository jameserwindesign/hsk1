# HSK 1 Vocabulary Web App

A web app for studying the 300 words of the New HSK Level 1 Chinese vocabulary list. Built as a static site — no backend, no build step, just open `index.html` in a browser.

## Current state

The app currently consists of one working page (`browse.html`) and a shared data file (`data.js`). The browse page is a categorized vocabulary browser: clicking any word opens a modal with stroke-order animation (via Hanzi Writer), pinyin, definition, and an example sentence.

`browse.html` still contains its own inline copy of the word data — `data.js` is the extracted shared version, ready to be linked from both the existing browse page and the new flashcards page once you refactor.

## Planned architecture

```
hsk-app/
├── index.html        # Landing page with nav to Browse + Flashcards (NEW)
├── browse.html       # Existing categorized vocabulary browser (REFACTOR to use data.js)
├── flashcards.html   # Flashcard study modes (NEW — main feature to build)
├── data.js           # Shared word data: 300 words, 17 categories, definitions, examples
├── style.css         # Shared styles (EXTRACT from browse.html)
└── app.js            # Shared modal + Hanzi Writer logic (EXTRACT from browse.html)
```

The refactor is straightforward find-and-replace; the new work is the flashcards page.

## Flashcards feature spec (agreed via Q&A)

### Three study modes
1. **Classic flip card** — front shows prompt, tap to flip and reveal answer
2. **Spaced repetition (SRS)** — Anki-style Again / Hard / Good / Easy buttons after reveal; due cards persisted to localStorage
3. **Multiple choice quiz** — 4 options, one correct, instant feedback

### Direction (user picks per session)
- Hanzi → meaning (recognition)
- Hanzi → pinyin (pronunciation)
- Meaning → hanzi (recall)

### Deck selection (user picks per session)
- **All 300 shuffled** — the full vocabulary list, randomized
- **Custom** — checkbox grid of the 17 categories, pick any combination
- **Smart** — pulls cards the user has marked wrong recently (requires the wrong-answer tracking below)

### Persistence (localStorage)
- `hsk1:wrong` — set of hanzi the user has missed (drives Smart deck; updated by all three modes)
- `hsk1:srs` — per-card SRS state (next due date, interval, ease) — only modes 2 & 3 write here
- `hsk1:stats` — session counts, streak, accuracy

Use a simple SM-2 variant for SRS — it's well-documented and ~30 lines of JS.

## data.js API

```js
categories  // Array of 17 { id, name, words: [{ pinyin, hanzi, gloss }] }
wordData    // Object keyed by hanzi: { def: string, ex: [{ cn, py, en }] }
allWords    // Flat deduplicated array: [{ pinyin, hanzi, gloss, category }]
```

300 unique hanzi. Two words appear in two categories each, so `categories` has 302 word entries total; `allWords` has 300.

## Design system (already in browse.html — keep it for new pages)

CSS variables (top of `<style>` block in `browse.html`):
- `--ink: #1a1410` — body text, headings
- `--paper: #f4ede1` — main background
- `--paper-2: #ebe1cf` — hover/card backgrounds
- `--vermillion: #c1352a` — accent, primary actions
- `--vermillion-deep: #8f2419` — pinyin, hover state for accent
- `--gold: #b8893d` — secondary accent
- `--muted: #6b5d4a` — secondary text
- `--rule: #d4c5a8` — borders, dividers

Fonts (Google Fonts):
- **Fraunces** — headings, body prose, gloss text (italic for English meanings)
- **Noto Sans SC** — all Chinese characters
- **JetBrains Mono** — pinyin, UI labels, monospaced UI elements

Aesthetic: paper-textured background, vermillion accents (like a Chinese seal), generous whitespace, no neon gradients.

## Dependencies

Only one runtime dependency, loaded from CDN — no npm install needed:
```html
<script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.7/dist/hanzi-writer.min.js"></script>
```

## Local development

It's a static site. Three ways to run it:

```bash
# Option 1: just open in your browser
open browse.html              # macOS
xdg-open browse.html          # Linux
start browse.html             # Windows

# Option 2: local server (better — avoids file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000

# Option 3: any other static server
npx serve .
```

## Suggested first session with Claude Code

When you open this folder in Claude Code, a good opening prompt is:

> "Read the README, then refactor browse.html to use data.js as the shared data source and extract its styles into style.css. Once that's done, build flashcards.html per the spec — start with the classic flip-card mode and the deck selector, then add SRS, then add multiple choice. Use localStorage for persistence."

Claude Code can iterate file-by-file, run the local server, and you can preview changes immediately in your browser.

## Notes / gotchas

- Hanzi Writer fetches character data from jsDelivr on demand — you need internet on first view of each character. After that, browsers cache it.
- Two pronouns share hanzi 他/她/它 with the same pinyin "tā" — handle gracefully in flashcards (e.g., show context).
- A few words appear in two categories (e.g., 多 and 少). `allWords` is already deduplicated; `categories` is not.
- The shared modal in `browse.html` (clicking a word card) is worth reusing on the flashcards "reveal" step — extract it into `app.js` first.
