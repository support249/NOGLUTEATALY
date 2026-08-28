import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/content/posts";
import { contentPath, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Gluten-free Rome guides, celiac travel tips, and local food advice from NOGLUTEATALY.",
  path: "/blog/",
});

const coverImages = [
  "/images/ALE5169-1024x678.jpeg",
  "/images/20251114_105643-scaled.jpg",
  "/images/ChatGPT-Image-Mar-26-2026-10_13_49-AM.png",
  "/images/IMG-20251018-WA0034-768x1024.jpg",
  "/images/IMG-20260210-WA0016-scaled.jpg",
  "/images/IMG-20250630-WA0066-1.jpg",
];

export default function BlogPage() {
  return (
    <section className="section blog-page">
      <div className="wrap">
        <h1 className="page-title">Blog</h1>
        <p className="lead">
          Guides for eating gluten-free in Rome, written for celiac travelers.
        </p>
        <div className="grid blog-cards">
          {posts.map((post, index) => (
            <article className="card blog-card" key={post.slug}>
              <div className="blog-card-media">
                <Image
                  src={coverImages[index]}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className="blog-card-image"
                />
              </div>
              <div className="blog-card-body">
                <p className="meta blog-card-date">{formatDate(post.date)}</p>
                <h2>
                  <Link href={contentPath(post.slug)}>{post.title}</Link>
                </h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link className="blog-card-more" href={contentPath(post.slug)}>
                  Read More <span aria-hidden="true">»</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
