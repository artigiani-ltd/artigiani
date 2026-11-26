import Link from "next/link";
import { navigationLinks } from "@/components/navigation/constants/navigation";

export function AtelierFooter() {
  return (
    <footer
      id="contact"
      className="bg-background px-6 pt-16 pb-6 text-foreground md:px-[2.5%] md:pt-[7vw] md:pb-[2vw]"
    >
      <div className="grid gap-12 pb-16 md:grid-cols-[1.5fr_0.4fr_1fr] md:gap-[4vw] md:pb-[6vw]">
        <div data-reveal>
          <Link
            href="/"
            className="font-brand text-6xl focus-visible:outline-2 focus-visible:outline-offset-4 md:text-[clamp(3.75rem,5.7vw,7rem)]"
          >
            Artigiani
          </Link>
          <p className="mt-5 text-xs text-linen md:text-sm">
            Italian Architectural &amp; Sculptural Wall Art
          </p>
          <address className="mt-9 text-xs leading-relaxed not-italic text-linen md:mt-[3vw]">
            Piazza Roma 4, 36078 Valdagno (Vicenza), Italy
          </address>
        </div>
        <nav aria-label="Footer navigation" data-reveal>
          <h2 className="mb-7 text-xs text-gold uppercase">Sections</h2>
          <ul className="space-y-1 text-sm text-linen">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="inline-flex min-h-9 items-center hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div data-reveal>
          <h2 className="mb-7 text-xs text-gold uppercase">Correspondence</h2>
          <div className="flex flex-col items-start gap-1 text-sm text-linen">
            <a
              href="mailto:info@artigiani.design"
              className="inline-flex min-h-9 items-center hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              info@artigiani.design
            </a>
            <a
              href="tel:+393924697875"
              className="inline-flex min-h-9 items-center hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              +39 392 4697 875
            </a>
            <a
              href="tel:+393881053075"
              className="inline-flex min-h-9 items-center hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              +39 388 105 3075
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-gold/30 pt-5 text-xs text-linen">
        © 2026 Artigiani Limited.
      </p>
    </footer>
  );
}
