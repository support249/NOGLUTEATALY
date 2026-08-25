import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/content/tours";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  return { title: tour?.title ?? "Tour" };
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  return (
    <section className="section">
      <div className="wrap prose">
        <p className="meta">
          <Link href="/tours">Tours</Link> · {tour.location}
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
        <Link className="button" href="/contact">
          Enquire now
        </Link>
      </div>
    </section>
  );
}
