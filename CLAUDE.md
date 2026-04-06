# Futurx — Master Context

## What we build
4 mobile apps: EatWell, Paydll, LoveDigitally, PriSeat
Stack: Ionic + Angular, Supabase, Firebase, React Native
Market: India — Tamil Nadu focus
Team: 5 people — Dev team, Raji (ops/summary), Joshua (strategy)

## Repo structure
- skills/          → read the relevant SKILL.md before starting any task
- packages/        → shared code (auth, payments, notifications, analytics, supabase)
- .claude/commands/ → slash commands for daily workflows
- .claude/skills/  → auto-invoked workflows (development, product, marketing)
- .claude/agents/  → subagent personas (code-reviewer, security-auditor)
- .claude/rules/   → code style, testing, API conventions
- devops/          → Firebase, Supabase, Play Store config notes
- product/         → product builds (EatWell4U, etc.)

## Related repos
- **Products:** github.com/Futurxai/Products → apps/ (eatwell, paydll, lovedigitally, priseat)
- **Marketing:** github.com/Futurxai/Marketing → whatsapp, playstore, content strategy

## Rules
1. Always check ROADMAP.md phase before starting any work
2. Always read the relevant skill file from skills/ before coding
3. Production-ready code only — no shortcuts
4. Mobile-first always
5. Never change packages/ without checking impact on all 4 apps
6. Ask before changing architecture

## Daily workflow
Talk → Record → Transcribe → Summary (Raji) → Plan → Execute

## Slash commands
/summarize → extract decisions + action items from transcript
/sprint    → plan this week's tasks from ROADMAP.md
/skill     → load a skill before starting a task

## How Skills Work
1. User message triggers a skill based on its `description` field
2. Claude reads the SKILL.md for the matched domain
3. Claude reads the relevant `references/*.md` for the sub-domain
4. Claude follows the guides to produce expert-level output

## Workflows
- **Development:** Code, debug, build, deploy, API, DevOps, AI/ML
- **Product:** PRDs, roadmaps, user stories, OKRs, sprint planning
- **Marketing:** Copy, ads, SEO, email, social, growth, launches

## Git Strategy
| Branch | Purpose |
|--------|---------|
| `main` | Production-ready configurations |
| `dev` | Active development |
