"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Property = {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  category: string;
  location: string;
  imageUrl: string;
};

type ApiResponse = {
  properties: Property[];
  pagination: {
    page: number;
    total: number;
    totalPages: number;
  };
};

const categories = [
  "Apartment",
  "House",
  "Room",
  "Office",
];

export default function BrowseRentalsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          page: String(page),
          sort,
        });

        if (search) {
          params.set("search", search);
        }

        if (category) {
          params.set("category", category);
        }

        if (maxPrice) {
          params.set("maxPrice", maxPrice);
        }

        const data: ApiResponse = await apiFetch(
          `/api/properties?${params.toString()}`
        );

        setProperties(data.properties);
        setTotal(data.pagination.total);
        setTotalPages(data.pagination.totalPages || 1);
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

    loadProperties();
  }, [search, category, maxPrice, sort, page]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  }

  function clearFilters() {
    setSearchInput("");
    setSearch("");
    setCategory("");
    setMaxPrice("");
    setSort("newest");
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-[#f8f6f1] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Explore Rentora
          </p>

          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Find your next rental
          </h1>

          <p className="mt-3 text-slate-600">
            Search and compare available properties.
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <form
            onSubmit={handleSearch}
            className="grid gap-4 lg:grid-cols-5"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(event) =>
                setSearchInput(event.target.value)
              }
              placeholder="Search title or location"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600 lg:col-span-2"
            />

            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600"
            >
              <option value="">All categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => {
                setMaxPrice(event.target.value);
                setPage(1);
              }}
              placeholder="Maximum price"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-600"
            />

            <button
              type="submit"
              className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              {total} properties found
            </p>

            <div className="flex gap-3">
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low">
                  Price: Low to High
                </option>
                <option value="price-high">
                  Price: High to Low
                </option>
              </select>

              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="h-48 animate-pulse bg-slate-200" />

                <div className="space-y-3 p-5">
                  <div className="h-5 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 animate-pulse rounded bg-slate-200" />
                  <div className="h-10 animate-pulse rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-900">
              No properties found
            </h2>

            <p className="mt-2 text-slate-600">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map((property) => (
              <article
                key={property.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 bg-slate-200">
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
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {property.category}
                    </span>

                    <span className="text-sm text-slate-500">
                      {property.location}
                    </span>
                  </div>

                  <h2 className="line-clamp-1 text-lg font-bold text-slate-900">
                    {property.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-slate-600">
                    {property.shortDescription}
                  </p>

                  <p className="mt-4 text-xl font-bold text-emerald-700">
                    ৳{property.price.toLocaleString()}
                    <span className="text-sm font-normal text-slate-500">
                      {" "}
                      / month
                    </span>
                  </p>

                  <Link
                    href={`/rentals/${property.id}`}
                    className="mt-5 block rounded-xl border border-emerald-700 px-4 py-2.5 text-center font-semibold text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((current) => current - 1)}
              className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm font-medium text-slate-700">
              Page {page} of {totalPages}
            </span>

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}