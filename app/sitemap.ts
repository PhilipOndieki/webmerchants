// app/sitemap.ts — replace your existing sitemap.ts with this
// Includes all blog article slugs for Google indexing

import type { MetadataRoute } from 'next'
import { blogArticles } from '@/data/blogContent'
import { caseStudies } from '@/data/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webmerchants.co.ke'
  const staticPages = ['', '/services', '/work', '/about', '/pricing', '/blog', '/contact']

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...caseStudies.map((cs) => ({
      url: `${baseUrl}/work/${cs.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogArticles.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}