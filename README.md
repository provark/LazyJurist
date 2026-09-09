# Lazy Jurist

A static browser game for practicing rulings on legal motions. Choose Evidence, Criminal Procedure, Civil Procedure, Constitutional Law, Recent Supreme Court, or a Mixed Docket.

**Live:** [lazyjurist.com](https://lazyjurist.com)

## Playing

- **Study** is the default: untimed practice, no early removal, and a chance to review every ruling.
- **Challenge** uses 45/55/65 seconds for easy/medium/hard motions. Reputation starts at 50. Zero reputation or a fourth consecutive wrong ruling ends the docket. Three correct rulings earn Judicial Authority, which halves the next base reputation loss; overtime is added separately. Every correct ruling breaks a wrong streak, including late answers.
- Sessions contain **up to ten motions**. Topic buttons show the actual docket length and lifetime accuracy; their tooltips show the total bank size and detailed counts.
- Decide using the ruling buttons, left/right arrow keys, or a horizontal swipe. Vertical gestures scroll the page.
- Unseen motions are selected before repeats across all difficulty groups. Replaying a topic never erases lifetime coverage.
- **Practice missed** revisits motions whose most recent answer was wrong. Correcting one removes it from that queue while preserving its historical attempts.
- Split decisions count separately from correct/wrong accuracy and do not change streaks.
- After a ruling, expand **Check your reasoning** to save an optional note. **Review docket** includes the original record, both ruling options, explanations, authority links, and notes. **Review last docket** survives a reload, including a partially completed docket.

Progress, notes, the last docket, and preferences stay in this browser's local storage. Clearing browser data removes them. The current in-progress timer and card are not resumed after a reload; the last decided motions remain available for review. If storage is blocked, the current page remains playable but persistence is unavailable.

## Feedback

Flag a motion during play or from the review screen. Pre-ruling feedback does not reveal the answer, and the timer pauses while the form is open. The form submits the motion's stable ID, title, track, answer, citation, comment, and optional email through Formspree. No progress or study notes are sent automatically.

## Content

| Track | Motions |
|---|---:|
| Evidence | 32 |
| Criminal Procedure | 32 |
| Civil Procedure | 28 |
| Constitutional Law | 33 |
| Recent Supreme Court | 30 |
| Total | 155 |

Recent Supreme Court has five Grant and five Deny answers at each difficulty. Seven motions were reframed from the opposing party's procedural position to improve balance; the underlying legal holdings were not inverted. See [CONTENT_CHANGES.md](CONTENT_CHANGES.md).

## Run locally

No build or runtime dependencies are required. With Node.js:

```sh
npm start
```

Open `http://127.0.0.1:4173`. A Python static server also works; use the exact `/Index.html` URL. Opening `Index.html` directly is supported, though local storage behavior for file URLs varies by browser.

## Files and hosting

- `Index.html`: page structure and initial theme selection
- `styles.css`: Classic/Readable themes and responsive layout
- `data.js`: motion bank and explicit topic metadata
- `core.js`: scoring, sampling, and persistent progress
- `app.js`: interface, timers, keyboard/swipe input, review, and feedback
- `Background_image_2.png`: courtroom background

Publish these six files together. Keep the existing `Index.html` entry point and hosting route. This revision does not replace the deployment provider or add a build requirement. Node and Playwright are used only for development and tests.

## Checks

Core tests require only Node.js 22 or later:

```sh
npm test
```

Browser checks:

```sh
npm ci
npx playwright install chromium firefox
npm run test:browser
```

GitHub Actions runs the core checks and Chromium desktop/phone plus Firefox browser checks on pushes and pull requests. Browser tests intercept feedback requests; they do not submit real comments.

## Editing motions

Keep each motion's `id` permanent. Preserve `legacyTitles` so progress from the original game can migrate after title edits. Explicit `topic`, `jurisdiction`, `ambiguityReason`, `authorities`, and `lastReviewed` fields make future review easier. Do not infer topics from citation text or fabricate review dates. Update the record, moving party, answer options, consequences, and scores together when changing procedural framing.

## Legal accuracy

The game was created with assistance from Claude Code, Codex, and Gemini. It simplifies some close questions for gameplay and is not legal advice. The original bank was intended to reflect authority through 2025; adding source links does not certify that every card is current or legally complete.

`lastReviewed` remains null and the interface says **Substantive review pending** until a documented substantive review is completed. The revised motions have source references and content-edit dates, which are distinct from a full legal review. Use the flag button when an explanation, citation, or ruling needs correction.
