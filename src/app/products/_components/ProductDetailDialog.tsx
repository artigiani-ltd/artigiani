"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { compositionFamilies } from "../../constants/compositions";

type CompositionFamily = (typeof compositionFamilies)[number];

export type ProductSelection = {
  family: CompositionFamily;
  piece: CompositionFamily["pieces"][number];
};

type ProductDetailDialogProps = {
  product: ProductSelection;
  onClose: () => void;
};

export function ProductDetailDialog({
  product,
  onClose,
}: ProductDetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { family, piece } = product;
  const title = `${family.name} ${piece.number}`;
  const emailSubject = encodeURIComponent(`Artissimo 100 — ${title} inquiry`);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="product-detail-title"
      aria-describedby="product-detail-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          event.currentTarget.close();
        }
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto border-0 bg-foreground p-0 text-background backdrop:bg-background/70 backdrop:backdrop-blur-sm"
      data-lenis-prevent
    >
      <div className="relative p-5 pt-16 md:p-10 md:pt-16 lg:p-12">
        <button
          type="button"
          aria-label="Close product details"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="absolute top-2 right-2 flex size-11 cursor-pointer items-center justify-center text-2xl text-[#7c5f2d] hover:bg-[#7c5f2d] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c5f2d] md:top-3 md:right-3"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10 lg:gap-14">
          <div className="relative aspect-[489/413] bg-white">
            <Image
              src={piece.image}
              alt={`${title} composition`}
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 45vw, 90vw"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-[0.625rem] tracking-[0.16em] text-antique-gold uppercase">
              Artissimo 100 · Composition {piece.number}
            </p>
            <h2
              id="product-detail-title"
              className="collection-heading mt-4 text-section-title leading-none"
            >
              {family.name} Design
            </h2>
            <p
              id="product-detail-description"
              className="mt-5 max-w-sm text-sm leading-relaxed text-background/75"
            >
              {family.inspiration}. A modular composition from the Artissimo 100
              collection, designed to become part of your architecture.
            </p>
            <dl className="mt-7 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 border-t border-background/20 pt-6 text-xs leading-relaxed">
              <dt className="text-[0.625rem] tracking-[0.08em] uppercase">
                Composition
              </dt>
              <dd>{title}</dd>
              <dt className="text-[0.625rem] tracking-[0.08em] uppercase">
                Dimensions
              </dt>
              <dd>
                {piece.millimeters} mm
                <br />
                {piece.inches} in
              </dd>
              <dt className="text-[0.625rem] tracking-[0.08em] uppercase">
                Construction
              </dt>
              <dd>Modular configuration</dd>
              <dt className="text-[0.625rem] tracking-[0.08em] uppercase">
                Customisation
              </dt>
              <dd>Discuss a configuration for your space</dd>
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:info@artigiani.design?subject=${emailSubject}`}
                className="inline-flex min-h-11 items-center justify-center border border-[#7c5f2d] px-4 text-[0.625rem] tracking-[0.08em] text-[#7c5f2d] uppercase hover:bg-[#7c5f2d] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c5f2d]"
              >
                Email about this design
              </a>
              <a
                href={`/artissimo-compositions.pdf#page=${family.cataloguePage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${family.name} catalogue (PDF, opens in a new tab)`}
                className="inline-flex min-h-11 items-center gap-3 text-[0.625rem] tracking-[0.08em] text-[#7c5f2d] uppercase underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                View {family.name} catalogue <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
