/**
 * Check if a key is reserved:
 * - cannot be registered for a short link (only for dub.sh / dub.link domains)
 * - cannot be used as a workspace slug
 */

export const RESERVED_SLUGS = [
  "va",
  "static",
  "stats",
  "share",
  "robots.txt",
  "proxy",
  "account",
  "api",
  "auth",
  "pricing",
  "about",
  "metatags",
  "blog",
  "changelog",
  "atom",
  "careers",
  "docs",
  "features",
  "contact",
  "terms",
  "privacy",
  "admin",
  "help",
  "new",
  "info",
  "demo",
  "discord",
  "reddit",
  "guides",
  "campaigns",
  "links",
  "workspaces",
  "settings",
  "analytics",
  "invites",
  "new",
  "domains",
  "events",
  "referrals",
  "webhooks",
  "upgrade",
  "wrapped",
  "invoices",
  "onboarding",
  "program",
  "programs",
  "partners",
  "payouts",
  "commissions",
  "sales",
  "resources",
];
