import Link from "next/link";
import { navigationLinks } from "@/components/navigation/constants/navigation";
import { NewsletterForm } from "./NewsletterForm";

export function AtelierFooter() {
  return (
    <footer id="contact" className="bg-black px-6 pt-20 pb-6 text-white md:px-[2.5%] md:pt-28">
      <section aria-labelledby="newsletter-title" data-reveal className="text-center">
        <p className="mb-5 text-xs uppercase text-neutral-400">Atelier Archive</p>
        <h2 id="newsletter-title" className="collection-heading text-[clamp(2.75rem,4vw,5rem)] leading-none uppercase">Stay Informed</h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">Receive private previews of new modular collections, architectural installations, and studio news.</p>
        <NewsletterForm />
      </section>
      <div className="mt-24 grid gap-12 pb-16 md:mt-40 md:grid-cols-[2fr_0.6fr_1.4fr]">
        <div data-reveal>
          <Link href="/" className="font-brand text-6xl focus-visible:outline-2 focus-visible:outline-offset-4">Artigiani</Link>
          <p className="mt-5 text-sm text-neutral-400">Italian Architectural &amp; Sculptural Wall Art</p>
          <address className="mt-8 text-xs not-italic text-neutral-300">Piazza Roma 4, 36078 Valdagno (Vicenza), Italy</address>
        </div>
        <nav aria-label="Footer navigation" data-reveal>
          <h2 className="mb-7 text-xs uppercase">Sections</h2>
          <ul className="space-y-3 text-sm text-neutral-400">
            {navigationLinks.map(({ label, href }) => <li key={label}><Link href={href} className="inline-flex min-h-8 items-center hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4">{label}</Link></li>)}
          </ul>
        </nav>
        <div data-reveal>
          <h2 className="mb-7 text-xs uppercase">Correspondence</h2>
          <a href="mailto:info@artigiani.design" className="inline-flex min-h-8 items-center text-sm text-neutral-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4">info@artigiani.design</a>
        </div>
      </div>
      <p className="border-t border-white/20 pt-5 text-xs text-neutral-400">© 2026 Artigiani. All rights reserved.</p>
    </footer>
  );
}
