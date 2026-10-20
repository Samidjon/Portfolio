import type { APIRoute } from 'astro';
import { projects, site } from '../data/site';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const siteUrl = import.meta.env.PUBLIC_SITE_URL;
const feedHome = siteUrl ? new URL('/', siteUrl).toString() : site.github;

const items = projects
  .filter((project) => project.href)
  .map((project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${escapeXml(project.href!)}</link>
      <guid isPermaLink="false">samid-portfolio-project-${escapeXml(project.number)}</guid>
      <description>${escapeXml(project.description)}</description>
      <category>${escapeXml(project.category)}</category>
    </item>`)
  .join('');

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} — Selected Projects</title>
    <link>${escapeXml(feedHome)}</link>
    <description>Selected project links from ${escapeXml(site.name)}'s developer portfolio.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' },
  });
};
