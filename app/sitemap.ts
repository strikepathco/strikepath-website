import type { MetadataRoute } from 'next'

const BASE = 'https://www.strikepath.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                              lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/services`,                                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-chatbot-for-small-business`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-receptionist-for-small-business`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-automation-for-small-business`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-marketing-for-small-business`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-agency-phoenix-arizona`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/onboarding/chatbot`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/onboarding/automation`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/onboarding/receptionist`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/onboarding/marketing`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
