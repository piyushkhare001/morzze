import BlogDetailPage from "@/components/blogs/blogData";
import { db } from "@/db";
import { blog } from "@/db/schema";
import { getBlogBySlug, getBlogs } from "@/helper/blog/action";
import { eq, ne } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const currentBlog = await getBlogBySlug(slug);

  if (!currentBlog) {
    return {
      title: "Article Not Found | Morzze",
      description: "The requested article could not be found.",
    };
  }

  const images = currentBlog.image ? [currentBlog.image] : [];

  return {
    title: currentBlog.metaTitle || currentBlog.title || "Article | Morzze",
    description:
      currentBlog.metaDescription ||
      `Read about ${currentBlog.title} on Morzze.`,
    alternates: {
      canonical: `/article/${slug}`,
    },
    openGraph: {
      images,
    },
  };
}
const page = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const currentBlog = await getBlogBySlug(slug);

  if (!currentBlog) {
    notFound();
  }

  const allBlogs = await db.select().from(blog).where(ne(blog.slug, slug)).limit(3);

  const sameCategoryBlogs = allBlogs.filter(
    (item: any) =>
      item.blogCategory === currentBlog.blogCategory &&
      item.slug !== currentBlog.slug &&
      item.isVisible !== false
  );

  const fallbackBlogs = allBlogs.filter(
    (item: any) =>
      item.slug !== currentBlog.slug &&
      item.isVisible !== false
  );

  const shuffledFallbackBlogs = [...fallbackBlogs].sort(
    () => Math.random() - 0.5
  );

  const relatedBlogs =
    sameCategoryBlogs.length > 0
      ? sameCategoryBlogs
      : shuffledFallbackBlogs;

  return (
    <div>
      <BlogDetailPage
        blog={currentBlog}
        relatedBlogs={allBlogs}
      />

    </div>
  );
};

export default page;