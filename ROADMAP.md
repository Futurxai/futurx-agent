# Futurx Roadmap — Master Plan

## Skills (All in one place)

### Development Skills (9)
| # | Skill | File | Used By |
|---|-------|------|---------|
| 1 | Authentication (OTP) | skills/skill-auth.md | All 4 apps |
| 2 | Payment Gateway (Razorpay) | skills/skill-payment-gateway.md | Paydll, PGSeat |
| 3 | Supabase (Database) | skills/skill-supabase.md | All 4 apps |
| 4 | Firebase (Analytics) | skills/skill-firebase.md | All 4 apps |
| 5 | Push Notifications (FCM) | skills/skill-push-notifications.md | LoveDigitally, PGSeat |
| 6 | Analytics & Error Tracking | skills/skill-analytics.md | All 4 apps |
| 7 | Large File Reading | skills/skill-large-file.md | Agent tasks |
| 8 | PDF to Word Pipeline | skills/skill-pdf-to-word.md | Agent tasks |
| 9 | Token Efficiency | skills/skill-token-efficiency.md | Agent tasks |

### Marketing Skills (8)
| # | Skill | File | Used By |
|---|-------|------|---------|
| 1 | Play Store ASO | skills/skill-playstore-aso.md | Kaviya — app listings |
| 2 | WhatsApp Marketing | skills/skill-whatsapp-marketing.md | Kaviya — campaigns |
| 3 | Social Media Marketing | skills/skill-social-media.md | Kaviya — Instagram, Twitter, LinkedIn |
| 4 | SEO & Content Writing | skills/skill-seo-content.md | Kaviya — blog, website |
| 5 | Email Campaigns | skills/skill-email-campaign.md | Kaviya — newsletters, onboarding |
| 6 | Copywriting | skills/skill-copywriting.md | Kaviya — ads, headlines, taglines |
| 7 | Growth Strategy | skills/skill-growth-strategy.md | Kaviya + Team — user acquisition |
| 8 | Brand Messaging | skills/skill-brand-messaging.md | All — voice, tone, positioning |

### Total: 17 Skills

---

## Phase 1 — Base Setup ← YOU ARE HERE
- [x] Claude project folders created (5 projects on claude.ai)
- [x] GitHub monorepo scaffolded (3 repos: futurx-agent, Products, Marketing)
- [ ] Supabase connection (packages/shared-supabase)
- [ ] Firebase analytics (packages/shared-analytics)
- [ ] OTP authentication (packages/shared-auth)
- [x] SKILL.md files complete (17 skills — 9 dev + 8 marketing)
- [x] CLAUDE.md at root and per app
- [x] Futurx website live (futurx-website.web.app)
- [ ] Connect futurx.in domain

## Phase 2 — Core Features
- [ ] Payment gateway — all 4 apps (packages/shared-payments)
- [ ] Push notifications (packages/shared-notifications)
- [ ] Large file reading skill
- [ ] PDF → Word → Canvas pipeline
- [ ] Build PGSeat app
- [ ] Build Payroll app

## Phase 3 — Growth
- [ ] EatWell on Play Store (use skill-playstore-aso.md)
- [ ] PGSeat on Play Store
- [ ] WhatsApp marketing launch (use skill-whatsapp-marketing.md)
- [ ] Social media campaigns (use skill-social-media.md)
- [ ] SEO content for futurx.in (use skill-seo-content.md)
- [ ] Email onboarding sequences (use skill-email-campaign.md)
- [ ] Offline content strategy
- [ ] Codex links for students and developers

## Phase 4 — Scale
- [ ] Token efficiency optimization
- [ ] Agent automation (Talk → Record → Plan)
- [ ] Admin panel
- [ ] Analytics dashboard
- [ ] Growth strategy execution (use skill-growth-strategy.md)
- [ ] Brand consistency audit (use skill-brand-messaging.md)

---

## Apps

| App | Status | Owner |
|-----|--------|-------|
| EatWell | Built — APK ready | Balaji |
| PGSeat | Scaffold only | Balaji |
| Payroll | Scaffold only | Balaji |
| LoveDigitally | Scaffold only | Balaji |
| Futurx Website | Live — futurx-website.web.app | Balaji |

## Team

| Member | Role | Repo | Skills They Use |
|--------|------|------|-----------------|
| Balaji | Developer | Products | Dev skills (1-9) |
| Kaviya | Marketing | Marketing | Marketing skills (1-8) |
| Raji | Agent + Ops | futurx-agent | All skills |
| Joshua | Strategy | — | Growth, Brand |
