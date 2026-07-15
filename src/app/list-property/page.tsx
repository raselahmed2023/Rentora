"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import { apiFetch } from "@/lib/api";
import { authClient } from "@/lib/auth-client";

const initialForm = {
  title: "",
  shortDescription: "",
  description: "",
  price: "",
  category: "",
  location: "",
  imageUrl: "",
};

const inputStyle =
  "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]";

export default function ListPropertyPage() {
  const router = useRouter();

  const { data: session, isPending } =
    authClient.useSession();

  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setError("");

      await apiFetch("/api/properties", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });

      router.push("/manage-properties");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not add property"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isPending || !session) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-slate-600">
          Checking account...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
          Property Owner
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          List a Property
        </h1>

        <p className="mt-2 text-slate-600">
          Add information about your rental property.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-8"
        >
          {error && (
            <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}

          <div>
            <label className="mb-2 block font-medium">
              Property title
            </label>

            <input
              required
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Modern apartment in Dhanmondi"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Short description
            </label>

            <input
              required
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              placeholder="Comfortable two-bedroom apartment"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Full description
            </label>

            <textarea
              required
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the property..."
              className={inputStyle}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">
                Monthly price
              </label>

              <input
                required
                min="1"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="25000"
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Category
              </label>

              <select
                required
                name="category"
                value={form.category}
                onChange={handleChange}
                className={inputStyle}
              >
                <option value="">
                  Select category
                </option>
                <option value="Apartment">
                  Apartment
                </option>
                <option value="House">House</option>
                <option value="Room">Room</option>
                <option value="Office">Office</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Dhanmondi, Dhaka"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Image URL
            </label>

            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/property.jpg"
              className={inputStyle}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#0F766E] px-5 py-3 font-bold text-white transition hover:bg-[#115E59] disabled:opacity-60"
          >
            {isSubmitting
              ? "Adding property..."
              : "Add Property"}
          </button>
        </form>
      </div>
    </main>
  );
}