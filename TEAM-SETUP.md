# Futurx — Team Setup Guide

Follow these exact steps on your laptop to get the full Futurx workspace.

---

## Step 1 — Install Tools (5 minutes)

Open **PowerShell** or **Command Prompt** and run:

```bash
# Check if Git is installed
git --version

# Check if Node is installed
node --version
```

**If not installed, download from:**
- Git: https://git-scm.com/download/win
- Node.js: https://nodejs.org (pick LTS version)

**After Git + Node are installed, run:**

```bash
npm install -g pnpm
npm install -g @ionic/cli
npm install -g @anthropic-ai/claude-code
```

---

## Step 2 — GitHub Access

### Option A — GitHub CLI (Easiest)
```bash
npm install -g gh
gh auth login
```
Follow the prompts: GitHub.com → HTTPS → Login with browser

### Option B — SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@gmail.com"
```
Then add the key to GitHub → Settings → SSH Keys

---

## Step 3 — Set Git Identity

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"
```

---

## Step 4 — Clone All 3 Repos (2 minutes)

```bash
D:
mkdir Futurx_WorkSpace
cd Futurx_WorkSpace

git clone https://github.com/Futurxai/futurx-agent.git
git clone https://github.com/Futurxai/Products.git
git clone https://github.com/Futurxai/Marketing.git
```

---

## Step 5 — Switch to Working Branch

```bash
cd futurx-agent && git checkout setup/base-structure
cd ../Products && git checkout setup/base-structure
cd ../Marketing && git checkout setup/base-structure
```

---

## Step 6 — Open in VS Code

```bash
code D:/Futurx_WorkSpace
```

Your folder structure will look like this:

```
D:/Futurx_WorkSpace/
├── futurx-agent/          ← Agent + Skills + Packages
│   ├── .claude/
│   │   ├── agents/        ← code-reviewer, security-auditor
│   │   ├── commands/      ← /summarize, /sprint, /skill, /dev, /review, /deploy
│   │   ├── rules/         ← code-style, testing, api-conventions
│   │   ├── skills/        ← development, marketing, product
│   │   └── settings.json
│   ├── .github/workflows/ ← CI/CD pipeline
│   ├── devops/            ← Firebase, Supabase, Play Store config
│   ├── packages/          ← Shared code for all apps
│   │   ├── shared-auth/
│   │   ├── shared-payments/
│   │   ├── shared-notifications/
│   │   ├── shared-analytics/
│   │   └── shared-supabase/
│   ├── skills/            ← 17 skill files (9 dev + 8 marketing)
│   ├── CLAUDE.md          ← Master context — READ THIS FIRST
│   ├── ROADMAP.md         ← Master plan — all phases + skills
│   ├── package.json
│   ├── pnpm-workspace.yaml
│   └── turbo.json
│
├── Products/              ← All Apps + Website
│   ├── apps/
│   │   ├── eatwell/
│   │   ├── PG_Seat/
│   │   ├── Pay Roll/
│   │   └── lovedigitally/
│   ├── eatwell-app/       ← Full working EatWell app
│   ├── futurx-website/    ← Live at futurx-website.web.app
│   └── README.md
│
└── Marketing/             ← Marketing Content
    ├── whatsapp/          ← WhatsApp campaign templates
    ├── playstore/         ← Play Store listings
    ├── content/           ← Landing pages, blog, offline content
    └── README.md
```

---

## Step 7 — Start Working with Claude Code

Open terminal in VS Code (Ctrl + `) and run:

```bash
claude
```

### First thing to say:
> "Read CLAUDE.md and ROADMAP.md — tell me what to do next"

---

## Who Works Where

| Team Member | Role | Main Repo | What They Do |
|-------------|------|-----------|-------------|
| **Balaji** | Developer | Products | Build apps, fix bugs, ship features |
| **Kaviya** | Marketing | Marketing | Write listings, campaigns, content |
| **Raji** | Agent + Ops | futurx-agent | Skills, packages, automation |
| **Joshua** | Strategy | — | Vision, planning, decisions |

---

## Daily Workflow

```
Morning  → Read ROADMAP.md → Know your task for today
Work     → Open your repo → Type "claude" → Tell Claude what to build
Evening  → Tell Claude "commit and push my work"
```

---

## Useful Commands

| What you want | What you type to Claude |
|---|---|
| See what's next | "Read ROADMAP.md and tell me what to do next" |
| Start building | "Build [feature] in [app]" |
| Fix a bug | "The [page] is broken, fix it" |
| Push your work | "Commit and push my work" |
| Plan the week | "/sprint" |
| Summarize a meeting | "/summarize" |
| Load a skill | "/skill [name]" |

---

## Skills Available (17 Total)

### Development Skills (9)
| Skill | File | Used For |
|-------|------|----------|
| Authentication | skill-auth.md | Login, OTP, sessions |
| Payment Gateway | skill-payment-gateway.md | Razorpay, checkout |
| Supabase | skill-supabase.md | Database, storage, realtime |
| Firebase | skill-firebase.md | Analytics, crash reports |
| Push Notifications | skill-push-notifications.md | FCM, alerts, reminders |
| Analytics | skill-analytics.md | User tracking, errors |
| Large File Reading | skill-large-file.md | Big PDFs, chunking |
| PDF to Word | skill-pdf-to-word.md | Document conversion |
| Token Efficiency | skill-token-efficiency.md | Context optimization |

### Marketing Skills (8)
| Skill | File | Used For |
|-------|------|----------|
| Play Store ASO | skill-playstore-aso.md | App listings, keywords |
| WhatsApp Marketing | skill-whatsapp-marketing.md | Campaigns, templates |
| Social Media | skill-social-media.md | Instagram, Twitter, LinkedIn |
| SEO & Content | skill-seo-content.md | Blog, website content |
| Email Campaigns | skill-email-campaign.md | Newsletters, onboarding |
| Copywriting | skill-copywriting.md | Ads, headlines, taglines |
| Growth Strategy | skill-growth-strategy.md | User acquisition, retention |
| Brand Messaging | skill-brand-messaging.md | Voice, tone, positioning |

---

## Need Help?

- Read `CLAUDE.md` — it has all project context
- Read `ROADMAP.md` — it has the full plan + all skills
- Ask Claude: "What should I do next?"
- Ask your team in the daily sync

---

*Last updated: April 2026*
