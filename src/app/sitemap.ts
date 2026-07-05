import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dratuldhakar.vercel.app";
  const now = new Date().toISOString().split("T")[0];

  return [
    // Homepage — highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // The College Coach — DTE counselling page: very high priority (most searches)
    {
      url: `${baseUrl}/college-coach`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    // About — Dr. Atul Dhakar name searches
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Contact — direct contact searches
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Publications — research paper searches
    {
      url: `${baseUrl}/publications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Patents — patent number/robotics searches
    {
      url: `${baseUrl}/patents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // FAQ — counselling question searches
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Journey — career/experience searches
    {
      url: `${baseUrl}/journey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Skills — MATLAB/WEKA/subject searches
    {
      url: `${baseUrl}/skills`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Certifications
    {
      url: `${baseUrl}/certifications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Reviews — testimonials searches
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Events
    {
      url: `${baseUrl}/events`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    // AI Tools
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
