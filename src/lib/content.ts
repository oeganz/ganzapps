// Content registry — each key maps to a draft content file
export const articles: Record<string, { title: string; date: string; readTime: string; excerpt: string; tags: string[]; draftFile: string }> = {
  "ai-infrastructure-arms-race-2026": {
    title: "The AI Infrastructure Arms Race: Who's Winning in 2026",
    date: "2026-06-01",
    readTime: "8 min read",
    excerpt: "Hyperscalers are spending $200B+ on AI infrastructure. Here's what that means for builders and where the real opportunities are.",
    tags: ["AI Infrastructure", "Cloud", "Investment"],
    draftFile: "ai-infrastructure-arms-race-2026.md",
  },
};

export function getArticle(slug: string) {
  return articles[slug] ?? null;
}

export function getAllArticles() {
  return Object.entries(articles).map(([slug, meta]) => ({ slug, ...meta }));
}
