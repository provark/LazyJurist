# Lazy Jurist

A browser-based legal motion simulation game for law students and practicing attorneys. Rule on real legal motions drawn from the Federal Rules of Evidence, Federal Rules of Civil Procedure, and leading Supreme Court decisions.

**Live:** [lazyjurist.com](https://lazyjurist.com)

---

## What It Is

Players take the role of a federal judge working through a docket of ten motions per session. Each motion presents a fact pattern, the moving party's position, and two possible rulings — Grant or Deny. After ruling, the game reveals whether you got it right, explains the applicable legal rule, and cites the controlling authority.

The game tracks judicial reputation (a running score that rises and falls with correct and incorrect rulings), streaks, and a correct/wrong tally per session. Reputation dropping to zero ends the session early.

---

## Practice Areas

| Track | Motions | Coverage |
|---|---|---|
| Evidence | 32 | Admissibility, hearsay, authentication, impeachment, privilege — Federal Rules of Evidence |
| Criminal Procedure | 32 | Fourth, Fifth, and Sixth Amendment motions from stop-and-frisk through plea and trial |
| Civil Procedure | 28 | Pleading, jurisdiction, Erie, joinder, class actions, JMOL — Federal Rules of Civil Procedure |
| Constitutional Law | 33 | Speech, religion, equal protection, due process, takings, commerce, state action |
| Recent Supreme Court | 30 | Roberts Court doctrine: agency power, guns, religion, equality, elections, separation of powers |
| Mixed Docket | 10 | Random draw from all tracks — bar exam simulation mode |

---

## Game Mechanics

- **10 motions per session**, drawn from unseen cards first
- **Timed rulings** — 45 seconds for easy, 55 for medium, 65 for hard; overtime accrues rep penalties
- **Judicial Reputation** starts at 50 and shifts with each ruling; reputation reaching 0 ends the session
- **Streaks** — three consecutive correct rulings activates an Authority Bonus that halves rep losses; three consecutive wrong rulings triggers a Warning
- **Difficulty weighting** — each session draws from easy, medium, hard, and ambiguous buckets
- **Anti-repeat logic** — unseen motions are prioritized; seen motions rotate in as backfill
- **Topic filters** — each track exposes subtopic chips (e.g., Hearsay · 8, 4th Amendment · 14) to drill a specific area
- **Collapsed card view** — after ruling, the motion card stays visible alongside the explanation so players can connect the facts to the legal rule

---

## Feedback

Players can flag any motion card using the **⚑ FLAG THIS MOTION** button in the bottom-right corner during play. The form auto-captures the motion title, track, correct ruling, and citation — so a lawyer who spots an error doesn't have to describe which card they mean.

---

## Technical Notes

- Single-file HTML/CSS/JS — no build step, no dependencies, no framework
- Works directly in any modern browser
- State persisted via `localStorage` (theme, sound, seen motions)
- Two themes: **Classic** (VT323 monospace, green-on-black CRT aesthetic) and **Readable** (system sans-serif, higher contrast)
- Background image: `Background_image_2.png`

---

## Running Locally

```bash
# Python
python -m http.server 8000 --directory .

# Node
npx serve .
```

Then open `http://localhost:8000/Index.html`.

---

## Legal Accuracy

Motions are built from the Federal Rules of Evidence, Federal Rules of Civil Procedure, and leading Supreme Court cases. Some cards simplify genuinely close or circuit-split issues for gameplay purposes. Citations reflect controlling or most-instructive authority as of 2025.

If you spot an error in a ruling, explanation, or citation, use the in-game feedback button or open a GitHub issue.
