"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import { apiFetch } from "@/lib/api";
import { authClient } from "@/lib/auth-client";

type PropertyForm = {
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  category: string;
  location: string;
  imageUrl: string;
};

const initialForm: PropertyForm = {
  title: "",
  shortDescription: "",
  description: "",
  price: "",
  category: "",
  location: "",
  imageUrl: "",
};

export default function EditPropertyPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = params.id;

  const { data: session, isPending } =
    authClient.useSession();

  const [form, setForm] =
    useState<PropertyForm>(initialForm);

  const [pageLoading, setPageLoading] =
    useState(true);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    async function loadProperty() {
      try {
        setPageLoading(true);

        const data = await apiFetch(
          `/api/properties/${id}`
        );

        const property = data.property;

        setForm({
          title: property.title,
          shortDescription:
            property.shortDescription,
          description: property.description,
          price: String(property.price),
          category: property.category,
          location: property.location,
          imageUrl: property.imageUrl || "",
        });
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Could not load property"
        );
      } finally {
        setPageLoading(false);
      }
    }

    if (session?.user && id) {
      loadProperty();
    }
  }, [session, id]);

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
      setSaving(true);
      setError("");

      await apiFetch(`/api/properties/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });

      router.push("/manage-properties");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not update property"
      );
    } finally {
      setSaving(false);
    }
  }

  if (isPending || !session || pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
          Manage Property
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Edit Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-8"
        >
          {error && (
            <p className="rounded-xl bg-red-50 p-4 text-red-700">
              {error}
            </p>
          )}

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Property title
            </label>

            <input
              required
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Short description
            </label>

            <input
              required
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full description
            </label>

            <textarea
              required
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Monthly price
              </label>

              <input
                required
                min="1"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Category
              </label>

              <select
                required
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
              >
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
            <label className="mb-2 block font-medium text-slate-700">
              Location
            </label>

            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Image URL
            </label>

            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() =>
                router.push("/manage-properties")
              }
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white disabled:opacity-60"
            >
              {saving
                ? "Saving changes..."
                : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}