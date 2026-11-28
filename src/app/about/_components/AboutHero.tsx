import type { CSSProperties } from "react";
import Image from "next/image";
import jananPortrait from "../../../../public/images/about-us-janan-wide.jpg";
import { editorial } from "../../constants/fonts";
import "./AboutHero.css";

export function AboutHero() {
  let letterIndex = 0;

  return (
    <>
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center md:px-12 md:pt-28 md:pb-12">
        <p className="about-opening-fade mb-8 text-xs font-semibold tracking-[0.2em] uppercase [--opening-duration:0.9s]">
          The Artist
        </p>
        <h1 className="collection-heading text-page-title leading-none">
          <span className="sr-only">Janan Khammo</span>
          <span aria-hidden="true">
            {"Janan Khammo".split(" ").map((word, wordIndex) => (
              <span key={word}>
                {wordIndex > 0 ? " " : null}
                <span className="hero-caption-word">
                  {Array.from(word).map((letter, characterIndex) => (
                    <span
                      key={characterIndex}
                      className="about-opening-letter inline-block"
                      style={
                        { "--letter-index": letterIndex++ } as CSSProperties
                      }
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </span>
        </h1>
        <p
          className={`about-opening-fade ${editorial.className} mt-5 text-item-title leading-tight tracking-normal text-gold [--opening-delay:3.3s] [--opening-duration:0.9s]`}
        >
          From Architecture to Art
        </p>
      </header>
      <div className="about-opening-fade mx-auto max-w-7xl px-6 [--opening-delay:4.4s] md:px-12">
        <Image
          src={jananPortrait}
          alt="Janan Khammo standing with folded arms in front of his sculptural wooden wave panels"
          preload
          className="aspect-square w-full object-cover sm:aspect-[2/1]"
          sizes="(min-width: 1280px) 1184px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)"
        />
      </div>
    </>
  );
}
