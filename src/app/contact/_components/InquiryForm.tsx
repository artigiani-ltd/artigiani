const fieldClassName =
  "mt-2 w-full rounded-none border-b border-background/30 bg-transparent px-0 py-4 text-base text-background placeholder:text-background/55 disabled:cursor-not-allowed disabled:opacity-100";

export function InquiryForm() {
  return (
    <section aria-labelledby="inquiry-title" className="lg:pt-2">
      <p className="mb-5 text-xs tracking-[0.18em] uppercase">For your space</p>
      <h2
        id="inquiry-title"
        className="collection-heading text-section-title leading-none"
      >
        Start a conversation
      </h2>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-background/75">
        Tell us about your project, or ask us about a piece from the collection.
      </p>
      <p
        id="inquiry-availability"
        className="mt-5 border-l border-antique-gold pl-3 text-xs leading-relaxed text-background/75"
      >
        The inquiry form is coming soon. For now, please email or call us
        directly.
      </p>
      <fieldset
        disabled
        aria-describedby="inquiry-availability"
        className="mt-10 grid min-w-0 gap-x-7 gap-y-8 sm:grid-cols-2"
      >
        <legend className="sr-only">Inquiry form — coming soon</legend>
        <div>
          <label
            htmlFor="inquiry-name"
            className="text-[0.625rem] tracking-[0.16em] uppercase"
          >
            Your name
          </label>
          <input
            id="inquiry-name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            className={fieldClassName}
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-email"
            className="text-[0.625rem] tracking-[0.16em] uppercase"
          >
            Email address
          </label>
          <input
            id="inquiry-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="inquiry-message"
            className="text-[0.625rem] tracking-[0.16em] uppercase"
          >
            Your project
          </label>
          <textarea
            id="inquiry-message"
            rows={5}
            placeholder="A little about your space, your ideas, or the piece you have in mind…"
            className={`${fieldClassName} resize-none`}
          />
        </div>
        <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-8 bg-[#7c5f2d] px-6 text-xs tracking-[0.12em] text-foreground uppercase disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send inquiry <span aria-hidden="true">↗</span>
          </button>
          <span className="text-xs text-background/65">Available soon</span>
        </div>
      </fieldset>
    </section>
  );
}
