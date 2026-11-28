"use client";

import { useState } from "react";
import { ArtworkImage } from "../../_components/ArtworkImage";
import { compositionFamilies } from "../../constants/compositions";
import {
  ProductDetailDialog,
  type ProductSelection,
} from "./ProductDetailDialog";

export function ProductCompositions() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductSelection | null>(null);

  return (
    <section
      id="compositions"
      aria-labelledby="compositions-title"
      className="px-6 pt-8 pb-12 md:px-[5%] md:pt-12 md:pb-16"
    >
      <div
        data-reveal
        className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b border-background/20 pb-6 md:mb-10"
      >
        <h2
          id="compositions-title"
          className="collection-heading text-section-title leading-none"
        >
          Selected compositions
        </h2>
        <a
          href="/artissimo-compositions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the composition catalogue (PDF, opens in a new tab)"
          className="inline-flex min-h-11 items-center gap-4 text-xs tracking-[0.08em] uppercase underline underline-offset-4 hover:text-antique-gold focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Catalogue (PDF) <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-9 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {compositionFamilies
          .flatMap((family) =>
            family.pieces.map((piece) => ({
              title: `${family.name} ${piece.number}`,
              image: piece.image,
              dimensions: `${piece.millimeters} mm / ${piece.inches} in`,
              family,
              piece,
            })),
          )
          .map((composition) => (
            <article
              key={composition.title}
              className="group relative mx-auto w-full max-w-80 min-w-0"
            >
              <ArtworkImage
                src={composition.image}
                alt={composition.title}
                className="aspect-[489/413] bg-white!"
                fit="contain"
                zoomOnHover={false}
                sizes="(min-width: 1280px) 270px, (min-width: 1024px) 30vw, (min-width: 480px) 45vw, 320px"
              />
              <div
                data-reveal
                className="mt-4 border-b border-background/20 pb-5"
              >
                <div className="flex min-h-11 items-start justify-between gap-5">
                  <h3 className="collection-heading text-2xl leading-tight tracking-normal underline-offset-4 group-hover:underline">
                    {composition.title}
                  </h3>
                  <span aria-hidden="true" className="pt-1 text-xl">
                    +
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-background/70">
                  {composition.dimensions}
                </p>
              </div>
              <button
                type="button"
                aria-label={`View ${composition.title} details`}
                aria-haspopup="dialog"
                onClick={() =>
                  setSelectedProduct({
                    family: composition.family,
                    piece: composition.piece,
                  })
                }
                className="absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4"
              />
            </article>
          ))}
      </div>
      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
