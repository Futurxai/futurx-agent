# IT Skills System — Claude Code Setup

## Overview
This project contains 3 master skills covering the entire IT field.
Each skill auto-triggers based on user intent.

## Skill Domains

| Skill | Triggers | Location |
|-------|----------|----------|
| development | code, debug, build, deploy, API, frontend, backend, DB, DevOps, mobile, AI/ML | skills/development/ |
| product | PRD, roadmap, user story, features, OKR, metrics, sprint, backlog | skills/product/ |
| marketing | copy, ads, SEO, email, social, growth, launch, brand, analytics | skills/marketing/ |

## Commands
No build commands needed — these are Claude Code skill files.

## How Skills Work
1. User message triggers a skill based on its `description` field
2. Claude reads the SKILL.md for the domain
3. Claude reads the relevant `references/*.md` for the sub-domain
4. Claude follows the guides to produce expert-level output

## Architecture
```
skills/
  development/
    SKILL.md              ← Router + universal standards
    references/
      frontend.md         ← React, Next.js, Vue, CSS
      backend.md          ← Node, Python, Go, REST APIs
      database.md         ← SQL, NoSQL, ORMs
      devops.md           ← Docker, K8s, CI/CD, Cloud
      mobile.md           ← Flutter, React Native
      security.md         ← OWASP, auth, encryption
      architecture.md     ← System design, patterns
      testing.md          ← TDD, Jest, Pytest, Cypress
      ai-ml.md            ← LLMs, RAG, ML pipelines

  product/
    SKILL.md              ← Router + PM thinking framework
    references/
      prd-specs.md        ← PRD template, feature specs
      user-stories.md     ← Stories, acceptance criteria
      prioritization.md   ← RICE, MoSCoW, ICE
      roadmap-strategy.md ← OKRs, roadmap formats
      metrics.md          ← AARRR, North Star, SaaS KPIs
      gtm.md              ← Go-to-market planning
      agile.md            ← Sprints, retrospectives, triage

  marketing/
    SKILL.md              ← Router + copywriting framework
    references/
      copywriting.md      ← Headlines, landing pages, CTAs
      email.md            ← Campaigns, sequences, metrics
      seo-content.md      ← SEO, blog, content calendar
      social.md           ← Twitter/X, LinkedIn, virality
      growth.md           ← PLG, acquisition, retention
      brand.md            ← Positioning, voice, messaging
      launches.md         ← Product Hunt, PR, launch plan
      analytics.md        ← Metrics, CRO, attribution
```

## Extending
To add a new sub-domain:
1. Create `skills/[domain]/references/[topic].md`
2. Add a row to the Domain Router table in `skills/[domain]/SKILL.md`
