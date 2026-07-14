"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaPen,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";

import { apiFetch } from "@/lib/api";
import { authClient } from "@/lib/auth-client";

type Property = {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  category: string;
  location: string;
  imageUrl: string;
};

export default function ManagePropertiesPage() {
  const router = useRouter();

  const { data: session, isPending } =
    authClient.useSession();

  const [properties, setProperties] = useState<
    Property[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true);
        setError("");

        const data = await apiFetch(
          "/api/my-properties"
        );

        setProperties(data.properties);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Could not load properties"
        );
      } finally {
        setLoading(false);
      }
    }

    if (session?.user) {
      loadProperties();
    }
  }, [session]);

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await apiFetch(`/api/properties/${id}`, {
        method: "DELETE",
      });

      setProperties((current) =>
        current.filter(
          (property) => property.id !== id
        )
      );
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Could not delete property"
      );
    } finally {
      setDeletingId("");
    }
  }

  if (isPending || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              My Properties
            </h1>

            <p className="mt-2 text-slate-600">
              Manage your rental listings.
            </p>
          </div>

          <Link
            href="/list-property"
            className="flex items-center gap-2 rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white"
          >
            <FaPlus />
            Add Property
          </Link>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-80 animate-pulse rounded-2xl bg-white"
                />
              )
            )}
          </div>
        ) : properties.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              No properties added
            </h2>

            <p className="mt-2 text-slate-600">
              Add your first rental property.
            </p>

            <Link
              href="/list-property"
              className="mt-6 inline-block rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white"
            >
              List Property
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="h-52 bg-slate-200">
                  {property.imageUrl ? (
                    <img
                      src={property.imageUrl}
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-500">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-[#0F766E]">
                      {property.category}
                    </span>

                    <span className="text-sm text-slate-500">
                      {property.location}
                    </span>
                  </div>

                  <h2 className="mt-4 line-clamp-1 text-xl font-bold text-slate-900">
                    {property.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-12 text-sm text-slate-600">
                    {property.shortDescription}
                  </p>

                  <p className="mt-4 text-xl font-bold text-[#0F766E]">
                    ৳{property.price.toLocaleString()}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      href={`/manage-properties/${property.id}/edit`}
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#0F766E] px-4 py-2.5 font-semibold text-[#0F766E]"
                    >
                      <FaPen />
                      Edit
                    </Link>

                    <button
                      type="button"
                      disabled={
                        deletingId === property.id
                      }
                      onClick={() =>
                        handleDelete(property.id)
                      }
                      className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
                    >
                      <FaTrash />

                      {deletingId === property.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}