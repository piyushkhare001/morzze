import { MetadataRoute } from 'next'
import { db } from "@/lib/db"
import { category, product, blog } from "@/db/schema"
import { eq, or, isNull } from "drizzle-orm"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://morzze.com'

  // Fetch all categories
  const categories = await db.select({ slug: category.slug, updatedAt: category.updatedAt, type: category.type }).from(category)

  // Fetch all products
  const products = await db.select({ slug: product.slug, updatedAt: product.updatedAt }).from(product).where(or(eq(product.isHidden, false), isNull(product.isHidden)))

  // Fetch all blogs
  const blogs = await db.select({ slug: blog.slug, date: blog.date }).from(blog).where(eq(blog.isVisible, true))

  const sitemapUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogue`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stores`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Add categories
  categories.forEach((cat) => {
    if (cat.slug) {
      let route = "category"
      if (cat.type === "kitchen") route = "kitchen"
      else if (cat.type === "bathroom") route = "bathroom"
      
      sitemapUrls.push({
        url: `${baseUrl}/${route}/${cat.slug}`,
        lastModified: cat.updatedAt ? new Date(cat.updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  })

  // Add products
  products.forEach((prod) => {
    if (prod.slug) {
      sitemapUrls.push({
        url: `${baseUrl}/product/${prod.slug}`,
        lastModified: prod.updatedAt ? new Date(prod.updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
  })

  // Add blogs
  blogs.forEach((b) => {
    if (b.slug) {
      sitemapUrls.push({
        url: `${baseUrl}/blog/${b.slug}`,
        lastModified: b.date ? new Date(b.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  })

  return sitemapUrls
}
