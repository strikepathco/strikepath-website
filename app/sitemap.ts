import type { MetadataRoute } from 'next'

const BASE = 'https://www.strikepath.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 1   },
    { url: `${BASE}/onboarding/chatbot`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/onboarding/automation`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/onboarding/receptionist`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/onboarding/marketing`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
