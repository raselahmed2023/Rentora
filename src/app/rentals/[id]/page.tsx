"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaBuilding,
  FaLocationDot,
} from "react-icons/fa6";

import { apiFetch } from "@/lib/api";

type Property = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  category: string;
  location: string;
  imageUrl: string;
};

export default function RentalDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [property, setProperty] =
    useState<Property | null>(null);

  const [relatedProperties, setRelatedProperties] =
    useState<Property[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProperty() {
      try {
        setLoading(true);
        setError("");

        const detailsData = await apiFetch(
          `/api/properties/${id}`
        );

        const currentProperty: Property =
          detailsData.property;

        setProperty(currentProperty);

        const relatedData = await apiFetch(
          `/api/properties?category=${encodeURIComponent(
            currentProperty.category
          )}&page=1`
        );

        const related = relatedData.properties
          .filter(
            (item: Property) =>
              item.id !== currentProperty.id
          )
          .slice(0, 3);

        setRelatedProperties(related);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Could not load property"
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] px-4 py-12">
        <div className="mx-auto max-w-6xl animate-pulse">
          <div className="h-96 rounded-3xl bg-slate-200" />

          <div className="mt-8 space-y-4">
            <div className="h-8 w-2/3 rounded bg-slate-200" />
            <div className="h-5 w-1/3 rounded bg-slate-200" />
            <div className="h-24 rounded bg-slate-200" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F6F1] px-4">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Property not found
          </h1>

          <p className="mt-3 text-slate-600">
            {error || "This property is unavailable."}
          </p>

          <Link
            href="/rentals"
            className="mt-6 inline-block rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white"
          >
            Browse Rentals
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/rentals"
          className="mb-6 inline-flex items-center gap-2 font-semibold text-[#0F766E]"
        >
          <FaArrowLeft />
          Back to rentals
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="h-[320px] bg-slate-200 md:h-[500px]">
            {property.imageUrl ? (
              <img
                src={property.imageUrl}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <FaBuilding
                  size={60}
                  className="text-slate-400"
                />
              </div>
            )}
          </div>

          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_320px]">
            <section>
              <span className="inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-[#0F766E]">
                {property.category}
              </span>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                {property.title}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-slate-600">
                <FaLocationDot className="text-[#0F766E]" />
                {property.location}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h2 className="text-xl font-bold text-slate-900">
                  Property overview
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {property.description}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h2 className="text-xl font-bold text-slate-900">
                  Reviews
                </h2>

                <div className="mt-4 rounded-xl bg-slate-50 p-5 text-slate-600">
                  No reviews have been added yet.
                </div>
              </div>
            </section>

            <aside className="h-fit rounded-2xl border border-slate-200 p-6">
              <p className="text-sm text-slate-500">
                Monthly rent
              </p>

              <p className="mt-1 text-3xl font-bold text-[#0F766E]">
                ৳{property.price.toLocaleString()}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {property.shortDescription}
              </p>

              <Link
                href="/contact"
                className="mt-6 block rounded-xl bg-[#0F766E] px-5 py-3 text-center font-bold text-white transition hover:bg-[#115E59]"
              >
                Contact Owner
              </Link>
            </aside>
          </div>
        </div>

        {relatedProperties.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">
              Related properties
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {relatedProperties.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="h-48 bg-slate-200">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#0F766E]">
                      ৳{item.price.toLocaleString()} / month
                    </p>

                    <Link
                      href={`/rentals/${item.id}`}
                      className="mt-4 inline-block font-semibold text-[#0F766E]"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}