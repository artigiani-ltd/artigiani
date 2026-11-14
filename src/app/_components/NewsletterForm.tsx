"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function requestUpdates(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    if (typeof email !== "string" || !email.trim()) return;
    const body = `Please send atelier news and collection previews to ${email.trim()}.`;
    window.location.href = `mailto:info@artigiani.design?subject=Atelier%20updates&body=${encodeURIComponent(body)}`;
    setMessage(
      "Send the request in your email app to ask for atelier updates.",
    );
  }

  return (
    <form
      action="mailto:info@artigiani.design?subject=Atelier%20updates"
      method="post"
      encType="text/plain"
      onSubmit={requestUpdates}
      className="mx-auto mt-12 max-w-xl"
    >
      <div className="flex items-center gap-4 border-b border-white/30 pb-3 focus-within:border-white">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          required
          className="min-h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
        <button
          type="submit"
          className="min-h-11 shrink-0 cursor-pointer text-sm hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Request updates{" "}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </button>
      </div>
      <p className="mt-5 text-xs text-neutral-400">
        Opens your email app to request quarterly updates.
      </p>
      <p role="status" className="mt-3 text-sm text-neutral-300">
        {message}
      </p>
    </form>
  );
}
