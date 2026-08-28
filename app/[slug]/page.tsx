import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allContentSlugs, resolveContentSlug } from "@/lib/content-slug";
import { pageMetadata } from "@/lib/seo";
import { formatDate, getPost, splitParagraphs } from "@/content/posts";
import { getTour } from "@/content/tours";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allContentSlugs().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveContentSlug(slug);
  if (!resolved) return { title: "Not found" };

  if (resolved.kind === "tour") {
    const tour = getTour(slug)!;
    return pageMetadata({
      title: tour.title,
      description: tour.summary,
      path: `/${slug}/`,
    });
  }

  const post = getPost(slug)!;
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/${slug}/`,
  });
}

export default async function ContentSlugPage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveContentSlug(slug);
  if (!resolved) notFound();

  if (resolved.kind === "tour") {
    const tour = getTour(slug)!;
    return (
      <section className="section">
        <div className="wrap prose">
          <p className="meta">
            <Link href="/tours/">Tours</Link> · {tour.location}
          </p>
          <h1>{tour.title}</h1>
          <p>{tour.summary}</p>
          <p>
            <strong>Duration:</strong> {tour.duration}
            <br />
            <strong>Schedule:</strong> {tour.schedule}
            <br />
            <strong>Adult:</strong> {tour.adultPrice}
            {tour.childPrice ? (
              <>
                <br />
                <strong>Child:</strong> {tour.childPrice}
              </>
            ) : null}
            {tour.groupSize ? (
              <>
                <br />
                <strong>Group size:</strong> {tour.groupSize}
              </>
            ) : null}
            <br />
            <strong>Meeting point:</strong> {tour.meetingPoint}
          </p>
          <h2>Highlights</h2>
          <ul>
            {tour.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>What’s included</h2>
          <ul>
            {tour.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {tour.notIncluded ? (
            <>
              <h2>What’s not included</h2>
              <ul>
                {tour.notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          {tour.itinerary ? (
            <>
              <h2>Itinerary</h2>
              {tour.itinerary.map((stop) => (
                <div key={stop.title}>
                  <h3>{stop.title}</h3>
                  <p>{stop.text}</p>
                </div>
              ))}
            </>
          ) : null}
          {tour.notes ? (
            <>
              <h2>Important notes</h2>
              <ul>
                {tour.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          ) : null}
          <Link className="button" href="/contact/">
            Enquire now
          </Link>
        </div>
      </section>
    );
  }

  const post = getPost(slug)!;
  return (
    <section className="section">
      <div className="wrap prose">
        <p className="meta">
          <Link href="/blog/">Blog</Link> · {formatDate(post.date)}
        </p>
        <h1>{post.title}</h1>
        {splitParagraphs(post.body).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
