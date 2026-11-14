import type { CSSProperties } from "react";

type HeroCaptionProps = {
  sceneId: string;
  lines: readonly string[];
};

export function HeroCaption({ sceneId, lines }: HeroCaptionProps) {
  let wordIndex = 0;

  return (
    <p className="hero-caption" data-scene={sceneId}>
      {lines.map((line) => (
        <span key={line} className="hero-caption-line">
          {line.split(" ").map((word, index) => (
            <span key={`${word}-${index}`}>
              {index > 0 ? " " : null}
              <span
                className="hero-caption-word"
                style={{ "--word-index": wordIndex++ } as CSSProperties}
              >
                {word}
              </span>
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
