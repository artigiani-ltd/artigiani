import type { CSSProperties } from "react";
import type { SceneId } from "../constants/hero-scenes";

type HeroCaptionProps = {
  sceneId: SceneId;
  lines: readonly string[];
};

export function HeroCaption({ sceneId, lines }: HeroCaptionProps) {
  let letterIndex = 0;

  return (
    <p className="hero-caption" data-scene={sceneId}>
      {lines.map((line) => (
        <span key={line} className="hero-caption-line">
          {line.split(" ").map((word, index) => (
            <span key={`${word}-${index}`}>
              {index > 0 ? " " : null}
              <span className="hero-caption-word">
                {Array.from(word).map((letter, characterIndex) => (
                  <span
                    key={characterIndex}
                    className="hero-caption-letter"
                    style={{ "--letter-index": letterIndex++ } as CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
